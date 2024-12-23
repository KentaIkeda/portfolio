'use client';

import { Tag } from 'lucide-react';

import Link from 'next/link';

import { cp } from '../fonts/fonts';

interface Props {
  href: string;
  tagName: string;
}

const CategoryItem = ({ href, tagName }: Props) => {
  return (
    <Link
      href={href}
      className='px-3 py-1.5 inline-flex items-center justify-center space-x-1.5 translate-y-px bg-accent1 text-main text-xs rounded-sm'
    >
      <Tag
        strokeWidth={2}
        className='size-4'
      />
      <span className={`${cp.className}`}>{tagName}</span>
    </Link>
  );
};

export default CategoryItem;
