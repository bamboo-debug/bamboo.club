# Bamboo Innovation Club

Proyecto Next.js + Supabase para Bamboo.

## Estado del proyecto

Esta versión deja alineados:

- autenticación con sesión real de Supabase
- dashboard sin fallback roto por `localStorage`
- progreso de módulos usando IDs `text` (`m1`, `m2`, etc.)
- tabla `activity_claims` incluida en el esquema
- RLS para perfiles, progreso, claims, leaderboard y admin

## Configuración rápida

1. Copiá `.env.example` a `.env.local`
2. Completá:
   - `NEXT_PUBLIC_SUPABASE_URL`
   - `NEXT_PUBLIC_SUPABASE_ANON_KEY`
   - `SUPABASE_SERVICE_ROLE_KEY` (opcional, para utilidades server/admin si las agregás después)
3. En Supabase SQL Editor ejecutá `supabase/schema.sql`
4. Si ya tenías usuarios creados antes del trigger, corré:

```sql
insert into public.profiles (id, email, full_name)
select id, email, coalesce(raw_user_meta_data->>'full_name', '')
from auth.users
on conflict (id) do nothing;
```

## Admin

La tabla `profiles` tiene la columna `is_admin`.
Para darle permisos a un usuario:

```sql
update public.profiles
set is_admin = true
where email = 'tu-correo@empresa.com';
```

## Desarrollo

```bash
npm install
npm run dev
```
