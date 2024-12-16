import { client } from '@/lib/microcms/microcms';
import type { BlogType, BlogContents, ProductType } from '@/lib/microcms/microcms';

export const getIndivisualBlog = (id: string): Promise<BlogContents> => {
  const indivisualBlogData = client.get({
    endpoint: 'blogs',
    contentId: id,
    customRequestInit: {
      next: {
        revalidate: 60,
      },
    },
  });
  return indivisualBlogData;
};

export const getAllBlogs = (): Promise<BlogType> => {
  const allBlogsData = client.get({
    endpoint: 'blogs',
    customRequestInit: {
      next: {
        revalidate: 60,
      },
    },
  });
  return allBlogsData;
};

export const getAllProducts = (): Promise<ProductType> => {
  const allProductsData = client.get({
    endpoint: 'products',
    customRequestInit: {
      next: {
        revalidate: 60,
      },
    },
  });
  return allProductsData;
};
