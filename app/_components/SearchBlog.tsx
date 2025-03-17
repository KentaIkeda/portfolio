"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { notoSansJP } from "../fonts/fonts";
import type { BlogContent } from "../types/types";
import Search from "./Search";

import { ChangeEvent, Fragment, MouseEvent, useState } from "react";

interface Props {
  allBlog: BlogContent[];
}

const SearchBlog = ({ allBlog }: Props) => {
  const [searchString, setSearchString] = useState("");
  const router = useRouter();

  const handleChangeSearchString = (e: ChangeEvent<HTMLInputElement>) => {
    setSearchString(e.target.value);
  };

  const filteredBlog = allBlog.filter(blog => {
    if (searchString.length < 1) return false;
    return blog.title.includes(searchString);
  });

  const handleClickLink = (e: MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();

    setSearchString("");
    router.push(e.currentTarget.href);
  };

  return (
    <>
      <Search value={searchString} onChange={handleChangeSearchString} />
      {searchString.length > 0 && (
        <div className="w-[75%] p-10 rounded-4xl bg-base-300 text-base-content border border-accent shadow-2xl fixed z-[9999] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
          <ul className="flex flex-col gap-y-8">
            {filteredBlog.map(blog => {
              return (
                <Fragment key={blog.id}>
                  <li className={`${notoSansJP.className}`}>
                    <Link prefetch href={`/blog/${blog.id}`} onClick={handleClickLink}>
                      <div className="flex flex-col gap-y-0.5">
                        <h1 className="font-semibold">{blog.title}</h1>
                        <p className="opacity-65 line-clamp-1 text-xs">{blog.description}</p>
                      </div>
                    </Link>
                  </li>
                </Fragment>
              );
            })}
          </ul>
        </div>
      )}
    </>
  );
};

export default SearchBlog;
