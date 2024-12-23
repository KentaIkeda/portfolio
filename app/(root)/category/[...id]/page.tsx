import { Params } from '@/app/types/types';

import { getAllBlogsByCategory, getIndivisualCategory } from '@/lib/microcms/getMicroCMS';

import BlogCard from '@/app/_components/_sections/_Blog/BlogCard';
import Category from '../../blogs/_components/Category';
import BlogCardSpacer from '@/app/_components/BlogCardSpacer';
import MaxWidth from '@/app/_components/MaxWidth';

import CategoryItem from '@/app/_components/CategoryItem';

const page = async ({ params }: Params) => {
  const { id } = await params;
  const blogData = await getAllBlogsByCategory(id);
  const indivisualCategory = await getIndivisualCategory(id);

  return (
    <MaxWidth>
      <Category />
      <p className='my-8'>
        現在は
        <CategoryItem
          href={`/category/${indivisualCategory.id}`}
          tagName={indivisualCategory.name}
        />
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
