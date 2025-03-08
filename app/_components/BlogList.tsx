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
                <div className="card bg-base-200 drop-shadow-md">
                  <div className="card-body text-base-content">
                    <h1 className="card-title">{blog.title}</h1>
                    <p className="opacity-65 line-clamp-1">{blog.description}</p>
                  </div>
                </div>
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
