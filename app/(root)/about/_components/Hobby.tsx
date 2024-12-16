import { Hobbies } from '@/app/data/hobby';
import HobbyCard from './HobbyCard';

const Hobby = () => {
  const { hobbies } = new Hobbies();

  return (
    <>
      <h2>
        最初に<em className='not-italic'>私の趣味</em>についてです。
      </h2>
      <dl className='space-y-8'>
        {hobbies.map(hobby => {
          return (
            <HobbyCard
              key={hobby.title}
              cardTitle={hobby.title}
              description={hobby.description}
            />
          );
        })}
      </dl>
    </>
  );
};

export default Hobby;
