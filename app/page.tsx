import Animate from '@/app/_components/Animate';
import Information from '@/app/_components/_sections/_Information/Information';
import Blog from '@/app/_components/_sections/_Blog/Blog';
import Product from '@/app/_components/_sections/_Product/Product';
import MaxWidth from './_components/MaxWidth';

export default async function Home() {
  return (
    <Animate>
      <div className={'h-[calc(100dvh_-_98px)] grid place-items-center'}>
        <Information />
      </div>
      <MaxWidth>
        <div className={'space-y-28'}>
          <Blog />
          <Product />
        </div>
      </MaxWidth>
    </Animate>
  );
}
