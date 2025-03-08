import { fetchAllBlog, fetchAllCategories } from "@/lib/microcms/getMicroCMS";
import Blog from "./Blog";

const BlogFetch = async () => {
  const { contents: allBlog } = await fetchAllBlog();
  const { contents: allCategory } = await fetchAllCategories();
  return <Blog allBlog={allBlog} allCategory={allCategory} />;
};

export default BlogFetch;
