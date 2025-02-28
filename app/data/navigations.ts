export type NavigationItem = {
  name: string;
  href: string;
};

export class NavItem {
  name: string;
  href: string;
  /**
   * 個々のナビゲーションのアイテムを生成する
   * @constructor
   * @param {string} name - ナビゲーションの名前
   * @param {string} href - ナビゲーションのパス
   * **/
  constructor(name: string, href: string) {
    this.name = name;
    this.href = href;
  }
}

/**
 * @classDesc ナビゲーションのアイテムをリストにしているクラス
 * **/
export class Navigation {
  navigations: NavItem[];
  /**
   * 全てのナビゲーションを生成
   * @constructor
   * **/
  constructor() {
    this.navigations = [];

    const navItemData: NavigationItem[] = [
      {
        name: 'home',
        href: '/',
      },
      {
        name: 'blogs',
        href: '/blogs',
      },
      {
        name: 'products',
        href: '/products',
      },
    ];

    navItemData.forEach(navItem => {
      this.navigations.push(new NavItem(navItem.name, navItem.href));
    });
  }
}
