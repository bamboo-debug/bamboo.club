'use client';
import { createBrowserClient } from '@supabase/ssr';

export function getSupabaseBrowserClient() {
  const url = process.env.NEXT_PUBLIC_SUPABASE_URL;
  const key = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

  // 👇 AGREGÁ ESTO (debug)
  console.log("SUPABASE URL:", url);
  console.log("SUPABASE KEY:", key?.slice(0, 20));

  if (!url || !key) {
    console.log("❌ Supabase NO configurado");
    return null;
  }

  console.log("✅ Supabase OK");

  return createBrowserClient(url, key);
}