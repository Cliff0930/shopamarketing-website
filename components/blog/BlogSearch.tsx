'use client';

import { useState, useEffect, useRef, useCallback } from 'react';
import type { WPPost } from '@/lib/wordpress';
import { featuredImage, stripHtml, formatDate } from '@/lib/wordpress';

const SEARCH_HINTS = [
  'SEO strategies',
  'Social media tips',
  'Google Ads',
  'Digital marketing',
  'OOH advertising',
  'Content marketing',
  'Brand identity',
  'Lead generation',
];

function useTypewriter(active: boolean) {
  const [display, setDisplay] = useState('');
  const termIndex = useRef(0);
  const charIndex = useRef(0);
  const phase = useRef<'typing' | 'pausing' | 'deleting' | 'waiting'>('typing');
  const timer = useRef<ReturnType<typeof setTimeout> | null>(null);

  const tick = useCallback(() => {
    if (!active) return;
    const term = SEARCH_HINTS[termIndex.current];

    if (phase.current === 'typing') {
      charIndex.current += 1;
      setDisplay(term.slice(0, charIndex.current));
      if (charIndex.current === term.length) {
        phase.current = 'pausing';
        timer.current = setTimeout(tick, 1600);
      } else {
        timer.current = setTimeout(tick, 80);
      }
    } else if (phase.current === 'pausing') {
      phase.current = 'deleting';
      timer.current = setTimeout(tick, 40);
    } else if (phase.current === 'deleting') {
      charIndex.current -= 1;
      setDisplay(term.slice(0, charIndex.current));
      if (charIndex.current === 0) {
        phase.current = 'waiting';
        termIndex.current = (termIndex.current + 1) % SEARCH_HINTS.length;
        timer.current = setTimeout(tick, 450);
      } else {
        timer.current = setTimeout(tick, 40);
      }
    } else {
      phase.current = 'typing';
      timer.current = setTimeout(tick, 80);
    }
  }, [active]);

  useEffect(() => {
    if (!active) {
      if (timer.current) clearTimeout(timer.current);
      setDisplay('');
      charIndex.current = 0;
      phase.current = 'typing';
      return;
    }
    timer.current = setTimeout(tick, 600);
    return () => { if (timer.current) clearTimeout(timer.current); };
  }, [active, tick]);

  return display;
}

interface Props {
  initialPosts: WPPost[];
  totalPages: number;
  currentPage: number;
  activeCategoryName?: string;
}

export default function BlogSearch({ initialPosts, totalPages, currentPage, activeCategoryName }: Props) {
  const [query, setQuery] = useState('');
  const [focused, setFocused] = useState(false);
  const [posts, setPosts] = useState<WPPost[]>(initialPosts);
  const typewriter = useTypewriter(!focused && query === '');
  const [total, setTotal] = useState<number | null>(null);
  const [loading, setLoading] = useState(false);
  const debounceRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const isSearching = query.trim().length > 0;

  useEffect(() => {
    if (debounceRef.current) clearTimeout(debounceRef.current);

    if (!query.trim()) {
      setPosts(initialPosts);
      setTotal(null);
      setLoading(false);
      return;
    }

    setLoading(true);
    debounceRef.current = setTimeout(async () => {
      try {
        const res = await fetch(`/api/blog/search?q=${encodeURIComponent(query.trim())}`);
        const data = await res.json();
        setPosts(data.posts);
        setTotal(data.total);
      } catch {
        setPosts([]);
        setTotal(0);
      } finally {
        setLoading(false);
      }
    }, 350);

    return () => {
      if (debounceRef.current) clearTimeout(debounceRef.current);
    };
  }, [query]);

  // Keep initial posts in sync when server re-renders (pagination navigation)
  useEffect(() => {
    if (!isSearching) setPosts(initialPosts);
  }, [initialPosts]);

  return (
    <div className="col-xxl-8 col-xl-8 col-lg-8">

      {/* inline search bar above results (mirrors sidebar, mobile-friendly) */}
      <div className="blog-live-search-bar mb-30">
        <div className="sidebar-search-box" style={{ position: 'relative' }}>
          <input
            type="search"
            className="search-input"
            placeholder={focused || query ? 'Search posts…' : (typewriter || 'Search posts…')}
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            onFocus={() => setFocused(true)}
            onBlur={() => setFocused(false)}
            style={{ paddingRight: '48px' }}
          />
          <span className="search-icon" style={{ position: 'absolute', right: '14px', top: '50%', transform: 'translateY(-50%)', pointerEvents: 'none' }}>
            {loading
              ? <i className="fal fa-spinner fa-spin" style={{ color: 'var(--primary)' }}></i>
              : <i className="fal fa-search"></i>
            }
          </span>
        </div>

        {activeCategoryName && !isSearching && (
          <p className="chy-para-1 mt-10" style={{ fontSize: '13px' }}>
            Showing posts in <strong style={{ color: 'var(--primary)' }}>{activeCategoryName}</strong>
            &nbsp;— <a href="/blog" style={{ color: 'var(--primary)' }}>View all</a>
          </p>
        )}
        {isSearching && (
          <p className="chy-para-1 mt-10" style={{ fontSize: '13px' }}>
            {loading
              ? 'Searching…'
              : total === 0
                ? <>No results for &ldquo;<strong>{query}</strong>&rdquo;. <button onClick={() => setQuery('')} style={{ color: 'var(--primary)', background: 'none', border: 'none', cursor: 'pointer', padding: 0, fontFamily: 'inherit', fontSize: 'inherit' }}>Clear</button></>
                : <>{total} result{total !== 1 ? 's' : ''} for &ldquo;<strong>{query}</strong>&rdquo;</>
            }
          </p>
        )}
      </div>

      {/* post grid */}
      <div className="blog-page-2-item mb-20">
        <div className="row">
          {posts.map((post) => (
            <div key={post.id} className="col-xl-6 col-lg-12 col-md-6">
              <div className="chy-blog-1-item">
                <div className="main-img img-cover">
                  <img src={featuredImage(post)} alt={stripHtml(post.title.rendered)} />
                </div>
                <span className="chy-para-1 date">{formatDate(post.date)}</span>
                <h4 className="chy-heading-1 title">
                  <a href={`/blog/${post.slug}`}
                    dangerouslySetInnerHTML={{ __html: post.title.rendered }} />
                </h4>
                <p className="chy-para-1 disc">
                  {stripHtml(post.excerpt.rendered).slice(0, 120)}…
                </p>
                <div className="author">
                  <span className="chy-heading-1 name">
                    by {post._embedded?.author?.[0]?.name ?? 'Shopa Marketing'}
                  </span>
                  <span className="line"></span>
                </div>
              </div>
            </div>
          ))}

          {!loading && posts.length === 0 && isSearching && (
            <div className="col-12">
              <p className="chy-para-1 text-center" style={{ padding: '40px 0' }}>
                No posts found. <button onClick={() => setQuery('')} style={{ color: 'var(--primary)', background: 'none', border: 'none', cursor: 'pointer', fontFamily: 'inherit', fontSize: 'inherit' }}>Show all posts</button>
              </p>
            </div>
          )}
        </div>
      </div>

      {/* pagination — hidden while searching */}
      {!isSearching && totalPages > 1 && (
        <div className="chy-blog-pagination mt-40 mb-20">
          <div className="pagination-wrap">
            {currentPage > 1 && (
              <a href={`/blog?page=${currentPage - 1}`} className="page-btn prev" aria-label="previous page">
                <i className="fas fa-chevron-left"></i>
              </a>
            )}
            {Array.from({ length: totalPages }, (_, i) => i + 1).map((n) => {
              const isActive = n === currentPage;
              const nearCurrent = Math.abs(n - currentPage) <= 2;
              const isEdge = n === 1 || n === totalPages;
              if (!nearCurrent && !isEdge) {
                if (n === 2 || n === totalPages - 1) return <span key={n} className="page-ellipsis">…</span>;
                return null;
              }
              return (
                <a key={n} href={`/blog?page=${n}`}
                  className={`page-num${isActive ? ' active' : ''}`}
                  aria-current={isActive ? 'page' : undefined}>
                  {n}
                </a>
              );
            })}
            {currentPage < totalPages && (
              <a href={`/blog?page=${currentPage + 1}`} className="page-btn next" aria-label="next page">
                <i className="fas fa-chevron-right"></i>
              </a>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
