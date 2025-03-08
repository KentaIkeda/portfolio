export interface Params {
  params: Promise<{
    id: string;
  }>;
}

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
 * Eyecatchの型定義
 * **/
export type Eyecatch = {
  url: string;
  height: number;
  width: number;
};

/**
 * 最終的に返す型定義
 * **/
export type ProductType = InclutdeContents<ProductContent>;
export type BlogType = InclutdeContents<BlogContent>;
export type CategoryType = InclutdeContents<CategoryContent>;

export interface BreadcrumbItem {
  id: number;
  text: string;
  isLink: boolean;
  href?: string;
}
