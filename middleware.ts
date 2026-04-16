import { NextResponse, type NextRequest } from 'next/server';
import { createServerClient } from '@supabase/ssr';

const ADMIN_EMAILS: string[] = [
  'bamboo@texo.com.py',
];

export async function middleware(request: NextRequest) {
  const response = NextResponse.next({ request });

  const url = process.env.NEXT_PUBLIC_SUPABASE_URL;
  const key = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

  // Si no hay config de Supabase, dejar pasar todo
  if (!url || !key) return response;

  // Solo proteger /admin — el resto lo maneja el cliente
  if (!request.nextUrl.pathname.startsWith('/admin')) {
    return response;
  }

  const supabase = createServerClient(url, key, {
    cookies: {
      get(name) { return request.cookies.get(name)?.value; },
      set(name, value, options) {
        request.cookies.set({ name, value, ...options });
        response.cookies.set({ name, value, ...options });
      },
      remove(name, options) {
        request.cookies.set({ name, value: '', ...options });
        response.cookies.set({ name, value: '', ...options, maxAge: 0 });
      },
    },
  });

  const { data: { user } } = await supabase.auth.getUser();

  if (!user) {
    const loginUrl = new URL('/auth', request.url);
    loginUrl.searchParams.set('redirect', '/admin');
    return NextResponse.redirect(loginUrl);
  }

  if (!ADMIN_EMAILS.includes(user.email ?? '')) {
    return new NextResponse(
      `<!DOCTYPE html><html lang="es"><head><meta charset="UTF-8"/><title>Acceso restringido</title>
      <style>body{font-family:Inter,sans-serif;background:#f2f8f7;display:flex;align-items:center;justify-content:center;min-height:100vh;margin:0;}
      .box{background:#fff;border:1px solid #cde4e0;border-radius:24px;padding:48px;max-width:420px;text-align:center;}
      a{background:#0a9e8a;color:#fff;border-radius:999px;padding:12px 24px;font-weight:700;text-decoration:none;display:inline-block;margin-top:16px;}</style>
      </head><body><div class="box"><h1>Acceso restringido</h1>
      <p>Esta sección es solo para administradores de Bamboo.</p>
      <a href="/dashboard">Volver al inicio</a></div></body></html>`,
      { status: 403, headers: { 'Content-Type': 'text/html' } }
    );
  }

  return response;
}

export const config = {
  matcher: ['/admin/:path*'],
};
