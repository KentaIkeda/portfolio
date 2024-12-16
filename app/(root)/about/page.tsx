'use client';

import Gear from './_components/Gear';
import Hobby from './_components/Hobby';

const page = () => {
  return (
    <>
      <h1>ABOUT</h1>
      <p>こんちは！フロントエンドエンジニアとして働いている池田です！</p>
      <p>このページでは、私に関する情報を記載していきます。</p>
      <Hobby />
      <Gear />
    </>
  );
};

export default page;
