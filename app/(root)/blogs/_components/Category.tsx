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
              href={`/categories/${category.id}`}
              className='text-xs block w-full h-full px-3 py-1.5'
            >
              {category.name}
            </Link>
          </li>
        );
      })}
    </ul>
  );
};

export default Category;
