import { createClient } from 'microcms-js-sdk';

const getEnvViriable = () => {
  const ENV_VARIABLE_API_KEY =
    process.env.NODE_ENV === 'development'
      ? process.env.NEXT_PUBLIC_MICROCMS_API_KEY
      : process.env.NODE_ENV === 'production'
      ? process.env.MICROCMS_API_KEY
      : null;
  const ENV_VARIABLE_SERVICE_DOMAIN =
    process.env.NODE_ENV === 'development'
      ? process.env.NEXT_PUBLIC_MICROCMS_SERVICE_DOMAIN
      : process.env.NODE_ENV === 'production'
      ? process.env.MICROCMS_SERVICE_DOMAIN
      : null;

  return {
    api: ENV_VARIABLE_API_KEY,
    domain: ENV_VARIABLE_SERVICE_DOMAIN,
  };
};

const client = createClient({
  serviceDomain: getEnvViriable().domain || '',
  apiKey: getEnvViriable().api || '',
});

/**
 * コンテンツを含む全ての型定義
 * **/
export type InclutdeContents<T> = {
  contents: T[];
  totalCount: number;
  offset: number;
  limit: number;
};

/**
 * MicroCMSで用意しているデフォルトでついているフィールド
 * **/
export type ContentDefault = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  publishedAt: Date;
  revisedAt: Date;
};

/**
 * Categoryフィールドの型定義
 * **/
export type CategoryContent = {
  name: string;
} & ContentDefault;

/**
 * Productフィールドの型定義
 * **/
export type ProductContent = {
  title: string;
  description: string;
  url: string;
  publishedDate: Date;
} & ContentDefault;

/**
 * Eyecatchの型定義
 * **/
export type Eyecatch = {
  url: string;
  height: number;
  width: number;
};

/**
 * Blogフィールドの型定義
 * **/
export type BlogContent = {
  title: string;
  content: string;
  eyecatch?: Eyecatch;
  category: CategoryContent;
  description: string;
} & ContentDefault;

/**
 * 最終的に返す型定義
 * **/
export type ProductType = InclutdeContents<ProductContent>;
export type BlogType = InclutdeContents<BlogContent>;
export type CategoryType = InclutdeContents<CategoryContent>;

export { client };
