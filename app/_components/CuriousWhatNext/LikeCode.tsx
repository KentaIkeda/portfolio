'use client';

import { ReactNode } from 'react'

interface Props {
  children: ReactNode;
  dataset: string;
}

const LikeCode = ( { children, dataset }: Props) => {
  return (
    <span data-like-code={dataset} className={'like_code inline-block bg-acc text-pink-500 text-lg py-1 px-1.5 rounded-lg cursor-pointer'}>
      <span className={'like_code_text invisible opacity-0 font-bold'}>
        {children}
      </span>
    </span>
  )
}
export default LikeCode
