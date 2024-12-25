import React from 'react';
import { SNSInfo } from '@/lib/SNSInfo';

const Information = () => {
  const name =
    process.env.NODE_ENV === 'development'
      ? process.env.NEXT_PUBLIC_MY_NAME
      : process.env.NODE_ENV === 'production'
      ? process.env.MY_NAME
      : null;
  return (
    <section
      id={'information'}
      className={'space-y-8'}
    >
      <article
        id='information-text'
        className={'text-justify text-sm rounded-[5px] p-4 space-y-2.5'}
      >
        <p className='text-center text-lg'>ようこそ！</p>
        <p>
          <span className='text-lg tracking-wide'>{name}</span>
          と申します。1996年2月5日
          <wbr />
          に生まれ、現在はフロントエンドエンジニアとして活動をしています。
        </p>
      </article>
      <article id={'SNS'}>
        <ul className={'flex justify-center gap-x-4'}>
          {SNSInfo.map(info => {
            return (
              <li
                className='sns_icon'
                key={info.title}
              >
                <a href={info.href}>{info.icon}</a>
              </li>
            );
          })}
        </ul>
      </article>
    </section>
  );
};
export default Information;
