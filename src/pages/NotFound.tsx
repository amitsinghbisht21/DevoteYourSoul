import { useLocation } from "react-router-dom";
import { useEffect } from "react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  return (
    <div className="flex min-h-screen items-center justify-center bg-muted">
      <div className="text-center">
        <h1 className="mb-4 text-4xl font-bold">Coming Soon</h1>
        <p className="mb-4 text-lg text-muted-foreground max-w-md mx-auto">
          We're preparing something special for this section. Check back soon —
          in the meantime, feel free to explore the blog and other pages.
        </p>
        <div className="flex items-center justify-center gap-4 mt-4">
          <a href="/" className="text-primary underline hover:text-primary/90">
            Return to Home
          </a>
          <a href="/blog" className="text-muted-foreground underline hover:text-foreground">
            Browse Blog
          </a>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
