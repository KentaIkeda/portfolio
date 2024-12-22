import Category from './_components/Category';
import BlogTitles from './_components/BlogTitles';
import MaxWidth from '@/app/_components/MaxWidth';

import { Suspense } from 'react';

const Page = async () => {
  return (
    <MaxWidth>
      <div className='space-y-8'>
        <Suspense fallback={<div>Loading...</div>}>
          <Category />
        </Suspense>
        <Suspense fallback={<div>Loading...</div>}>
          <BlogTitles />
        </Suspense>
      </div>
    </MaxWidth>
  );
};
export default Page;
