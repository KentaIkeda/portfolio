'use client';

import style from './_cssModule/article.module.css';

import * as cheerio from 'cheerio';
import hljs from 'highlight.js';
import 'highlight.js/styles/github-dark-dimmed.css';

import { formatDate } from '@/lib/formatDate';
import { cp } from '@/app/fonts/fonts';
import CategoryItem from '@/app/_components/CategoryItem';
import { CategoryContent } from '@/lib/microcms/microcms';

interface ArticleProps {
  title: string;
  content: string;
  updatedAt: Date;
  category: CategoryContent;
}

const Article = ({ content, title, updatedAt, category }: ArticleProps) => {
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
        <h1 className={`${cp.className} text-2xl text-center font-black line-clamp-1`}>{title}</h1>
        <div className='flex justify-end space-x-1.5 my-8'>
          <CategoryItem
            href={category.id}
            tagName={category.name}
          />
          <time
            dateTime={dateTime}
            className='text-sub text-xs mt-2 block'
          >
            {date}
          </time>
        </div>
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
