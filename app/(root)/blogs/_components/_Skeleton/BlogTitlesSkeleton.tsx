import { Skeleton } from '@/components/ui/skeleton';

const BlogTitlesSkeleton = () => {
  return (
    <>
      <div className='space-y-2'>
        <Skeleton className='w-72 h-6 bg-muted-foreground' />
        <div className='flex flex-col items-center gap-y-1.5'>
          <Skeleton className='w-full h-6 bg-muted-foreground' />
          <Skeleton className='w-full h-6 bg-muted-foreground' />
          <Skeleton className='w-full h-6 bg-muted-foreground' />
        </div>
      </div>
      <div className='space-y-2'>
        <Skeleton className='w-72 h-6 bg-muted-foreground' />
        <div className='flex flex-col items-center gap-y-1.5'>
          <Skeleton className='w-full h-6 bg-muted-foreground' />
          <Skeleton className='w-full h-6 bg-muted-foreground' />
          <Skeleton className='w-full h-6 bg-muted-foreground' />
        </div>
      </div>
      <div className='space-y-2'>
        <Skeleton className='w-72 h-6 bg-muted-foreground' />
        <div className='flex flex-col items-center gap-y-1.5'>
          <Skeleton className='w-full h-6 bg-muted-foreground' />
          <Skeleton className='w-full h-6 bg-muted-foreground' />
          <Skeleton className='w-full h-6 bg-muted-foreground' />
        </div>
      </div>
      <div className='space-y-2'>
        <Skeleton className='w-72 h-6 bg-muted-foreground' />
        <div className='flex flex-col items-center gap-y-1.5'>
          <Skeleton className='w-full h-6 bg-muted-foreground' />
          <Skeleton className='w-full h-6 bg-muted-foreground' />
          <Skeleton className='w-full h-6 bg-muted-foreground' />
        </div>
      </div>
    </>
  );
};

export default BlogTitlesSkeleton;
