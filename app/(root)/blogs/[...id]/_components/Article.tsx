'use client';

import style from './_cssModule/article.module.css';

import * as cheerio from 'cheerio';
import hljs from 'highlight.js';
import 'highlight.js/styles/github-dark-dimmed.css';

import { formatDate } from '@/lib/formatDate';

interface ArticleProps {
  title: string;
  content: string;
  updatedAt: Date;
}

const Article = ({ content, title, updatedAt }: ArticleProps) => {
  const beforeParseBody = cheerio.load(content);

  beforeParseBody('pre code').each((_, elm) => {
    const result = hljs.highlightAuto(beforeParseBody(elm).text());
    beforeParseBody(elm).html(result.value);
    beforeParseBody(elm).addClass('hljs');
  });

  const { date, dateTime } = formatDate(updatedAt);

  return (
    <>
      <hgroup className='my-8'>
        <h1 className={'text-2xl text-center font-black line-clamp-1'}>{title}</h1>
        <time
          dateTime={dateTime}
          className='text-right text-sub text-xs mt-2 block'
        >
          {date}
        </time>
      </hgroup>
      <div
        id={'article'}
        dangerouslySetInnerHTML={{ __html: beforeParseBody.html() }}
        className={style.article}
      />
    </>
  );
};
export default Article;
