'use client';

import gsap from 'gsap';
import { useEffect } from 'react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { cardStylish, likeCodeTimeline } from '@/lib/animation/animation';

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

  // This useEffect is for CuriousWhatNext.tsx.
  useEffect(() => {
    const likeCodes: HTMLElement[] = gsap.utils.toArray('.like_code');

    const FIRST_ELEMENT_INDEX = 0;
    const CURIOUS_ELEMENT_INDEX = 0;
    const NEXT_ELEMENT_INDEX = 1;

    const handleClickCurious = (e: MouseEvent) => {
      const tl = gsap.timeline({ duration: 0.5, ease: 'power3' });
      likeCodeTimeline(
        tl,
        e.target as HTMLElement,
        (e.target as HTMLElement).children[FIRST_ELEMENT_INDEX] as HTMLElement,
        () => {
          tl.kill();
          likeCodes[CURIOUS_ELEMENT_INDEX].removeEventListener('click', handleClickCurious);
        }
      );
    };

    const handleClickNext = (e: MouseEvent) => {
      const tl = gsap.timeline({ duration: 0.5, ease: 'power3' });
      likeCodeTimeline(
        tl,
        e.target as HTMLElement,
        (e.target as HTMLElement).children[FIRST_ELEMENT_INDEX] as HTMLElement,
        () => {
          tl.kill();
          likeCodes[NEXT_ELEMENT_INDEX].removeEventListener('click', handleClickNext);
        }
      );
    };

    likeCodes[CURIOUS_ELEMENT_INDEX].addEventListener('click', handleClickCurious);
    likeCodes[NEXT_ELEMENT_INDEX].addEventListener('click', handleClickNext);

    return () => {
      likeCodes[CURIOUS_ELEMENT_INDEX].removeEventListener('click', handleClickCurious);
      likeCodes[NEXT_ELEMENT_INDEX].removeEventListener('click', handleClickNext);
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

  // This useEffect is for information text.
  useEffect(() => {
    const informationText = document.getElementById('information-text');
    const informationAnimation = gsap.fromTo(
      informationText,
      {
        opacity: 0,
        y: 25,
      },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: 'power2',
        paused: true,
      }
    );
    informationAnimation.play();
    return () => {
      informationAnimation.kill();
    };
  }, []);

  // This useEffect is for curious text.
  useEffect(() => {
    const curiousText = document.getElementById('curious-text');
    const curiousAnimation = gsap.fromTo(
      curiousText,
      {
        opacity: 0,
      },
      {
        opacity: 1,
        duration: 1.5,
        ease: 'power2',
        paused: true,
      }
    );
    curiousAnimation.play();
    return () => {
      curiousAnimation.kill();
    };
  }, []);

  return <>{children}</>;
};
export default Animate;
