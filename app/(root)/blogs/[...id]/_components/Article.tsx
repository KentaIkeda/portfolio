'use client';

import React from "react";
import style from './_cssModule/article.module.css';
import * as cheerio from 'cheerio';
import hljs from 'highlight.js';
import 'highlight.js/styles/github-dark-dimmed.css'

interface ArticleProps {
  title: string;
  content: string;
}

const Article = ({ content, title }: ArticleProps) => {

  const beforeParseBody = cheerio.load(content);
  beforeParseBody('pre code').each((_, elm) => {
    const result = hljs.highlightAuto(beforeParseBody(elm).text());
    beforeParseBody(elm).html(result.value);
    beforeParseBody(elm).addClass('hljs');
  })

  return (
    <>
      <h1 className={'text-2xl text-justify font-black line-clamp-1 my-8'}>{title}</h1>
      <div id={'article'} dangerouslySetInnerHTML={{__html: beforeParseBody.html()}} className={style.article} />
    </>
  )
}
export default Article
