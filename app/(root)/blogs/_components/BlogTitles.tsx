import { getAllBlogs } from '@/lib/microcms/getMicroCMS';

import Link from 'next/link';

const BlogTitles = async () => {
  const blogs = await getAllBlogs();
  return (
    <ul>
      {blogs.contents.map(content => {
        return (
          <li key={content.id}>
            <Link href={`/blogs/${content.id}`}>{content.title}</Link>
          </li>
        );
      })}
    </ul>
  );
};

export default BlogTitles;
