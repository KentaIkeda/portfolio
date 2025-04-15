"use client";

import { ComponentPropsWithoutRef } from "react";

type Props = ComponentPropsWithoutRef<"input">;

const Search = ({ ...props }: Props) => {
  return (
    <label htmlFor="search_blog" className="input cursor-pointer">
      <span className="label">Search</span>
      <input {...props} id="search_blog" type="search" />
    </label>
  );
};

export default Search;
