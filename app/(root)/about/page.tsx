'use client';

const page = () => {
  return (
    <>
      <h1>こんちは！フロントエンドエンジニアとして働いている池田です！</h1>
      <p>このページでは、私に関する情報を記載していきます。</p>
      <h2>
        最初に<em>私の趣味</em>についてです。
      </h2>
      <dl>
        <div className='border border-sub/10'>
          <dt>
            <h3 className='text-2xl'>ゲーム</h3>
          </dt>
          <dd>
            <p>
              元々はFPSを主にプレイしていましたが、今は特定のタイトルに拘らず、色んなゲームをプレイしています！
            </p>
          </dd>
        </div>
        <div>
          <dt>
            <h3 className='text-2xl'>プログラミング</h3>
          </dt>
          <dd>
            <p>
              仕事でもコードを書いていますが、プライベートな時間でもコードを書いています！主に
              <code>TypeScript</code>
              を使用していますが、最近はフロントの言語ではなく<code>Rust</code>
              に興味津々です！
            </p>
          </dd>
        </div>
        <div>
          <dt>
            <h3 className='text-2xl'>登山</h3>
          </dt>
          <dd>
            東京都にある高尾山にしか登ったことがありませんが、最終的には富士山に登ることを目標にしています！
          </dd>
        </div>
      </dl>
    </>
  );
};

export default page;
