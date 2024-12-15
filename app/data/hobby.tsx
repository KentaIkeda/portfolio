import { ReactNode } from 'react';

export class HobbyItem {
  title: string;
  description: ReactNode;
  constructor(title: string, description: ReactNode) {
    this.title = title;
    this.description = description;
  }
}

export class Hobbies {
  hobbies: HobbyItem[];
  constructor() {
    this.hobbies = [];
    const hobbyData: HobbyItem[] = [
      {
        title: 'ゲーム',
        description:
          '元々はFPSを主にプレイしていましたが、今は特定のタイトルに拘らず、色んなゲームをプレイしています！',
      },
      {
        title: 'プログラミング',
        description: (
          <>
            仕事でもコードを書いていますが、プライベートな時間でもコードを書いています！主に
            <code>TypeScript</code>
            を使用していますが、最近はフロントの言語ではなく<code>Rust</code>
            に興味津々です！
          </>
        ),
      },
      {
        title: '登山',
        description:
          '東京都にある高尾山にしか登ったことがありませんが、最終的には富士山に登ることを目標にしています！',
      },
    ];

    hobbyData.forEach(hobby => {
      this.hobbies.push(new HobbyItem(hobby.title, hobby.description));
    });
  }
}
