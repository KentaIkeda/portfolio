import type { BlogContent, BreadcrumbItem, CategoryContent } from "@/app/types/types";

import Breadcrumb from "../../Breadcrumb";
import CategoryList from "../../CategoryList";
import BlogList from "../../BlogList";
import Loading from "../../Skeleton/Loading";

interface Props {
  allBlog: BlogContent[];
  allCategory: CategoryContent[];
}

const Blog = ({ allBlog, allCategory }: Props) => {
  const breadcrumbs: BreadcrumbItem[] = [
    { id: 0, isLink: true, text: "Top", href: "/" },
    { id: 1, isLink: false, text: "Blog" },
  ];

  return (
    <div className="space-y-4">
      <Breadcrumb itemList={breadcrumbs} />
      <CategoryList allCategory={allCategory} />
      <BlogList allBlog={allBlog} />
    </div>
  );
};

export default Blog;
