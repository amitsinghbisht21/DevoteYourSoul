import { useParams, Link } from "react-router-dom";
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
              <div className="whitespace-pre-line text-foreground/90 leading-relaxed">
                {post.content}
              </div>
            </div>

            {/* 📰 In-article ad */}
            <div className="my-12">
              <AdComponent
                data-ad-client="ca-pub-1682168765289599"
                data-ad-slot="5802456201"
                data-ad-format="auto"
                data-full-width-responsive="true"
              />
            </div>

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
