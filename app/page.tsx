import Animate from '@/app/_components/Animate';
import Information from '@/app/_components/_sections/_Information/Information';
import Blog from '@/app/_components/_sections/_Blog/Blog';
import Product from '@/app/_components/_sections/_Product/Product';
import CuriousAboutWhatsNext from '@/app/_components/CuriousWhatNext/CuriousAboutWhatsNext';

export default async function Home() {
  return (
    <Animate>
      <div className={'h-dvh grid place-items-center'}>
        <div className={'space-y-20'}>
          <Information />
          <CuriousAboutWhatsNext />
        </div>
      </div>
      <div className={'space-y-28'}>
        <Blog />
        <Product />
      </div>
    </Animate>
  );
}
