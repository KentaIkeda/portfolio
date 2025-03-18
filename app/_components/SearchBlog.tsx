"use client";

import Search from "./Search";
import HeaderBlogList from "./HeaderBlogList";

import gsap from "gsap";
import { usePathname } from "next/navigation";
import { useState, useId, useEffect, useRef } from "react";

import type { BlogContent } from "../types/types";
import type { ChangeEvent } from "react";

interface Props {
  allBlog: BlogContent[];
}

const SearchBlog = ({ allBlog }: Props) => {
  const [searchString, setSearchString] = useState("");
  const headerId = useId();
  const blogListId = useId();
  const blogContainerId = useId();
  const pathname = usePathname();
  const heightIncreaseAnimationRef = useRef<gsap.core.Tween>(undefined);
  const heightDecreaseAnimationRef = useRef<gsap.core.Tween>(undefined);

  const handleChangeSearchString = (e: ChangeEvent<HTMLInputElement>) => {
    setSearchString(e.target.value);
  };

  const filteredBlog = allBlog.filter(blog => {
    if (searchString.length < 1) return false;
    return blog.title.includes(searchString);
  });

  const getChildrenHeight = (elementList: HTMLElement[]): number => {
    let height = 0;
    elementList.forEach(element => {
      height += element.offsetHeight;
    });
    return height;
  };

  useEffect(() => {
    if (searchString.length > 0) setSearchString("");
  }, [pathname]);

  useEffect(() => {
    const header = document.getElementById(headerId);
    const blogContainer = document.getElementById(blogContainerId);
    if (!header) throw new Error("DID NOT FOUND HEADER.");
    if (!blogContainer) throw new Error("DID NOT FOUND BLOG CONTAINER");

    if (searchString.length < 1) {
      if (!heightDecreaseAnimationRef.current) return;
      heightDecreaseAnimationRef.current.play();
      return;
    }

    if (filteredBlog.length > 0) {
      const blogUL = document.getElementById(blogListId);
      if (!blogUL) throw new Error("DID NOT FOUND UL");

      const blogList = gsap.utils.toArray<HTMLElement>(blogUL.children);
      const blogListHeight = getChildrenHeight(blogList);
      heightIncreaseAnimationRef.current = gsap.fromTo(
        blogContainer,
        {
          height: 0,
        },
        {
          height: blogListHeight,
          ease: "back.out",
          duration: 0.5,
          paused: true,
        }
      );
      heightDecreaseAnimationRef.current = gsap.fromTo(
        blogContainer,
        {
          height: blogListHeight,
        },
        {
          height: 0,
          ease: "back.in",
          duration: 0.5,
          paused: true,
        }
      );

      heightIncreaseAnimationRef.current.play();
    }
    return () => {
      if (heightIncreaseAnimationRef.current) heightIncreaseAnimationRef.current.kill();
      if (heightDecreaseAnimationRef.current) heightDecreaseAnimationRef.current.kill();
    };
  }, [searchString, headerId, blogListId, filteredBlog, blogContainerId]);

  return (
    <header id={headerId} className="h-auto p-10 bg-base-300 text-base-content rounded-b-4xl mx-2">
      <div className={`flex flex-col items-start ${searchString.length < 1 ? "gap-y-0" : "gap-y-2"}`}>
        <div className="w-full flex justify-center items-center">
          <Search value={searchString} onChange={handleChangeSearchString} />
        </div>
        <div id={blogContainerId}>
          {searchString.length > 0 ? (
            <>
              {filteredBlog.length > 0 ? (
                <HeaderBlogList id={blogListId} filteredBlog={filteredBlog} />
              ) : (
                <p>Typing...</p>
              )}
            </>
          ) : (
            <></>
          )}
        </div>
      </div>
    </header>
  );
};

export default SearchBlog;
