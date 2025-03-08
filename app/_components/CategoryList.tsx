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
          <li key={category.id}>
            <Link
              prefetch
              href={`/category/${category.id}`}
              className="badge badge-dash badge-secondary cursor-pointer"
            >
              {category.name}
            </Link>
          </li>
        );
      })}
    </ul>
  );
};

export default CategoryList;
