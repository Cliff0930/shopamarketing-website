import { NextRequest, NextResponse } from 'next/server';

const WP_BASE = 'https://shopamarketing.com.au/wp-json/wp/v2';

export async function GET(req: NextRequest) {
  const q = req.nextUrl.searchParams.get('q')?.trim() ?? '';

  const params = new URLSearchParams({
    per_page: '8',
    _embed: 'wp:featuredmedia,wp:term,author',
    _fields: 'id,slug,date,title,excerpt,featured_media,categories,tags,_links,_embedded',
  });
  if (q) params.set('search', q);

  const res = await fetch(`${WP_BASE}/posts?${params}`, { cache: 'no-store' });

  if (!res.ok) {
    return NextResponse.json({ posts: [], total: 0 }, { status: 200 });
  }

  const posts = await res.json();
  const total = parseInt(res.headers.get('X-WP-Total') ?? '0', 10);

  return NextResponse.json({ posts, total });
}
