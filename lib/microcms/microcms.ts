import { createClient } from "microcms-js-sdk";

const client = createClient({
  serviceDomain: process.env.NEXT_PUBLIC_MICROCMS_SERVICE_DOMAIN || '',
  apiKey: process.env.NEXT_PUBLIC_MICROCMS_API_KEY || '',
});

export type ProductType = {
  contents: ProductContent[],
  totalCount: 1,
  offset: 0,
  limit: 10
}

export type ProductContent = {
  title: string,
  description: string,
  url: string,
  publishedDate: Date
} & ContentDefault


export type BlogType = {
  contents: BlogContents[],
  totalCount: number,
  offset: number,
  limit: number
}

export type BlogContents = {
  title: string,
  content: string,
  eyecatch: Eyecatch | undefined,
  category: Category
  description: string,
} & ContentDefault
export type ContentDefault = {
  id: string,
  createdAt: Date,
  updatedAt: Date,
  publishedAt: Date,
  revisedAt: Date,
}
export type Eyecatch = {
  url: string,
  height: number,
  width: number
}
export type Category = {
  id: string,
  createdAt: Date,
  updatedAt: Date,
  publishedAt: Date,
  revisedAt: Date,
  name: string
}

export { client };
