import CategoryId from "./CategoryId";

import { fetchAllBlogByCategory, fetchAllCategories } from "@/lib/microcms/getMicroCMS";

interface Props {
  id: string;
}

const CategoryIdFetch = async ({ id }: Props) => {
  const { contents: allBlogByCategory } = await fetchAllBlogByCategory(id);
  const { contents: allCategory } = await fetchAllCategories();

  const filterOtherThanCurrentID = allCategory.filter(category => {
    return category.id !== id;
  });

  const currentCategory = allCategory.find(category => {
    return category.id === id;
  });

  if (!currentCategory) throw new Error(`選択したカテゴリーは、全てのカテゴリーから見つけることができませんでした。`);

  return (
    <CategoryId
      allBlogByCategory={allBlogByCategory}
      allCategory={filterOtherThanCurrentID}
      currentCategory={currentCategory}
    />
  );
};

export default CategoryIdFetch;
