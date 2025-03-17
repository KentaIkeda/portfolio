"use client";

import { ComponentPropsWithoutRef } from "react";

type Props = ComponentPropsWithoutRef<"input">;

const Search = ({ ...props }: Props) => {
  return <input {...props} type="search" className="input input-sm" />;
};

export default Search;
