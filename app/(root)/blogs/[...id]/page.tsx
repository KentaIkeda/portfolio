import { getIndivisualBlog } from '@/lib/microcms/getMicroCMS';
import Article from './_components/Article';

interface Props {
  params: Promise<{
    id: string;
  }>;
}

const BlogPage = async ({ params }: Props) => {
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
