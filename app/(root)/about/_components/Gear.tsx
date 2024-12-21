import Image from 'next/image';

import HHKBImage from '@/app/images/HHKB.jpg';

const Gear = () => {
  return (
    <>
      <h2>
        次に<em className='not-italic'>私のこだわりのデバイス</em>についてです。
      </h2>
      <figure>
        <div className='aspect-video object-cover overflow-hidden group rounded-sm shadow-2xl'>
          <Image
            src={HHKBImage.src}
            alt=''
            width={HHKBImage.width}
            height={HHKBImage.height}
            className='group-hover:scale-110 transition-normal'
          />
        </div>
        <figcaption className='px-4'>
          <p>
            <a
              href='https://www.pfu.ricoh.com/direct/hhkb/#list_hybrid_types'
              target='_black'
              rel='noreferrer'
              className='text-accent1 underline underline-offset-1'
            >
              HHKB Professional HYBRID Type-s
            </a>
            を使用しています。
          </p>
          <p>
            極力指がホームポジションから移動しないように配列を変更して、作業効率を可能な限り上げています。
          </p>
          <p>本当はGlove80というキーボードを使いたい...</p>
        </figcaption>
      </figure>
    </>
  );
};

export default Gear;
