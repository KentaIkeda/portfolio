import Breadcrumb from "@/app/_components/Breadcrumb";
import { BreadcrumbItem } from "@/app/types/types";
const page = () => {
  const breadcrumbs: BreadcrumbItem[] = [
    { id: 0, isLink: true, text: "Top", href: "/" },
    { id: 1, isLink: false, text: "Product" },
  ];
  return (
    <>
      <Breadcrumb itemList={breadcrumbs} />
      <div>Products page is online</div>
    </>
  );
};

export default page;
