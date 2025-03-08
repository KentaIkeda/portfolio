import Breadcrumb from "../../Breadcrumb";
import CategoryList from "../../CategoryList";
import BlogList from "../../BlogList";

import type { BlogContent, BreadcrumbItem, CategoryContent } from "@/app/types/types";

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
    <div className="space-y-4">
      <Breadcrumb itemList={breadcrumbs} />
      <CategoryList allCategory={allCategory} />
      <BlogList allBlog={allBlogByCategory} />
    </div>
  );
};

export default CategoryId;
