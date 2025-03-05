import { fetchAllBlog } from "@/lib/microcms/getMicroCMS";

import Link from "next/link";

const BlogFetch = async () => {
  const { contents: blogList } = await fetchAllBlog();
  return (
    <ul>
      {blogList.map(blog => {
        return (
          <li key={blog.id}>
            <Link href={`/blog/${blog.id}`}>{blog.title}</Link>
          </li>
        );
      })}
    </ul>
  );
};

export default BlogFetch;
