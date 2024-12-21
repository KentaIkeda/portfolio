import Category from './_components/Category';
import BlogTitles from './_components/BlogTitles';
import MaxWidth from '@/app/_components/MaxWidth';

import { Suspense } from 'react';

const Page = async () => {
  return (
    <MaxWidth>
      <Suspense fallback={<div>Loading...</div>}>
        <Category />
      </Suspense>
      <Suspense fallback={<div>Loading...</div>}>
        <BlogTitles />
      </Suspense>
    </MaxWidth>
  );
};
export default Page;
