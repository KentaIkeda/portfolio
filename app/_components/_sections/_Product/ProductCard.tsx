import React from 'react';
import Button from '@/app/_components/Button';
import { cp } from '@/app/fonts/fonts';

interface Props {
  id: number;
  url: string;
  title: string;
  description: string;
}

const ProductCard = ({ id, title, description, url }: Props) => {
  return (
    <div
      id={`prod-card-${id}`}
      className={
        'group border border-sub/10 p-7 rounded-sm will-change-transform hover:border-opacity-50 hover:-translate-y-[2px] transition-normal shadow-2xl'
      }
    >
      <article>
        <div className={'space-y-2.5'}>
          <div className={'flex items-center justify-between'}>
            <h2
              className={`${cp.className} relative -translate-y-[2.5%] text-xl group-hover:text-accent1 transition-normal`}
            >
              {title}
            </h2>
            <Button
              id={id}
              href={url}
              text={'PLAY'}
            />
          </div>
          <p className={'text-justify text-sub group-hover:text-main transition-normal'}>
            {description}
          </p>
        </div>
      </article>
    </div>
  );
};
export default ProductCard;
