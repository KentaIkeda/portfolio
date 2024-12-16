import { getAllBlogs } from '@/lib/microcms/getMicroCMS';

import Link from 'next/link';

const Page = async () => {
  const blogs = await getAllBlogs();

  return (
    <div>
      <ul>
        {blogs.contents.map(content => {
          return (
            <li key={content.id}>
              <Link href={`/blogs/${content.id}`}>{content.title}</Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
};
export default Page;
