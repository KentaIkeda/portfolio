import gsap from "gsap";

/**
 * @date 2024/12/02
 * @param {object} elements 実際にアニメーションされるHTML要素の配列
 * @param {object} trigger ScrollTriggerのtriggerとなるHTML要素
 * @return {gsap.core.Tween} gsap.core.Tween
 * **/
export const cardStylish = (
  elements: HTMLElement[],
  trigger: HTMLElement
): gsap.core.Tween => {
  return gsap.fromTo(elements, {
    opacity: 0,
    scale: 1.15,
    y: -50
  }, {
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
  });
}

/**
 * @date 2024/12/03
 * @param {gsap.core.Timeline} timeline イニシャライズされたタイムライン
 * @param {object} eventElement クリックされる想定のHTML要素。このドキュメントの書き方は良くないと思う
 * @param {object} eventElementTextElement eventElementの子要素にあるHTML要素
 * @param {object} onComplete タイムラインが完了した時に処理されるコールバック関数
 * @return {gsap.core.Timeline} gsap.core.Timeline
 * **/
export const likeCodeTimeline = (
  timeline: gsap.core.Timeline,
  eventElement: HTMLElement,
  eventElementTextElement: HTMLElement,
  onComplete: () => void
  ): gsap.core.Timeline => {
  return timeline.to(eventElement, {
    scale: 1.5,
    backgroundColor: 'transparent',
    filter: 'blur(10px)',
    cursor: 'default',
  }).to(eventElementTextElement, {
    visibility: 'visible',
  }).to(eventElementTextElement, {
    opacity: 1,
    ease: 'bounce',
  }, '<').to(eventElement, {
    scale: 1,
    filter: 'blur(0px)',
    duration: 0.25,
    ease: 'power3',
    onComplete: onComplete
  }, '<');
}
