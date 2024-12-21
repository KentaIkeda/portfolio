import Category from './_components/Category';
import BlogTitles from './_components/BlogTitles';

import { Suspense } from 'react';

const Page = async () => {
  return (
    <div>
      <Suspense fallback={<div>Loading...</div>}>
        <Category />
      </Suspense>
      <Suspense fallback={<div>Loading...</div>}>
        <BlogTitles />
      </Suspense>
    </div>
  );
};
export default Page;
