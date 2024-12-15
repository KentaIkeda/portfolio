import { ReactNode } from 'react';

interface Props {
  children: ReactNode;
  cardTitle: string;
}

const HobbyCard = ({ children, cardTitle }: Props) => {
  return (
    <div className='border border-sub/10'>
      <dt>
        <h3 className='text-2xl'>{cardTitle}</h3>
      </dt>
      <dd>
        <p>{children}</p>
      </dd>
    </div>
  );
};

export default HobbyCard;
