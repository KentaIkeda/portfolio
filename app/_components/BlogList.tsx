import { Fragment } from "react";
import Link from "next/link";
import { notoSansJP } from "../fonts/fonts";

import type { BlogContent } from "../types/types";

interface Props {
  allBlog: BlogContent[];
}

const BlogList = ({ allBlog }: Props) => {
  return (
    <ul className="list">
      {allBlog.map(blog => {
        return (
          <Fragment key={blog.id}>
            <li className={`${notoSansJP.className} list-row`}>
              <Link prefetch href={`/blog/${blog.id}`}>
                <div className="flex flex-col gap-y-0.5">
                  <h1 className="text-base font-semibold">{blog.title}</h1>
                  <p className="opacity-65 line-clamp-1 text-xs list-col-wrap">{blog.description}</p>
                </div>
              </Link>
            </li>
          </Fragment>
        );
      })}
    </ul>
  );
};

export default BlogList;
