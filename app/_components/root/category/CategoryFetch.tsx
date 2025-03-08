import Category from "./Category";

import { fetchAllCategories } from "@/lib/microcms/getMicroCMS";

const CategoryFetch = async () => {
  const { contents: allCategory } = await fetchAllCategories();

  return <Category allCategory={allCategory} />;
};

export default CategoryFetch;
