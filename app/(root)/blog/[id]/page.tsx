import { Suspense } from "react";
import BlogContentFetch from "@/app/_components/root/blog/BlogContentFetch";
import { Params } from "@/app/types/types";

const page = async ({ params }: Params) => {
  const { id } = await params;
  return (
    <Suspense fallback={<p>Now Loading...</p>}>
      <BlogContentFetch id={id} />
    </Suspense>
  );
};

export default page;
