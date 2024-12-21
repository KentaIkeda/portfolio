import { getAllBlogs } from '@/lib/microcms/getMicroCMS';

import BlogCard from '@/app/_components/_sections/_Blog/BlogCard';
import BlogCardSpacer from '@/app/_components/BlogCardSpacer';

const BlogTitles = async () => {
  const blogs = await getAllBlogs();
  return (
    <BlogCardSpacer>
      {blogs.contents.map((content, i) => {
        return (
          <BlogCard
            description={content.description}
            title={content.title}
            key={content.id}
            i={i}
            id={content.id}
          />
        );
      })}
    </BlogCardSpacer>
  );
};

export default BlogTitles;
