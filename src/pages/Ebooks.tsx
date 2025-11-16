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

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {ebooks.map((e) => (
              <div key={e.id} className="border rounded-lg overflow-hidden shadow-sm">
                <img
                  src={e.image || makePlaceholderDataUrl(e.title)}
                  alt={e.title}
                  className="w-full h-44 object-cover"
                  onError={(ev) => {
                    const target = ev.currentTarget as HTMLImageElement;
                    const placeholder = makePlaceholderDataUrl(e.title);
                    if (target.src !== placeholder) target.src = placeholder;
                  }}
                />
                <div className="p-4">
                  <h3 className="font-semibold text-lg mb-2">{e.title}</h3>
                  <p className="text-sm text-muted-foreground mb-4">{e.excerpt}</p>
                  <div className="flex items-center justify-between">
                    <span className="font-medium">{e.price}</span>
                    <a
                      href={`${SUPERPROFILE_BASE}?product=${encodeURIComponent(e.slug)}`}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Button variant="default">Buy on Superprofile</Button>
                    </a>
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
