'use client';

import React, { useEffect } from 'react'
import gsap from 'gsap';

interface Props {
  children: React.ReactNode
}

const Spotlight = ({ children }: Props) => {

  useEffect(() => {
    const spotlight = document.getElementById('spotlight');

    const toX = gsap.quickTo(spotlight, 'x', { duration: 0.8, ease: 'power3' });
    const toY = gsap.quickTo(spotlight, 'y', { duration: 0.8, ease: 'power3' });
    const toHalfX = gsap.quickTo(spotlight, 'xPercent', { duration: 0.8, ease: 'power3' });
    const toHalfY = gsap.quickTo(spotlight, 'yPercent', { duration: 0.8, ease: 'power3' });

    const handleMouseMove = (e: MouseEvent) => {
      e.preventDefault();
      toX(e.clientX);
      toY(e.clientY);
      toHalfX(-50);
      toHalfY(-50);
    }

    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    }
  }, []);

  return (
    <>
      <div id={'spotlight'} className={'fixed top-0 left-0 -z-10 size-20 bg-white rounded-full blur-3xl'}></div>
      {children}
    </>
  )
}
export default Spotlight
