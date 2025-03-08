import { Suspense } from "react";
import CategoryFetch from "@/app/_components/root/category/CategoryFetch";

const Page = () => {
  return (
    <Suspense fallback={<p>Loading...</p>}>
      <CategoryFetch />
    </Suspense>
  );
};

export default Page;
