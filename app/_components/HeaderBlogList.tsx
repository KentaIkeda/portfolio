import Link from "next/link";
import { notoSansJP } from "../fonts/fonts";

import type { BlogContent } from "../types/types";

interface Props {
  id: string;
  filteredBlog: BlogContent[];
}

const HeaderBlogList = ({ id, filteredBlog }: Props) => {
  return (
    <ul id={id} className="flex flex-col">
      {filteredBlog.map((blog, i) => {
        return (
          <li key={blog.id} className={`${notoSansJP.className} ${i + 1 === filteredBlog.length ? "pt-2" : "py-2"}`}>
            <Link prefetch href={`/blog/${blog.id}`} className="font-semibold">
              {blog.title}
            </Link>
          </li>
        );
      })}
    </ul>
  );
};

export default HeaderBlogList;
