import React from 'react';
import Button from '@/app/_components/Button';

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
        'group border border-sub/10 p-7 rounded-sm will-change-transform hover:border-opacity-50 hover:-translate-y-[2px] transition-all duration-200 shadow-2xl'
      }
    >
      <article>
        <div className={'space-y-2.5'}>
          <div className={'flex items-center justify-between'}>
            <h2
              className={
                'relative -translate-y-[2.5%] text-xl group-hover:text-acc transition-all duration-200'
              }
            >
              {title}
            </h2>
            <Button
              id={id}
              href={url}
              text={'PLAY'}
            />
          </div>
          <p
            className={'text-justify text-sub group-hover:text-teal-50 transition-all duration-200'}
          >
            {description}
          </p>
        </div>
      </article>
    </div>
  );
};
export default ProductCard;
