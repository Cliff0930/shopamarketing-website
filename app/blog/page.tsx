import TemplateScripts from "@/components/TemplateScripts";
import BlogSearch from "@/components/blog/BlogSearch";
import { getPostsPaged, getPosts, getCategories, getTags, featuredImage, formatDate } from "@/lib/wordpress";

export const revalidate = 3600;

const PER_PAGE = 8;

export default async function BlogPage({
  searchParams,
}: {
  searchParams: { page?: string; cat?: string };
}) {
  const currentPage = Math.max(1, parseInt(searchParams.page ?? '1', 10));
  const activeCatId = searchParams.cat ? parseInt(searchParams.cat, 10) : undefined;

  const [{ posts, totalPages }, recentPosts, categories, tags] = await Promise.all([
    getPostsPaged(currentPage, PER_PAGE, '', activeCatId),
    getPosts(4),
    getCategories(),
    getTags(),
  ]);

  return (
    <>
      <TemplateScripts />

      {/* preloader */}
      <div id="preloader">
        <div className="loader_line"></div>
      </div>

      {/* breadcrumb-area-start */}
      <div
        className="breadcrumb-area bg-default has-breadcrumb-overlay"
        style={{ backgroundImage: "url('/assets/img/breadcrumb/blog-hero.webp')", backgroundSize: 'cover' }}
      >
        <div className="container h1-container">
          <div className="row">
            <div className="col-xxl-12">
              <div className="breadcrumb-wrap text-center">
                <h2 className="breadcrumb-title chy-heading-1 chy-split-in-right chy-split-text">Our Blog</h2>
                <div className="breadcrumb-list wow fadeInUp" data-wow-duration="2s">
                  <a href="/">Home</a>
                  <span>Our Blog</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* breadcrumb-area-end */}

      {/* blog-start */}
      <div className="blog-page-2-area pt-120 pb-70">
        <div className="container chy-container-1">
          <div className="row">

            {/* left — live search + post grid + pagination (client component) */}
            <BlogSearch
              initialPosts={posts}
              totalPages={totalPages}
              currentPage={currentPage}
              activeCategoryName={activeCatId ? categories.find(c => c.id === activeCatId)?.name : undefined}
            />

            {/* sidebar */}
            <div className="col-xxl-4 col-xl-4 col-lg-4">
              <div className="blog-2-page-sidebar mb-50">

                {/* categories — live from WordPress */}
                <div className="sidebar-box mb-30 wow fadeInUp">
                  <h4 className="sidebar-box-title chy-heading-1">Categories</h4>
                  <div className="sidebar-box-wrap">
                    <ul className="sidebar-category has-number">
                      <li>
                        <a href="/blog" style={!activeCatId ? { color: 'var(--primary)', fontWeight: 700 } : {}}>
                          <span className="text">All Posts</span>
                          <span className="number">
                            {categories.reduce((sum, c) => sum + c.count, 0)}
                          </span>
                        </a>
                      </li>
                      {categories.map((cat) => (
                        <li key={cat.id} className="wow fadeInUp">
                          <a
                            href={`/blog?cat=${cat.id}`}
                            style={activeCatId === cat.id ? { color: 'var(--primary)', fontWeight: 700 } : {}}
                          >
                            <span className="text">{cat.name}</span>
                            <span className="number">{String(cat.count).padStart(2, '0')}</span>
                          </a>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* recent posts */}
                <div className="sidebar-box mb-30 wow fadeInUp">
                  <h4 className="sidebar-box-title chy-heading-1">recent posts</h4>
                  <div className="sidebar-box-wrap">
                    <div className="latest-post-item-wrap">
                      {recentPosts.slice(0, 4).map((post) => (
                        <div key={post.id} className="latest-post-item">
                          <div className="img">
                            <a aria-label="recent post" href={`/blog/${post.slug}`}>
                              <img src={featuredImage(post)} alt=""
                                style={{ width: '100%', height: 'auto', display: 'block', borderRadius: '8px' }} />
                            </a>
                          </div>
                          <div className="content">
                            <span className="date chy-para-1">
                              <i className="fal fa-calendar-alt"></i> {formatDate(post.date)}
                            </span>
                            <h6 className="title chy-heading-1">
                              <a aria-label="recent post" href={`/blog/${post.slug}`}
                                dangerouslySetInnerHTML={{ __html: post.title.rendered }} />
                            </h6>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* tags */}
                <div className="sidebar-box wow fadeInUp">
                  <h4 className="sidebar-box-title chy-heading-1">tags</h4>
                  <div className="sidebar-box-wrap">
                    <div className="sidebar-tag">
                      {tags.map((tag) => (
                        <a key={tag.id} aria-label="tags" href={`/blog?cat=${tag.id}`}>{tag.name}</a>
                      ))}
                    </div>
                  </div>
                </div>

              </div>
            </div>

          </div>
        </div>
      </div>
      {/* blog-end */}

      {/* back to top */}
      <div className="scroll-top has-home-1">
        <div className="scroll-top-wrap">
          <i className="icon-1 fal fa-long-arrow-up"></i>
        </div>
      </div>

      {/* overlay */}
      <div className="offcanvas-overlay"></div>
    </>
  );
}
