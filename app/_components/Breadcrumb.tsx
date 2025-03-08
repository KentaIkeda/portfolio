import Link from "next/link";

import type { BreadcrumbItem } from "../types/types";

interface Breadcrumb {
  itemList: BreadcrumbItem[];
}

const Breadcrumb = ({ itemList }: Breadcrumb) => {
  return (
    <div className="breadcrumbs text-sm p-0">
      <ul>
        {itemList.map(item => {
          if (item.isLink) {
            return (
              <li key={item.id}>
                <Link href={item.href!}>{item.text}</Link>
              </li>
            );
          } else {
            return <li key={item.id}>{item.text}</li>;
          }
        })}
      </ul>
    </div>
  );
};

export default Breadcrumb;
