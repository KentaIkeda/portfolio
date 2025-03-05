import { fetchIndivisualBlog } from "@/lib/microcms/getMicroCMS";

interface Props {
  id: string;
}

const BlogContentFetch = async ({ id }: Props) => {
  const { title } = await fetchIndivisualBlog(id);
  return <div>{title}</div>;
};

export default BlogContentFetch;
