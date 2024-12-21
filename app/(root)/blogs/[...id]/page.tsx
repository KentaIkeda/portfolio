import { getIndivisualBlog } from '@/lib/microcms/getMicroCMS';

import Article from './_components/Article';

import { Params } from '@/app/types/types';

const BlogPage = async ({ params }: Params) => {
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
