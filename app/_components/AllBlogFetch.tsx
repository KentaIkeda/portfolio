import { fetchAllBlog } from "@/lib/microcms/getMicroCMS";
import SearchBlog from "./SearchBlog";

export const dynamic = "force-dynamic";

const AllBlogFetch = async () => {
  const { contents } = await fetchAllBlog();
  return <SearchBlog allBlog={contents} />;
};

export default AllBlogFetch;
