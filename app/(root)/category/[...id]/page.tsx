import { Params } from '@/app/types/types';

import { getAllBlogsByCategory, getIndivisualCategory } from '@/lib/microcms/getMicroCMS';

import BlogCard from '@/app/_components/_sections/_Blog/BlogCard';
import Category from '../../blogs/_components/Category';
import BlogCardSpacer from '@/app/_components/BlogCardSpacer';

const page = async ({ params }: Params) => {
  const { id } = await params;
  const blogData = await getAllBlogsByCategory(id);
  const indivisualCategory = await getIndivisualCategory(id);

  return (
    <>
      <Category />
      <p className='mt-4'>
        現在は
        <em className='not-italic bg-acc px-3 py-1.5 text-xs mx-1 rounded-sm'>
          {indivisualCategory.name}
        </em>
        でカテゴライズされています
      </p>
      <BlogCardSpacer>
        {blogData.contents.map((blog, i) => {
          return (
            <BlogCard
              description={blog.description}
              title={blog.title}
              key={blog.id}
              i={i}
              id={blog.id}
            />
          );
        })}
      </BlogCardSpacer>
    </>
  );
};

export default page;
