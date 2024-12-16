import { FaSquareGithub, FaSquareXTwitter } from 'react-icons/fa6';

// https://x.com/2525devdev/

export const SNSInfo = [
  {
    title: 'X',
    icon: (
      <FaSquareXTwitter
        size={30}
        color={'white'}
        title={'X'}
      />
    ),
    href: 'https:google.com/',
  },
  {
    title: 'GitHub',
    icon: (
      <FaSquareGithub
        size={30}
        color={'white'}
        title={'GitHub'}
      />
    ),
    href: 'https://github.com/KentaIkeda/',
  },
];
