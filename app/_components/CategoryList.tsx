import Link from "next/link";

import type { CategoryContent } from "../types/types";

interface Props {
  allCategory: CategoryContent[];
}

const CategoryList = ({ allCategory }: Props) => {
  return (
    <ul className="flex flex-wrap items-center gap-1.5">
      {allCategory.map(category => {
        return (
          <li key={category.id} className="badge badge-warning">
            <Link href={`/category/${category.id}`}>{category.name}</Link>
          </li>
        );
      })}
    </ul>
  );
};

export default CategoryList;
