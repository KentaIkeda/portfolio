import { Fragment } from "react";
import Link from "next/link";
import { notoSansJP } from "../fonts/fonts";

import type { BlogContent } from "../types/types";

interface Props {
  allBlog: BlogContent[];
}

const BlogList = ({ allBlog }: Props) => {
  return (
    <ul className="flex flex-col gap-y-8">
      {allBlog.map(blog => {
        return (
          <Fragment key={blog.id}>
            <li className={`${notoSansJP.className}`}>
              <Link prefetch href={`/blog/${blog.id}`}>
                <div className="flex flex-col gap-y-0.5">
                  <h2 className="text-lg font-semibold">{blog.title}</h2>
                  <p className="opacity-65 line-clamp-1 text-sm">{blog.description}</p>
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
