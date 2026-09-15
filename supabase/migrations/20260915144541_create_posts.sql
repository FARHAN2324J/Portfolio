create table public.posts (
    id uuid primary key default gen_random_uuid(),
    title text not null,
    slug text not null unique,
    description text,
    cover_image text,
    content jsonb not null,
    created_at timestamptz not null default now(),
    updated_at timestamptz not null default now()
);

alter table public.posts enable row level security;