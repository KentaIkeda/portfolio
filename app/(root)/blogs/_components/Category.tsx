import CategoryItem from '@/app/_components/CategoryItem';

import { getAllCategories } from '@/lib/microcms/getMicroCMS';

const Category = async () => {
  const categories = await getAllCategories();
  return (
    <ul className='flex items-center space-x-1.5'>
      {categories.contents.map(category => {
        return (
          <li key={category.id}>
            <CategoryItem
              href={`/category/${category.id}`}
              tagName={category.name}
            />
          </li>
        );
      })}
    </ul>
  );
};

export default Category;
