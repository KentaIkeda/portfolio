import { Suspense } from "react";
import CategoryFetch from "@/app/_components/root/category/CategoryFetch";
import Loading from "@/app/_components/Skeleton/Loading";

const Page = () => {
  return (
    <Suspense fallback={<Loading />}>
      <CategoryFetch />
    </Suspense>
  );
};

export default Page;
