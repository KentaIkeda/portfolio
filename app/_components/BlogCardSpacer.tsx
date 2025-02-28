import type { ReactNode } from 'react';

const BlogCardSpacer = ({ children }: { children: ReactNode }) => {
  return <div className='space-y-16'>{children}</div>;
};

export default BlogCardSpacer;
