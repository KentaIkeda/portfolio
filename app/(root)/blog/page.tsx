import BlogFetch from "@/app/_components/root/blog/BlogFetch";
import Loading from "@/app/_components/Skeleton/Loading";
import { Suspense } from "react";

const BlogPage = () => {
  return (
    <Suspense fallback={<Loading />}>
      <BlogFetch />
    </Suspense>
  );
};

export default BlogPage;
