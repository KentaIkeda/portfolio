/* eslint-disable @typescript-eslint/no-unused-vars */
import { Skeleton } from '@/components/ui/skeleton';

import { Fragment } from 'react';

const CategorySkeleton = () => {
  return (
    <div className='flex flex-wrap space-x-1.5'>
      {[...Array(5)].map((_, i) => (
        <Fragment key={i}>
          <Skeleton className='w-24 h-7 bg-muted-foreground' />
        </Fragment>
      ))}
    </div>
  );
};

export default CategorySkeleton;
