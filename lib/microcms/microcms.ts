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

export type ProductType = {
  contents: ProductContent[];
  totalCount: 1;
  offset: 0;
  limit: 10;
};

export type ProductContent = {
  title: string;
  description: string;
  url: string;
  publishedDate: Date;
} & ContentDefault;

export type BlogType = {
  contents: BlogContents[];
  totalCount: number;
  offset: number;
  limit: number;
};

export type BlogContents = {
  title: string;
  content: string;
  eyecatch: Eyecatch | undefined;
  category: Category;
  description: string;
} & ContentDefault;
export type ContentDefault = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  publishedAt: Date;
  revisedAt: Date;
};
export type Eyecatch = {
  url: string;
  height: number;
  width: number;
};
export type Category = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  publishedAt: Date;
  revisedAt: Date;
  name: string;
};

export { client };
