import BlogFetch from "@/app/_components/root/blog/BlogFetch";
import { Suspense } from "react";

const BlogPage = () => {
  return (
    <Suspense fallback={<p>Now Loading...</p>}>
      <BlogFetch />
    </Suspense>
  );
};

export default BlogPage;
