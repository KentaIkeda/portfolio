import { notoSansJP } from "@/app/fonts/fonts";
import { fetchIndivisualBlog } from "@/lib/microcms/getMicroCMS";
import { getParsedCode } from "@/utils/getParsedCodeBlog";
import { formatTime } from "@/utils/formatTime";

import "highlight.js/styles/androidstudio.css";
import Breadcrumb from "../../Breadcrumb";
import { BreadcrumbItem } from "@/app/types/types";
import BlogContent from "./BlogContent";

interface Props {
  id: string;
}

const BlogContentFetch = async ({ id }: Props) => {
  const { title, content, updatedAt, publishedAt } = await fetchIndivisualBlog(id);
  const html = await getParsedCode(content);

  const breadcrumbs: BreadcrumbItem[] = [
    { id: 0, isLink: true, text: "Top", href: "/" },
    { id: 1, isLink: true, text: "Blog", href: "/blog" },
    { id: 2, isLink: false, text: "Blog content" },
  ];

  const publishedTime = formatTime(publishedAt);
  const updatedTime = formatTime(updatedAt);
  return (
    <>
      <Breadcrumb itemList={breadcrumbs} />
      <article className={`${notoSansJP.className} mt-16`}>
        <h1 className="text-5xl font-bold text-center mb-8">{title}</h1>
        <div className="max-w-5xl mx-auto">
          <ul className="flex flex-col items-end gap-y-1.5 mb-4 *:text-xs">
            <li className="flex items-center gap-x-0.5">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1"
                stroke="currentColor"
                className="size-4"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15.59 14.37a6 6 0 0 1-5.84 7.38v-4.8m5.84-2.58a14.98 14.98 0 0 0 6.16-12.12A14.98 14.98 0 0 0 9.631 8.41m5.96 5.96a14.926 14.926 0 0 1-5.841 2.58m-.119-8.54a6 6 0 0 0-7.381 5.84h4.8m2.581-5.84a14.927 14.927 0 0 0-2.58 5.84m2.699 2.7c-.103.021-.207.041-.311.06a15.09 15.09 0 0 1-2.448-2.448 14.9 14.9 0 0 1 .06-.312m-2.24 2.39a4.493 4.493 0 0 0-1.757 4.306 4.493 4.493 0 0 0 4.306-1.758M16.5 9a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Z"
                />
              </svg>
              <time dateTime={publishedTime.dateTime}>{publishedTime.text}</time>
            </li>
            <li className="flex items-center gap-x-0.5">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1"
                stroke="currentColor"
                className="size-4"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0 3.181 3.183a8.25 8.25 0 0 0 13.803-3.7M4.031 9.865a8.25 8.25 0 0 1 13.803-3.7l3.181 3.182m0-4.991v4.99"
                />
              </svg>
              <time dateTime={updatedTime.dateTime}>{updatedTime.text}</time>
            </li>
          </ul>
          <BlogContent html={html.html()} />
        </div>
      </article>
    </>
  );
};

export default BlogContentFetch;
