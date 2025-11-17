import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { ebooks } from "@/data/ebooks";
import { Link } from "react-router-dom";

const SUPERPROFILE_BASE = "https://superprofile.example.com/store"; // replace with your real Superprofile URL

const makePlaceholderDataUrl = (title = "eBook") => {
  const svg = `
  <svg xmlns='http://www.w3.org/2000/svg' width='800' height='600' viewBox='0 0 800 600' preserveAspectRatio='xMidYMid slice'>
    <rect width='100%' height='100%' fill='%23f3f4f6' />
    <rect x='40' y='40' width='720' height='520' rx='8' fill='%23fff' />
    <text x='50%' y='50%' dominant-baseline='middle' text-anchor='middle' font-family='Arial, Helvetica, sans-serif' font-size='28' fill='%23888'>
      ${title.replace(/'/g, "\\'").substring(0, 32)}
    </text>
  </svg>`;

  return `data:image/svg+xml;utf8,${encodeURIComponent(svg)}`;
};

const Ebooks = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-grow py-12">
        <section className="container mx-auto max-w-6xl px-4">
          <div className="text-center mb-10">
            <h1 className="font-poppins text-4xl sm:text-5xl font-bold">eBook Store</h1>
            <p className="text-muted-foreground mt-3 max-w-2xl mx-auto">A curated collection of short guides and workbooks. Purchasing redirects to Superprofile for checkout.</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {ebooks.map((e) => (
              <div key={e.id} className="border rounded-lg overflow-hidden shadow-sm flex flex-col bg-white">
                <div className="relative bg-gray-100" style={{ aspectRatio: '210 / 297' }}>
                  {/* Try to load a .webp cover at /assets/ebook-covers/{slug}.webp first. If it 404s, fall back to e.image (placeholders) or the inline placeholder. */}
                  <img
                    src={`/assets/ebook-covers/${e.slug}.webp`}
                    alt={e.title}
                    className="w-full h-full object-contain object-center block bg-gray-100"
                    onError={(ev) => {
                      const target = ev.currentTarget as HTMLImageElement;

                      // Try a .webp that matches the existing e.image filename (useful if you uploaded ebook-placeholder-1.webp)
                      let fallbackFromImage: string | null = null;
                      if (e.image) {
                        const parts = e.image.split("/");
                        const name = parts[parts.length - 1].replace(/\.[a-zA-Z0-9]+$/, "");
                        fallbackFromImage = `/assets/ebook-covers/${name}.webp`;
                      }

                      if (fallbackFromImage && target.src !== fallbackFromImage) {
                        target.src = fallbackFromImage;
                        return;
                      }

                      const finalFallback = e.image || makePlaceholderDataUrl(e.title);
                      if (target.src !== finalFallback) target.src = finalFallback;
                    }}
                  />

                  {/* Overlay title + short excerpt on cover for a modern compact look */}
                  <div className="absolute inset-x-0 bottom-0 p-3 bg-gradient-to-t from-black/90 via-black/60 to-transparent text-white">
                    <div className="flex items-start justify-between">
                      <div className="max-w-[62%]">
                        <h3 className="font-semibold text-sm leading-tight truncate">{e.title}</h3>
                        <p className="text-xs opacity-90 truncate mt-1">{e.excerpt}</p>
                      </div>
                      <div className="flex flex-col items-end gap-2">
                        <span className="bg-white/10 text-white px-2 py-1 rounded text-sm font-semibold">{e.price}</span>
                        <a
                          href={`${SUPERPROFILE_BASE}?product=${encodeURIComponent(e.slug)}`}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <Button variant="default" className="h-8 px-3 text-sm">Buy</Button>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <Link to="/blog">
              <Button variant="ghost">Back to Blog</Button>
            </Link>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Ebooks;
