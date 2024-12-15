import { ReactNode } from 'react';

interface Props {
  children: ReactNode;
}

const layout = ({ children }: Props) => {
  return (
    <div
      data-page-except-home
      className='mt-28'
    >
      {children}
    </div>
  );
};

export default layout;
