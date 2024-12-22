import Category from './_components/Category';
import BlogTitles from './_components/BlogTitles';
import MaxWidth from '@/app/_components/MaxWidth';

import { Suspense } from 'react';
import BlogTitlesSkeleton from './_components/_Skeleton/BlogTitlesSkeleton';
import CategorySkeleton from './_components/_Skeleton/CategorySkeleton';

const Page = async () => {
  return (
    <MaxWidth>
      <div className='space-y-8'>
        <Suspense fallback={<CategorySkeleton />}>
          <Category />
        </Suspense>
        <Suspense fallback={<BlogTitlesSkeleton />}>
          <BlogTitles />
        </Suspense>
      </div>
    </MaxWidth>
  );
};
export default Page;
