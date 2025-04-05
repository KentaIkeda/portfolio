import { microcms } from "@/lib/microcms/microcms";
import type { BlogType, BlogContent, ProductType, CategoryType, CategoryContent } from "@/app/types/types";

/**
 * @param {string} id ブログに紐づくID
 * @returns {Promise<BlogContent>} ブログの個別データ
 * **/
export const fetchIndivisualBlog = (id: string): Promise<BlogContent> => {
  const indivisualBlogData = microcms.get({
    endpoint: "blogs",
    contentId: id,
  });
  return indivisualBlogData;
};

/**
 * @returns {Promise<BlogType>} 全てのブログデータ
 * **/
export const fetchAllBlog = (): Promise<BlogType> => {
  const allBlog = microcms.get({
    endpoint: "blogs",
  });
  return allBlog;
};

/**
 * 任意の数分ブログデータを取得する関数
 * @param {number} n - 取得する数
 * @returns {Promise<BlogType>}
 */
export const fetchBlogsOnlyN = (n: number): Promise<BlogType> => {
  const blogData = microcms.get({
    endpoint: "blogs",
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
export const fetchAllBlogByCategory = (categoryId: string): Promise<BlogType> => {
  const allBlogByCategory = microcms.get({
    endpoint: "blogs",
    queries: { filters: `category[equals]${categoryId}` },
  });
  return allBlogByCategory;
};

/**
 * @returns {Promise<ProductType>} 全ての開発したアプリケーションのデータ
 * **/
export const fetchAllProduct = (): Promise<ProductType> => {
  const allProduct = microcms.get({
    endpoint: "products",
  });
  return allProduct;
};

/**
 * @returns {Promise<CategoryType>} 全てのカテゴリーのデータ
 * **/
export const fetchAllCategories = (): Promise<CategoryType> => {
  const allCategoriesData = microcms.get({
    endpoint: "categories",
  });
  return allCategoriesData;
};

/**
 * @param {string} id カテゴリーに紐づくID
 * @returns {Promise<CategoryContent>} カテゴリーの個別データ
 * **/
export const fetchIndivisualCategory = (id: string): Promise<CategoryContent> => {
  const indivisualCategoryData = microcms.get({
    endpoint: "categories",
    contentId: id,
  });
  return indivisualCategoryData;
};
