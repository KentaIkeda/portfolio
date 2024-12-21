import { Params } from '@/app/types/types';

import { getAllBlogs } from '@/lib/microcms/getMicroCMS';

const page = async ({ params }: Params) => {
  const { id } = await params;
  const blogData = await getAllBlogs(id);
  console.log(blogData);
  return (
    <div>
      {blogData.contents.map(blog => {
        return (
          <div key={blog.id}>
            <h2>{blog.title}</h2>
          </div>
        );
      })}
    </div>
  );
};

export default page;
