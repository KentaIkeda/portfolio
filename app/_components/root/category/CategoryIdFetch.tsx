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

  return <CategoryId allBlogByCategory={allBlogByCategory} allCategory={filterOtherThanCurrentID} />;
};

export default CategoryIdFetch;
