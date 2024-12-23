import React from 'react';
import BlogCard from '@/app/_components/_sections/_Blog/BlogCard';
import { getAllBlogs } from '@/lib/microcms/getMicroCMS';
import BlogCardSpacer from '../../BlogCardSpacer';

const Blog = async () => {
  const blogsData = await getAllBlogs();
  return (
    <section
      id={'blog'}
      className={'w-fit mx-auto'}
    >
      <BlogCardSpacer>
        {blogsData.contents.map((blogData, i) => {
          const { id, title, description } = blogData;
          return (
            <BlogCard
              key={id}
              i={i}
              id={id}
              title={title}
              description={description}
            />
          );
        })}
      </BlogCardSpacer>
    </section>
  );
};
export default Blog;
