import { Suspense } from "react";
import BlogContentFetch from "@/app/_components/root/blog/BlogContentFetch";
import type { Params } from "@/app/types/types";
import Loading from "@/app/_components/Skeleton/Loading";

const page = async ({ params }: Params) => {
  const { id } = await params;
  return (
    <Suspense fallback={<Loading />}>
      <BlogContentFetch id={id} />
    </Suspense>
  );
};

export default page;
