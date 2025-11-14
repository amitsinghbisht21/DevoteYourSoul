import { Link } from "react-router-dom";
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Calendar, ArrowRight } from "lucide-react";

interface BlogCardProps {
  title: string;
  excerpt: string;
  category: string;
  date: string;
  slug: string;
  image?: string;
}

const BlogCard = ({ title, excerpt, category, date, slug, image }: BlogCardProps) => {
  return (
    <Card className="group overflow-hidden border-border/50 hover:shadow-card transition-all duration-300 hover:-translate-y-1">
      {image && (
        <div className="overflow-hidden aspect-video">
          <img
            src={image}
            alt={title}
            className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
          />
        </div>
      )}
      <CardHeader>
        <div className="flex items-center justify-between mb-2">
          <Badge variant="secondary" className="bg-secondary/50">
            {category}
          </Badge>
          <div className="flex items-center text-xs text-muted-foreground">
            <Calendar className="h-3 w-3 mr-1" />
            {date}
          </div>
        </div>
        <h3 className="font-poppins text-xl font-semibold leading-tight group-hover:text-primary transition-colors">
          {title}
        </h3>
      </CardHeader>
      <CardContent>
        <p className="text-muted-foreground text-sm leading-relaxed line-clamp-3">
          {excerpt}
        </p>
      </CardContent>
      <CardFooter>
        <Link to={`/blog/${slug}`} className="w-full">
          <Button
            variant="ghost"
            className="w-full group/btn justify-between text-primary hover:text-primary hover:bg-primary/10"
          >
            Read More
            <ArrowRight className="h-4 w-4 transition-transform group-hover/btn:translate-x-1" />
          </Button>
        </Link>
      </CardFooter>
    </Card>
  );
};

export default BlogCard;
