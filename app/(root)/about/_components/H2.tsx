'use client';

import { cp } from '@/app/fonts/fonts';

interface Props {
  heading2: string;
}

const H2 = ({ heading2 }: Props) => {
  return (
    <h2 className={`${cp.className} text-xl line-clamp-1 mt-6 mb-1`}>
      <em className='not-italic'>{heading2}</em>
    </h2>
  );
};

export default H2;
