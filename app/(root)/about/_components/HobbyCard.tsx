import { ReactNode } from 'react';

import { cp } from '@/app/fonts/fonts';

interface Props {
  description: ReactNode;
  cardTitle: string;
}

const HobbyCard = ({ description, cardTitle }: Props) => {
  return (
    <div className='pl-4 py-2'>
      <dt className='relative'>
        <h3 className={`${cp.className} text-xl`}>{cardTitle}</h3>
        <div className='absolute top-1/2 -translate-y-1/2 -left-3.5 bg-accent2 w-2 h-8 rounded-sm' />
      </dt>
      <dd>
        <p>{description}</p>
      </dd>
    </div>
  );
};

export default HobbyCard;
