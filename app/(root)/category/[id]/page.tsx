import CategoryIdFetch from "@/app/_components/root/category/CategoryIdFetch";
import { Suspense } from "react";

import type { Params } from "@/app/types/types";

const Page = async ({ params }: Params) => {
  const { id } = await params;

  return (
    <Suspense fallback={<p>Loading...</p>}>
      <CategoryIdFetch id={id} />
    </Suspense>
  );
};

export default Page;
