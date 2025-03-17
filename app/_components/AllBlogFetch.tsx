import { fetchAllBlog } from "@/lib/microcms/getMicroCMS";
import SearchBlog from "./SearchBlog";

const AllBlogFetch = async () => {
  const { contents } = await fetchAllBlog();
  return <SearchBlog allBlog={contents} />;
};

export default AllBlogFetch;
