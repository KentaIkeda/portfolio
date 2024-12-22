import React from 'react';
import LikeCode from '@/app/_components/CuriousWhatNext/LikeCode';

const CuriousAboutWhatsNext = () => {
  return (
    <p
      id='curious-text'
      className={'text-center text-sm'}
    >
      <LikeCode dataset={'curious'}>Curious</LikeCode> about what&lsquo;s{' '}
      <LikeCode dataset={'next'}>Next</LikeCode>?
    </p>
  );
};
export default CuriousAboutWhatsNext;
