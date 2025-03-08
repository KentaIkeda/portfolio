import CategoryIdFetch from "@/app/_components/root/category/CategoryIdFetch";
import { Suspense } from "react";
import Loading from "@/app/_components/Skeleton/Loading";

import type { Params } from "@/app/types/types";

const Page = async ({ params }: Params) => {
  const { id } = await params;

  return (
    <Suspense fallback={<Loading />}>
      <CategoryIdFetch id={id} />
    </Suspense>
  );
};

export default Page;
