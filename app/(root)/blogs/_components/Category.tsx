import { Tag } from '@/app/_components/Icon/icons';
import { getAllCategories } from '@/lib/microcms/getMicroCMS';

import Link from 'next/link';

import { cp } from '@/app/fonts/fonts';

const Category = async () => {
  const categories = await getAllCategories();
  return (
    <ul className='flex items-center space-x-1.5'>
      {categories.contents.map(category => {
        return (
          <li
            key={category.id}
            className='inline-block bg-accent1 text-main text-xs rounded-sm'
          >
            <Link
              href={`/category/${category.id}`}
              className='w-full h-full px-3 py-1.5 flex items-center justify-center space-x-1.5 translate-y-px'
            >
              <Tag
                strokeWidth={2}
                className='size-4'
              />
              <span className={`${cp.className}`}>{category.name}</span>
            </Link>
          </li>
        );
      })}
    </ul>
  );
};

export default Category;
