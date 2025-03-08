import type { BreadcrumbItem, CategoryContent } from "@/app/types/types";
import Breadcrumb from "../../Breadcrumb";
import CategoryList from "../../CategoryList";

interface Props {
  allCategory: CategoryContent[];
}

const Category = ({ allCategory }: Props) => {
  const breadcrumbs: BreadcrumbItem[] = [
    { id: 0, isLink: true, text: "Top", href: "/" },
    { id: 1, isLink: false, text: "Category" },
  ];
  return (
    <div className="p-10">
      <div className="h-dvh w-full grid place-items-center">
        <div className="absolute top-10 left-10">
          <Breadcrumb itemList={breadcrumbs} />
        </div>
        <div>
          <h1 className="font-bold text-5xl">All Category Here</h1>
          <p className="mt-8 mb-4">
            All Blog/Product categories can be found here! Click on the category that interest you!
          </p>
          <CategoryList allCategory={allCategory} />
        </div>
      </div>
    </div>
  );
};

export default Category;
