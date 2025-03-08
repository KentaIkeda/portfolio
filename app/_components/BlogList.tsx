import { Fragment } from "react";
import Link from "next/link";

import type { BlogContent } from "../types/types";

interface Props {
  allBlog: BlogContent[];
}

const BlogList = ({ allBlog }: Props) => {
  return (
    <ul className="list">
      {allBlog.map((blog, i) => {
        return (
          <Fragment key={blog.id}>
            <li>
              <Link prefetch href={`/blog/${blog.id}`}>
                <h2 className="">{blog.title}</h2>
                <p className="opacity-65 line-clamp-1">{blog.description}</p>
              </Link>
            </li>
            {i < allBlog.length - 1 && <div className="divider" />}
          </Fragment>
        );
      })}
    </ul>
  );
};

export default BlogList;
