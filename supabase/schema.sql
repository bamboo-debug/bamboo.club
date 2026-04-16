create extension if not exists "pgcrypto";

create or replace function public.set_updated_at()
returns trigger
language plpgsql
as $$
begin
  new.updated_at = now();
  return new;
end;
$$;

create table if not exists public.profiles (
  id uuid primary key references auth.users(id) on delete cascade,
  email text unique not null,
  full_name text,
  area text,
  points int not null default 20,
  streak_days int not null default 0,
  is_admin boolean not null default false,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create table if not exists public.modules (
  id text primary key,
  slug text unique not null,
  title text not null,
  description text,
  month_label text,
  theme text,
  level_required int not null default 1,
  xp_reward int not null default 100,
  lessons_count int not null default 1,
  published boolean not null default true,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create table if not exists public.activities (
  id text primary key,
  title text not null,
  description text,
  category text not null check (category in ('taller','curso','blog','reto','evento')),
  date_label text,
  xp_reward int not null default 0,
  status text not null default 'upcoming' check (status in ('upcoming', 'completed')),
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create table if not exists public.blog_posts (
  id uuid primary key default gen_random_uuid(),
  author_id uuid references public.profiles(id) on delete set null,
  title text not null,
  summary text,
  body text,
  tag text,
  status text not null default 'draft' check (status in ('draft','published')),
  xp_reward int not null default 250,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create table if not exists public.blog_submissions (
  id uuid primary key default gen_random_uuid(),
  profile_id uuid references public.profiles(id) on delete set null,
  title text not null,
  topic text,
  summary text not null,
  content text not null,
  status text not null default 'draft' check (status in ('draft','submitted','approved','rejected')),
  review_email text default 'bamboo@texo.com.py',
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create table if not exists public.module_progress (
  id uuid primary key default gen_random_uuid(),
  profile_id uuid not null references public.profiles(id) on delete cascade,
  module_id text not null references public.modules(id) on delete cascade,
  completed_sections text[] not null default '{}',
  exercise_completed boolean not null default false,
  quiz_answered boolean not null default false,
  quiz_correct boolean,
  completed boolean not null default false,
  earned_points int not null default 0,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now(),
  unique(profile_id, module_id)
);

create table if not exists public.activity_claims (
  id uuid primary key default gen_random_uuid(),
  profile_id uuid not null references public.profiles(id) on delete cascade,
  activity_id text not null references public.activities(id) on delete cascade,
  activity_title text not null,
  evidence text not null,
  xp_reward int not null default 0,
  status text not null default 'pending' check (status in ('pending','approved','rejected')),
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create table if not exists public.points_ledger (
  id uuid primary key default gen_random_uuid(),
  profile_id uuid not null references public.profiles(id) on delete cascade,
  source_type text not null,
  source_id text,
  description text not null,
  points int not null,
  created_at timestamptz not null default now()
);

drop trigger if exists profiles_set_updated_at on public.profiles;
create trigger profiles_set_updated_at
before update on public.profiles
for each row execute procedure public.set_updated_at();

drop trigger if exists modules_set_updated_at on public.modules;
create trigger modules_set_updated_at
before update on public.modules
for each row execute procedure public.set_updated_at();

drop trigger if exists activities_set_updated_at on public.activities;
create trigger activities_set_updated_at
before update on public.activities
for each row execute procedure public.set_updated_at();

drop trigger if exists blog_posts_set_updated_at on public.blog_posts;
create trigger blog_posts_set_updated_at
before update on public.blog_posts
for each row execute procedure public.set_updated_at();

drop trigger if exists blog_submissions_set_updated_at on public.blog_submissions;
create trigger blog_submissions_set_updated_at
before update on public.blog_submissions
for each row execute procedure public.set_updated_at();

drop trigger if exists module_progress_set_updated_at on public.module_progress;
create trigger module_progress_set_updated_at
before update on public.module_progress
for each row execute procedure public.set_updated_at();

drop trigger if exists activity_claims_set_updated_at on public.activity_claims;
create trigger activity_claims_set_updated_at
before update on public.activity_claims
for each row execute procedure public.set_updated_at();

create or replace function public.handle_new_user()
returns trigger
language plpgsql
security definer
as $$
begin
  insert into public.profiles (id, email, full_name)
  values (new.id, new.email, coalesce(new.raw_user_meta_data->>'full_name', ''))
  on conflict (id) do update
    set email = excluded.email,
        full_name = coalesce(excluded.full_name, public.profiles.full_name);
  return new;
end;
$$;

drop trigger if exists on_auth_user_created on auth.users;
create trigger on_auth_user_created
after insert on auth.users
for each row execute procedure public.handle_new_user();

alter table public.profiles enable row level security;
alter table public.blog_posts enable row level security;
alter table public.blog_submissions enable row level security;
alter table public.module_progress enable row level security;
alter table public.activity_claims enable row level security;
alter table public.points_ledger enable row level security;

create or replace function public.is_admin(uid uuid)
returns boolean
language sql
stable
as $$
  select exists (
    select 1
    from public.profiles
    where id = uid and is_admin = true
  );
$$;

drop policy if exists "Users can view own profile" on public.profiles;
create policy "Users can view own profile"
on public.profiles for select
using (auth.uid() = id);

drop policy if exists "Authenticated users can read leaderboard profiles" on public.profiles;
create policy "Authenticated users can read leaderboard profiles"
on public.profiles for select
using (auth.uid() is not null);

drop policy if exists "Users can insert own profile" on public.profiles;
create policy "Users can insert own profile"
on public.profiles for insert
with check (auth.uid() = id);

drop policy if exists "Users can update own profile" on public.profiles;
create policy "Users can update own profile"
on public.profiles for update
using (auth.uid() = id)
with check (auth.uid() = id);

drop policy if exists "Users can read published blog posts" on public.blog_posts;
create policy "Users can read published blog posts"
on public.blog_posts for select
using (status = 'published' or auth.uid() = author_id or public.is_admin(auth.uid()));

drop policy if exists "Users can insert own blog drafts" on public.blog_posts;
create policy "Users can insert own blog drafts"
on public.blog_posts for insert
with check (auth.uid() = author_id);

drop policy if exists "Users can update own blog drafts" on public.blog_posts;
create policy "Users can update own blog drafts"
on public.blog_posts for update
using (auth.uid() = author_id or public.is_admin(auth.uid()));

drop policy if exists "Users can read own submissions" on public.blog_submissions;
create policy "Users can read own submissions"
on public.blog_submissions for select
using (auth.uid() = profile_id or public.is_admin(auth.uid()));

drop policy if exists "Users can insert own submissions" on public.blog_submissions;
create policy "Users can insert own submissions"
on public.blog_submissions for insert
with check (auth.uid() = profile_id);

drop policy if exists "Users can update own draft submissions" on public.blog_submissions;
create policy "Users can update own draft submissions"
on public.blog_submissions for update
using (auth.uid() = profile_id or public.is_admin(auth.uid()));

drop policy if exists "Users can view own module progress" on public.module_progress;
create policy "Users can view own module progress"
on public.module_progress for select
using (auth.uid() = profile_id or public.is_admin(auth.uid()));

drop policy if exists "Users can insert own module progress" on public.module_progress;
create policy "Users can insert own module progress"
on public.module_progress for insert
with check (auth.uid() = profile_id);

drop policy if exists "Users can update own module progress" on public.module_progress;
create policy "Users can update own module progress"
on public.module_progress for update
using (auth.uid() = profile_id or public.is_admin(auth.uid()))
with check (auth.uid() = profile_id or public.is_admin(auth.uid()));

drop policy if exists "Users can view own activity claims" on public.activity_claims;
create policy "Users can view own activity claims"
on public.activity_claims for select
using (auth.uid() = profile_id or public.is_admin(auth.uid()));

drop policy if exists "Users can insert own activity claims" on public.activity_claims;
create policy "Users can insert own activity claims"
on public.activity_claims for insert
with check (auth.uid() = profile_id);

drop policy if exists "Users can update own activity claims" on public.activity_claims;
create policy "Users can update own activity claims"
on public.activity_claims for update
using (auth.uid() = profile_id or public.is_admin(auth.uid()))
with check (auth.uid() = profile_id or public.is_admin(auth.uid()));

drop policy if exists "Users can view own ledger" on public.points_ledger;
create policy "Users can view own ledger"
on public.points_ledger for select
using (auth.uid() = profile_id or public.is_admin(auth.uid()));

-- Seed opcional para alinear la base con los módulos y actividades del frontend.
insert into public.modules (id, slug, title, description, month_label, theme, level_required, xp_reward, lessons_count)
values
  ('m1', 'innovacion-en-agencia', '¿Qué es innovación en una agencia de verdad?', 'Introducción a los fundamentos de innovación en agencia.', 'Mes 1', 'Fundamentos', 1, 120, 4),
  ('m2', 'detectar-fricciones', 'Cómo detectar fricciones que valen oro', 'Aprender a convertir fricciones cotidianas en oportunidades.', 'Mes 2', 'Observación', 1, 120, 4),
  ('m3', 'ideas-con-criterio', 'Ideas mejores, no solo más ideas', 'Priorización y criterio para innovar con impacto.', 'Mes 3', 'Criterio', 2, 140, 4)
on conflict (id) do nothing;

insert into public.activities (id, title, description, category, date_label, xp_reward, status)
values
  ('a1', 'Workshop de innovación práctica', 'Taller mensual para aplicar herramientas de innovación.', 'taller', 'Este mes', 120, 'upcoming'),
  ('a2', 'Curso express de IA aplicada', 'Curso breve para explorar usos reales de IA en el trabajo diario.', 'curso', 'Este mes', 150, 'upcoming'),
  ('a3', 'Reto de mejora interna', 'Desafío para detectar y resolver una fricción real del equipo.', 'reto', 'Este mes', 100, 'upcoming')
on conflict (id) do nothing;
