'use client';

import { useEffect, ReactNode } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {
  cardStylish,
  likeCodeTimeline
} from "@/lib/animation/animation";

interface Props {
  children: ReactNode;
}

const Animate = ({ children }: Props) => {

  // This useEffect is for blog card.
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    const articleCount = document.getElementById('blog')!.childElementCount;
    const articles: HTMLElement[] = [];
    for (let i = 0; i < articleCount; i++) {
      articles.push(document.getElementById(`blog-card-${i}`)!);
    }
    const blogCardAnimation = cardStylish(articles, document.getElementById('blog')!);

    return () => {
      blogCardAnimation.kill();
    }
  }, []);

  // This useEffect is for product card.
  useEffect(() => {
    const productCount = document.getElementById('product')!.childElementCount;
    const products: HTMLElement[] = [];
    for (let i = 0; i < productCount; i++) {
      products.push(document.getElementById(`prod-card-${i}`)!);
    }
    const prodCardAnimation = cardStylish(products, document.getElementById('product')!);
    // console.log(products)

    return () => {
      prodCardAnimation.kill();
    }
  }, []);

  // This useEffect is for CuriousWhatNext.tsx.
  useEffect(() => {
    const likeCodes: HTMLElement[] = gsap.utils.toArray('.like_code');

    const FIRST_ELEMENT_INDEX = 0;
    const CURIOUS_ELEMENT_INDEX = 0;
    const NEXT_ELEMENT_INDEX = 1;

    const handleClickCurious = (e: MouseEvent) => {
      const tl = gsap.timeline({duration: .5, ease: 'power3'});
      likeCodeTimeline(tl, e.target as HTMLElement, (e.target as HTMLElement).children[FIRST_ELEMENT_INDEX] as HTMLElement, () => {
        tl.kill();
        likeCodes[CURIOUS_ELEMENT_INDEX].removeEventListener('click', handleClickCurious);
      })
    }

    const handleClickNext = (e: MouseEvent) => {
      const tl = gsap.timeline({duration: .5, ease: 'power3'});
      likeCodeTimeline(tl, e.target as HTMLElement, (e.target as HTMLElement).children[FIRST_ELEMENT_INDEX] as HTMLElement, () => {
        tl.kill();
        likeCodes[NEXT_ELEMENT_INDEX].removeEventListener('click', handleClickNext);
      })
    }

    likeCodes[CURIOUS_ELEMENT_INDEX].addEventListener('click', handleClickCurious);
    likeCodes[NEXT_ELEMENT_INDEX].addEventListener('click', handleClickNext);

    return () => {
      likeCodes[CURIOUS_ELEMENT_INDEX].removeEventListener('click', handleClickCurious);
      likeCodes[NEXT_ELEMENT_INDEX].removeEventListener('click', handleClickNext);
    }
  }, []);

  return (
    <>{children}</>
  )
}
export default Animate
