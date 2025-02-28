import { client } from '@/lib/microcms/microcms';
import type {
  BlogType,
  BlogContent,
  ProductType,
  CategoryType,
  CategoryContent,
} from '@/lib/microcms/microcms';

/**
 * @param {string} id ブログに紐づくID
 * @returns {Promise<BlogContent>} ブログの個別データ
 * **/
export const getIndivisualBlog = (id: string): Promise<BlogContent> => {
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

/**
 * @returns {Promise<BlogType>} 全てのブログデータ
 * **/
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

/**
 * 任意の数分ブログデータを取得する関数
 * @param {number} n - 取得する数
 */
export const getBlogsOnlyN = (n: number): Promise<BlogType> => {
  const blogData = client.get({
    endpoint: 'blogs',
    queries: {
      limit: n,
    },
  });
  return blogData;
};

/**
 * @param {string} categoryId カテゴリーに紐づくID
 * @returns {Promise<BlogType>} カテゴリーに紐づく全てのブログデータ
 * **/
export const getAllBlogsByCategory = (categoryId: string): Promise<BlogType> => {
  const allBlogsByCategoryData = client.get({
    endpoint: 'blogs',
    customRequestInit: {
      next: {
        revalidate: 60,
      },
    },
    queries: { filters: `category[equals]${categoryId}` },
  });
  return allBlogsByCategoryData;
};

/**
 * @returns {Promise<ProductType>} 全ての開発したアプリケーションのデータ
 * **/
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

/**
 * @returns {Promise<CategoryType>} 全てのカテゴリーのデータ
 * **/
export const getAllCategories = (): Promise<CategoryType> => {
  const allCategoriesData = client.get({
    endpoint: 'categories',
    customRequestInit: {
      next: {
        revalidate: 60,
      },
    },
  });
  return allCategoriesData;
};

/**
 * @param {string} id カテゴリーに紐づくID
 * @returns {Promise<CategoryContent>} カテゴリーの個別データ
 * **/
export const getIndivisualCategory = (id: string): Promise<CategoryContent> => {
  const indivisualCategoryData = client.get({
    endpoint: 'categories',
    contentId: id,
    customRequestInit: {
      next: {
        revalidate: 60,
      },
    },
  });
  return indivisualCategoryData;
};
