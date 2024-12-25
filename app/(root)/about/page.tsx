'use client';

import MaxWidth from '@/app/_components/MaxWidth';
import Gear from './_components/Gear';
import Hobby from './_components/Hobby';

import { cp } from '@/app/fonts/fonts';
import LearningNow from './_components/LearningNow';

const page = () => {
  return (
    <MaxWidth>
      <h1 className={`${cp.className} text-2xl`}>ABOUT</h1>
      <p>こんちは！フロントエンドエンジニアとして働いている池田です！</p>
      <p>このページでは、私に関する情報を記載していきます。</p>
      <LearningNow />
      <Hobby />
      <Gear />
    </MaxWidth>
  );
};

export default page;
