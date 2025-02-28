import type { ReactNode } from 'react';

const MaxWidth = ({ children }: { children: ReactNode }) => {
  return <div className='max-w-screen-lg mx-auto'>{children}</div>;
};

export default MaxWidth;
