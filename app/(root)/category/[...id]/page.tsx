import { Params } from '@/app/types/types';

import { getAllBlogsByCategory, getIndivisualCategory } from '@/lib/microcms/getMicroCMS';

import BlogCard from '@/app/_components/_sections/_Blog/BlogCard';
import Category from '../../blogs/_components/Category';
import BlogCardSpacer from '@/app/_components/BlogCardSpacer';
import MaxWidth from '@/app/_components/MaxWidth';
import { Tag } from '@/app/_components/Icon/icons';
import { cp } from '@/app/fonts/fonts';

const page = async ({ params }: Params) => {
  const { id } = await params;
  const blogData = await getAllBlogsByCategory(id);
  const indivisualCategory = await getIndivisualCategory(id);

  return (
    <MaxWidth>
      <Category />
      <p className='my-8'>
        現在は
        <span className='inline-flex items-center justify-center space-x-1.5 bg-accent1 text-main text-xs rounded-sm px-3 py-1.5 mx-1 translate-y-px'>
          <Tag
            strokeWidth={2}
            className='size-4'
          />
          <span className={`${cp.className}`}>{indivisualCategory.name}</span>
        </span>
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
    </MaxWidth>
  );
};

export default page;
