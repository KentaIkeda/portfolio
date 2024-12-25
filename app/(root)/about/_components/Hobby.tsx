import { Hobbies } from '@/app/data/hobby';
import HobbyCard from './HobbyCard';
import H2 from './H2';

const Hobby = () => {
  const { hobbies } = new Hobbies();

  return (
    <>
      <H2 heading2='私の趣味' />
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
