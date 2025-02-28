import gsap from 'gsap';

/**
 * @date 2024/12/02
 * @param {object} elements 実際にアニメーションされるHTML要素の配列
 * @param {object} trigger ScrollTriggerのtriggerとなるHTML要素
 * @return {gsap.core.Tween} gsap.core.Tween
 * **/
export const cardStylish = (elements: HTMLElement[], trigger: HTMLElement): gsap.core.Tween => {
  return gsap.fromTo(
    elements,
    {
      opacity: 0,
      scale: 1.15,
      y: -50,
    },
    {
      scrollTrigger: {
        trigger,
      },
      y: 0,
      opacity: 1,
      scale: 1,
      stagger: 0.15,
      duration: 0.5,
      ease: 'back.out',
      paused: true,
    }
  );
};

export const blurUpFromNToInitPosition = (target: HTMLElement[], fromY: number) => {
  return gsap.fromTo(
    target,
    {
      opacity: 0,
      y: fromY,
    },
    {
      opacity: 1,
      y: 0,
      duration: 1,
      ease: 'circ.inOut',
      paused: true,
      stagger: {
        each: 0.025,
        from: 'random',
      },
    }
  );
};
