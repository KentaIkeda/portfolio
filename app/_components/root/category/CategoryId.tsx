import Breadcrumb from "../../Breadcrumb";
import CategoryList from "../../CategoryList";
import BlogList from "../../BlogList";

import type { BlogContent, BreadcrumbItem, CategoryContent } from "@/app/types/types";

interface Props {
  allBlogByCategory: BlogContent[];
  allCategory: CategoryContent[];
  currentCategory: CategoryContent;
}

const CategoryId = ({ allBlogByCategory, allCategory, currentCategory }: Props) => {
  const breadcrumbs: BreadcrumbItem[] = [
    { id: 0, isLink: true, text: "Top", href: "/" },
    { id: 1, isLink: true, text: "Category", href: "/category" },
    { id: 2, isLink: false, text: "Category ID" },
  ];

  return (
    <div className="space-y-4">
      <Breadcrumb itemList={breadcrumbs} />
      <CategoryList allCategory={allCategory} />
      <div>
        <p>
          The current category is: <span className="badge badge-dash badge-secondary">{currentCategory.name}</span>
        </p>
      </div>
      <BlogList allBlog={allBlogByCategory} />
    </div>
  );
};

export default CategoryId;
