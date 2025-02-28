'use client';

import gsap from 'gsap';
import { useEffect } from 'react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { cardStylish } from '@/lib/animation/animation';

import type { ReactNode } from 'react';

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
    };
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
    };
  }, []);

  // This useEffect is for SNS icons.
  useEffect(() => {
    const snsIcons: HTMLElement[] = gsap.utils.toArray('.sns_icon');
    const snsAnimation = gsap.fromTo(
      snsIcons,
      {
        opacity: 0,
        y: 25,
      },
      {
        opacity: 1,
        y: 0,
        stagger: 0.1,
        duration: 0.7,
        ease: 'power2',
        paused: true,
      }
    );
    snsAnimation.play();
    return () => {
      snsAnimation.kill();
    };
  }, []);

  return <>{children}</>;
};
export default Animate;
