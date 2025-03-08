import Link from "next/link";
import { Fragment } from "react";
import Breadcrumb from "../../Breadcrumb";

import type { BlogContent, BreadcrumbItem, CategoryContent } from "@/app/types/types";
import CategoryList from "../../CategoryList";

interface Props {
  allBlogByCategory: BlogContent[];
  allCategory: CategoryContent[];
}

const CategoryId = ({ allBlogByCategory, allCategory }: Props) => {
  const breadcrumbs: BreadcrumbItem[] = [
    { id: 0, isLink: true, text: "Top", href: "/" },
    { id: 1, isLink: true, text: "Category", href: "/category" },
    { id: 2, isLink: false, text: "Category ID" },
  ];

  return (
    <div className="p-10 space-y-4">
      <Breadcrumb itemList={breadcrumbs} />
      <CategoryList allCategory={allCategory} />
      <ul className="list">
        {allBlogByCategory.map((blog, i) => {
          return (
            <Fragment key={blog.id}>
              <li>
                <Link prefetch href={`/blog/${blog.id}`}>
                  <div className="card bg-base-200 drop-shadow-md">
                    <div className="card-body text-base-content">
                      <h1 className="card-title">{blog.title}</h1>
                      <p className="opacity-65">{blog.description}</p>
                    </div>
                  </div>
                </Link>
              </li>
              {i < allBlogByCategory.length - 1 && <div className="divider" />}
            </Fragment>
          );
        })}
      </ul>
    </div>
  );
};

export default CategoryId;
