import Category from "./Category";

import { fetchAllCategories } from "@/lib/microcms/getMicroCMS";

export const dynamic = "force-dynamic";

const CategoryFetch = async () => {
  const { contents: allCategory } = await fetchAllCategories();

  return <Category allCategory={allCategory} />;
};

export default CategoryFetch;
