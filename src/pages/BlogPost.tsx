import { useParams, Link } from "react-router-dom";
import { useEffect, useMemo } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Calendar, ArrowLeft } from "lucide-react";
import { blogPosts } from "@/data/blogPosts";
import AdComponent from "@/components/AdComponent";

const BlogPost = () => {
  const { slug } = useParams();
  const post = blogPosts.find((p) => p.slug === slug);

  if (!post) {
    return (
      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-grow flex items-center justify-center px-4">
          <div className="text-center">
            <h1 className="font-poppins text-4xl font-bold mb-4">Post Not Found</h1>
            <p className="text-muted-foreground mb-6">
              The blog post you're looking for doesn't exist.
            </p>
            <Link to="/blog">
              <Button>
                <ArrowLeft className="mr-2 h-4 w-4" />
                Back to Blog
              </Button>
            </Link>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  // Build blocks from the post content (simple markdown-like parsing)
  const contentBlocks = useMemo(() => {
    if (!post || !post.content) return [] as string[];
    return post.content.split(/\n\n+/).map((b) => b.trim());
  }, [post]);

  useEffect(() => {
    if (!post) return;
    document.title = `${post.title} — Devote Your Soul`;
    let meta = document.querySelector('meta[name="description"]');
    if (!meta) {
      meta = document.createElement('meta');
      meta.setAttribute('name', 'description');
      document.head.appendChild(meta);
    }
    meta.setAttribute('content', post.excerpt || '');
    return () => {
      // optional: restore or clear description when unmounting
    };
  }, [post]);

  const fallbackSvgDataUrl = `data:image/svg+xml;utf8,` + encodeURIComponent(`
    <svg xmlns='http://www.w3.org/2000/svg' width='1200' height='630' viewBox='0 0 1200 630'>
      <rect width='100%' height='100%' fill='#f3f4f6'/>
      <text x='60' y='140' font-family='Arial, Helvetica, sans-serif' font-size='36' fill='#111827'>Image placeholder</text>
    </svg>
  `);

  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-grow">
        <article className="py-12 px-4">
          <div className="container mx-auto max-w-3xl">
            <Link to="/blog">
              <Button variant="ghost" className="mb-6">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Back to Blog
              </Button>
            </Link>

            <div className="mb-6">
              <Badge variant="secondary" className="mb-4">
                {post.category}
              </Badge>
              <h1 className="font-poppins text-4xl sm:text-5xl font-bold mb-4 leading-tight">
                {post.title}
              </h1>
              <div className="flex items-center text-muted-foreground">
                <Calendar className="h-4 w-4 mr-2" />
                {post.date}
              </div>
            </div>

            <div className="prose prose-lg max-w-none">
              <div className="text-foreground/90 leading-relaxed">
                {contentBlocks.length === 0 && (
                  <p className="text-muted-foreground">No content available for this post.</p>
                )}

                {/* Render blocks, insert ad after first 3 paragraph blocks */}
                {(() => {
                  const nodes: any[] = [];
                  let paragraphCount = 0;
                  // sequential image counter for shorthand `// IMAGE` blocks
                  let imageSeq = 1;

                  contentBlocks.forEach((block, idx) => {
                    // IMAGE placeholder: // IMAGE: /path
                    // handle explicit path: `// IMAGE: /assets/.../file.ext`
                    if (block.startsWith('// IMAGE:')) {
                      const originalPath = block.replace('// IMAGE:', '').trim();

                      // Build an ordered candidate list: prefer same-basename .webp in blog-images,
                      // then the original path, then common extensions for the same basename.
                      let candidates: string[] = [];
                      try {
                        const parts = originalPath.split('/');
                        const base = parts[parts.length - 1].replace(/\.[^.]+$/, '');
                        candidates = [
                          `/assets/blog-images/${base}.webp`,
                          originalPath,
                          `/assets/blog-images/${base}.jpg`,
                          `/assets/blog-images/${base}.jpeg`,
                          `/assets/blog-images/${base}.png`,
                          `/assets/blog-images/${base}.svg`,
                        ];
                      } catch (err) {
                        candidates = [originalPath];
                      }

                      nodes.push(
                        <img
                          key={`img-${idx}`}
                          src={candidates[0]}
                          alt={post.title}
                          decoding="async"
                          data-attempts={`0`}
                          onError={(e) => {
                            const t = e.currentTarget as HTMLImageElement & { dataset: any };
                            const attempts = parseInt(t.dataset.attempts || '0', 10) + 1;
                            t.dataset.attempts = String(attempts);
                            if (attempts < candidates.length) {
                              t.onerror = null;
                              t.src = candidates[attempts];
                              return;
                            }
                            t.onerror = null;
                            t.src = fallbackSvgDataUrl;
                          }}
                          className="rounded-lg mb-6 w-full object-contain"
                        />
                      );
                      return;
                    }

                    // shorthand: `// IMAGE` with no path — map sequentially to
                    // /assets/blog-images/{slug}-1.webp, {slug}-2.webp, {slug}-3.webp, ...
                    if (block.trim() === '// IMAGE') {
                      const seq = imageSeq;
                      imageSeq += 1;
                      const basePath = `/assets/blog-images/${post.slug}-${seq}`;
                      const candidates = [
                        `${basePath}.webp`,
                        `${basePath}.jpg`,
                        `${basePath}.jpeg`,
                        `${basePath}.png`,
                        `${basePath}.svg`,
                      ];

                      nodes.push(
                        <img
                          key={`img-${idx}`}
                          src={candidates[0]}
                          alt={post.title}
                          decoding="async"
                          data-attempts={`0`}
                          onError={(e) => {
                            const t = e.currentTarget as HTMLImageElement & { dataset: any };
                            const attempts = parseInt(t.dataset.attempts || '0', 10) + 1;
                            t.dataset.attempts = String(attempts);
                            if (attempts < candidates.length) {
                              t.onerror = null;
                              t.src = candidates[attempts];
                              return;
                            }
                            t.onerror = null;
                            t.src = fallbackSvgDataUrl;
                          }}
                          className="rounded-lg mb-6 w-full object-contain"
                        />
                      );
                      return;
                    }

                    if (block.startsWith('## ')) {
                      const text = block.replace(/^##\s*/, '');
                      nodes.push(
                        <h2 key={`h2-${idx}`} className="mt-6 mb-2 font-semibold">
                          {text}
                        </h2>
                      );
                      return;
                    }

                    if (block.startsWith('### ')) {
                      const text = block.replace(/^###\s*/, '');
                      nodes.push(
                        <h3 key={`h3-${idx}`} className="mt-4 mb-2 font-medium">
                          {text}
                        </h3>
                      );
                      return;
                    }

                    if (block.startsWith('> ')) {
                      const text = block.replace(/^>\s*/, '');
                      nodes.push(
                        <blockquote key={`bq-${idx}`} className="pl-4 border-l-4 italic text-muted-foreground">
                          {text}
                        </blockquote>
                      );
                      return;
                    }

                    // Paragraph
                    const html = block.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>').replace(/\n/g, '<br/>');
                    paragraphCount += 1;
                    nodes.push(
                      <div key={`p-${idx}`} className="mb-4" dangerouslySetInnerHTML={{ __html: html }} />
                    );

                    // Insert ad after the third paragraph (only once)
                    if (paragraphCount === 3) {
                      nodes.push(
                        <div key={`ad-after-3`} className="my-12">
                          <AdComponent
                            data-ad-client="ca-pub-1682168765289599"
                            data-ad-slot="5802456201"
                            data-ad-format="auto"
                            data-full-width-responsive="true"
                          />
                        </div>
                      );
                    }
                  });

                  return nodes;
                })()}
                
              </div>
            </div>

            {/* Insert Ad after first 3 actual paragraphs */}
            {post.content && (
              <div className="my-12">
                <AdComponent
                  data-ad-client="ca-pub-1682168765289599"
                  data-ad-slot="5802456201"
                  data-ad-format="auto"
                  data-full-width-responsive="true"
                />
              </div>
            )}

            {/* Related Posts */}
            <section className="mt-12">
              <h2 className="font-poppins text-2xl font-semibold mb-6">Related Posts</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {(() => {
                  const sameCategory = blogPosts.filter((p) => p.id !== post.id && p.category === post.category);
                  let pool = sameCategory.length >= 3 ? sameCategory : blogPosts.filter((p) => p.id !== post.id);
                  // shuffle pool and take 3
                  for (let i = pool.length - 1; i > 0; i--) {
                    const j = Math.floor(Math.random() * (i + 1));
                    [pool[i], pool[j]] = [pool[j], pool[i]];
                  }
                  return pool.slice(0, 3).map((rp) => (
                    <Link key={rp.id} to={`/blog/${rp.slug}`} className="flex flex-col items-start">
                      <img
                        src={rp.image}
                        alt={rp.title}
                        decoding="async"
                        data-attempts="0"
                        onError={(e) => {
                          const t = e.currentTarget as HTMLImageElement & { dataset: any };
                          const parts = (rp.image || '').split('/');
                          const base = parts[parts.length - 1]?.replace(/\.[^.]+$/, '');
                          const candidates = base
                            ? [`/assets/blog-images/${base}.webp`, `/assets/blog-images/${base}.jpg`, `/assets/blog-images/${base}.jpeg`, `/assets/blog-images/${base}.png`, `/assets/blog-images/${base}.svg`, rp.image]
                            : [rp.image];
                          const attempts = parseInt(t.dataset.attempts || '0', 10) + 1;
                          t.dataset.attempts = String(attempts);
                          if (attempts <= candidates.length) {
                            t.onerror = null;
                            t.src = candidates[attempts - 1];
                            return;
                          }
                          t.onerror = null;
                          t.src = fallbackSvgDataUrl;
                        }}
                        className="w-full h-36 object-cover rounded-md mb-3"
                      />
                      <h3 className="font-semibold">{rp.title}</h3>
                      <p className="text-sm text-muted-foreground">{(rp.excerpt || '').split(' ').slice(0,20).join(' ')}{(rp.excerpt || '').split(' ').length>20? '...' : ''}</p>
                    </Link>
                  ));
                })()}
              </div>
            </section>

            <div className="mt-12 pt-8 border-t border-border">
              <div className="flex items-center justify-between">
                <p className="text-muted-foreground">
                  Thank you for reading. May peace be with you.
                </p>
                <Link to="/blog">
                  <Button variant="outline">Read More Posts</Button>
                </Link>
              </div>
            </div>
          </div>
        </article>
      </main>

      <Footer />
    </div>
  );
};

export default BlogPost;
