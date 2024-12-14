import React from 'react'
import {getAllProducts} from "@/lib/microcms/getMicroCMS";
import ProductCard from "@/app/_components/_sections/_Product/ProductCard";

const Product = async () => {
  const productsData = await getAllProducts();
  return (
    <section id={'product'} className={'w-fit mx-auto space-y-16'}>
      {productsData.contents.map((productData, i) => {
        const {id, title, url, description} = productData;
        return <ProductCard key={id} id={i} title={title} url={url} description={description}/>
      })}
    </section>
  )
}
export default Product
