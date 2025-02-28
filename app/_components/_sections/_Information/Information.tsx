'use client';

import { useEffect, useRef, useState } from 'react';
import { SNSInfo } from '@/lib/SNSInfo';
import { blurUpFromNToInitPosition } from '@/lib/animation/animation';

const Information = () => {
  const [isDoneSplitText, setIsDoneSplitText] = useState(false);
  const ref = useRef<HTMLParagraphElement>(null);

  useEffect(() => {
    if (!ref.current) throw new Error('DID NOT FOUND INFORMATION TEXT');
    const splitText = ref.current.innerText.split('');
    let appendText = '';
    splitText.forEach(char => {
      if (!ref.current) throw new Error('DID NOT FOUND INFORMATION TEXT');
      appendText += `<span class="inline-block">${char}</span>`;
    });
    ref.current.innerHTML = appendText;

    setIsDoneSplitText(true);
  }, []);

  useEffect(() => {
    if (!isDoneSplitText) return () => {};
    if (!ref.current) throw new Error('DID NOT FOUND INFORMATION TEXT');
    const current = ref.current;
    const elementArray: HTMLElement[] = [];

    for (let i = 0; i < current.children.length; i++) {
      elementArray.push(current.children[i] as HTMLElement);
    }

    const animation = blurUpFromNToInitPosition(elementArray, 100);
    animation.play();

    return () => animation.kill();
  }, [isDoneSplitText]);

  return (
    <section
      id='information'
      className='space-y-8'
    >
      <article
        id='information-text'
        className='text-justify text-sm p-4'
      >
        <p ref={ref}>池田健太と申します。フロントエンドエンジニアとして活動をしています。</p>
      </article>
      <article id='SNS'>
        <ul className='flex justify-center gap-x-4'>
          {SNSInfo.map(info => {
            const { title, href, icon } = info;
            return (
              <li
                key={title}
                className='sns_icon'
              >
                <a href={href}>{icon}</a>
              </li>
            );
          })}
        </ul>
      </article>
    </section>
  );
};
export default Information;
