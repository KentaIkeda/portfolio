import {client} from "@/lib/microcms/microcms";
import type { BlogType, BlogContents, ProductType } from "@/lib/microcms/microcms";

export const getIndivisualBlog = (id: string):Promise<BlogContents> => {
  return client.get({
    endpoint: 'blogs',
    contentId: id,
    customRequestInit: {
      cache: 'no-store'
    }
  })
}

export const getAllBlogs = (): Promise<BlogType> => {
  return client.get({
    endpoint: 'blogs',
    customRequestInit: {
      cache: 'no-store'
    }
  })
}

export const getAllProducts = (): Promise<ProductType> => {
  return client.get({
    endpoint: 'products',
    customRequestInit: {
      cache: 'no-store'
    }
  })
}
