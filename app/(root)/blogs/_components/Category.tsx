import { Tag } from '@/app/_components/Icon/icons';
import { getAllCategories } from '@/lib/microcms/getMicroCMS';

import Link from 'next/link';

const Category = async () => {
  const categories = await getAllCategories();
  return (
    <ul className='flex items-center space-x-1.5'>
      {categories.contents.map(category => {
        return (
          <li
            key={category.id}
            className='inline-block bg-acc text-white rounded-sm hover:bg-acc-animated transition-normal'
          >
            <Link
              href={`/category/${category.id}`}
              className='text-xs w-full h-full px-3 py-1.5 flex items-center justify-center space-x-1.5'
            >
              <Tag
                strokeWidth={2}
                className='size-4'
              />
              <span>{category.name}</span>
            </Link>
          </li>
        );
      })}
    </ul>
  );
};

export default Category;
