import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import BlogCard from "@/components/BlogCard";
import { Button } from "@/components/ui/button";
import { Sparkles, Heart, BookOpen } from "lucide-react";
import { blogPosts } from "@/data/blogPosts";

const Index = () => {
  const featuredPosts = blogPosts.slice(0, 3);

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-grow">
        <section
          className="hero-gradient py-20 sm:py-28 lg:py-36 px-4 bg-cover bg-center relative"
          // Place a PNG at /public/mahabharata-bg.png (licensed or your own image).
          // Use a PNG with this exact name or update the URL below. We also include the SVG as a fallback
          // so the hero still shows something if the PNG isn't yet present or the dev server isn't running.
          style={{ backgroundImage: 'url("/mahabharata-bg.png"), url("/mahabharata-bg.svg")' }}
        >
          {/* overlay so text remains readable */}
          <div className="absolute inset-0 bg-black/50 z-0" aria-hidden />
          <div className="container mx-auto max-w-4xl text-center relative z-10 text-white">
            <div className="inline-flex items-center justify-center p-2 bg-primary/10 rounded-full mb-6 animate-pulse">
              <Sparkles className="h-6 w-6 text-primary" />
            </div>
            <h1 className="font-poppins text-3xl sm:text-4xl lg:text-5xl font-bold mb-6 leading-tight">
              <span className="block text-2xl leading-relaxed">कर्मण्येवाधिकारस्ते मा फलेषु कदाचन</span>
              <span className="block text-lg text-white/80 mt-2">karmanye vadhikaraste, ma phaleshu kadachana</span>
            </h1>
            <p className="font-lora text-lg sm:text-xl text-white/90 mb-8 italic max-w-2xl mx-auto">
              "You have the right to perform your prescribed duty, but you are not entitled to the fruits of action." — Bhagavad Gita 2.47
            </p>
            <p className="text-lg text-white/80 mb-10 max-w-2xl mx-auto leading-relaxed">
              Welcome to DevoteYourSoul — a place where ancient wisdom meets living practice. May these words inspire steady action and inner calm.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/blog">
                <Button size="lg" className="font-medium group">
                  Explore Our Reflections
                  <BookOpen className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Button>
              </Link>
            </div>
          </div>
        </section>

        <section className="py-16 sm:py-20 px-4 bg-background">
          <div className="container mx-auto max-w-6xl">
            <div className="text-center mb-12">
              <h2 className="font-poppins text-3xl sm:text-4xl font-bold mb-4">
                Featured Reflections
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Dive into our latest spiritual insights and mindfulness practices
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {featuredPosts.map((post) => (
                <BlogCard
                  key={post.id}
                  title={post.title}
                  excerpt={post.excerpt}
                  category={post.category}
                  date={post.date}
                  slug={post.slug}
                  image={post.image}
                />
              ))}
            </div>
            <div className="text-center mt-10">
              <Link to="/blog">
                <Button variant="outline" size="lg">
                  View All Posts
                </Button>
              </Link>
            </div>
          </div>
        </section>

        <section className="spiritual-gradient py-16 sm:py-20 px-4">
          <div className="container mx-auto max-w-3xl text-center">
            <Heart className="h-12 w-12 text-primary mx-auto mb-6" />
            <h2 className="font-poppins text-3xl sm:text-4xl font-bold mb-6">
              Join the Journey
            </h2>
            <p className="text-lg text-foreground/80 mb-8 leading-relaxed">
              Connect with our growing community of seekers, dreamers, and believers. 
              Follow @DevoteYourSoul on Instagram for daily inspiration, mindfulness tips, 
              and spiritual wisdom.
            </p>
            <a
              href="https://instagram.com/devoteyoursoul"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button size="lg" variant="outline" className="font-medium">
                Follow on Instagram
              </Button>
            </a>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Index;
