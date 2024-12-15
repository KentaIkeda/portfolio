import { Hobbies } from '@/app/data/hobby';
import HobbyCard from './HobbyCard';

const Hobby = () => {
  const { hobbies } = new Hobbies();

  return (
    <>
      <h2>
        最初に<em>私の趣味</em>についてです。
      </h2>
      <dl className='space-y-4'>
        {hobbies.map(hobby => {
          return (
            <HobbyCard
              key={hobby.title}
              cardTitle={hobby.title}
            >
              {hobby.description}
            </HobbyCard>
          );
        })}
      </dl>
    </>
  );
};

export default Hobby;
