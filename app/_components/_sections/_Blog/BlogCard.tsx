import React from 'react';
import Link from 'next/link';

interface Props {
  i: number;
  id: string;
  title: string;
  description: string;
}

const BlogCard = ({ id, title, description, i }: Props) => {
  return (
    <article
      className={'group grid space-y-3'}
      id={`blog-card-${i}`}
    >
      <Link href={`/blogs/${id}`}>
        <h2 className={'group-hover:text-acc transition-all duration-200'}>{title}</h2>
        <p className={'text-justify text-sub group-hover:text-teal-50 transition-all duration-200'}>
          {description}
        </p>
      </Link>
    </article>
  );
};
export default BlogCard;
