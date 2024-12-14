import React from 'react';
import { getIndivisualBlog } from '@/lib/microcms/getMicroCMS';
import Article from './_components/Article';

const BlogPage = async ({ params }: { params: { id: string } }) => {
  const { id } = await params;
  const blogData = await getIndivisualBlog(id);

  return (
    <article>
      {/*start main content*/}
      <Article
        content={blogData.content}
        title={blogData.title}
      />
      {/*end main content*/}
    </article>
  );
};
export default BlogPage;
