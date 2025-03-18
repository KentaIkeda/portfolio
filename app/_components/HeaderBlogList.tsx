import Link from "next/link";
import { notoSansJP } from "../fonts/fonts";

import type { BlogContent } from "../types/types";
import type { MouseEvent } from "react";

interface Props {
  id: string;
  filteredBlog: BlogContent[];
  handleClick: (e: MouseEvent<HTMLAnchorElement>) => void;
}

const HeaderBlogList = ({ id, filteredBlog, handleClick }: Props) => {
  return (
    <ul id={id} className="flex flex-col">
      {filteredBlog.map((blog, i) => {
        return (
          <li key={blog.id} className={`${notoSansJP.className} ${i + 1 === filteredBlog.length ? "pt-2" : "py-2"}`}>
            <Link prefetch href={`/blog/${blog.id}`} onClick={handleClick} className="font-semibold">
              {blog.title}
            </Link>
          </li>
        );
      })}
    </ul>
  );
};

export default HeaderBlogList;
