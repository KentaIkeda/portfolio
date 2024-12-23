import { getIndivisualBlog } from '@/lib/microcms/getMicroCMS';

import Article from './_components/Article';

import { Params } from '@/app/types/types';
import MaxWidth from '@/app/_components/MaxWidth';

const BlogPage = async ({ params }: Params) => {
  const { id } = await params;
  const blogData = await getIndivisualBlog(id);
  console.log(blogData);

  return (
    <MaxWidth>
      <article>
        {/*start main content*/}
        <Article
          updatedAt={blogData.updatedAt}
          content={blogData.content}
          title={blogData.title}
          category={blogData.category}
        />
        {/*end main content*/}
      </article>
    </MaxWidth>
  );
};
export default BlogPage;
