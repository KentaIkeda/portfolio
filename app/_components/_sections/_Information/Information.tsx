import { SNSInfo } from '@/lib/SNSInfo';

const Information = () => {
  return (
    <section
      id='information'
      className='space-y-8'
    >
      <article
        id='information-text'
        className='text-justify text-sm rounded-[5px] p-4 space-y-2.5'
      >
        <p>
          <span className='text-lg tracking-wide'>池田健太</span>
          と申します。
          <wbr />
          現在はフロントエンドエンジニアとして活動をしています。
        </p>
      </article>
      <article id={'SNS'}>
        <ul className={'flex justify-center gap-x-4'}>
          {SNSInfo.map(info => {
            return (
              <li
                key={info.title}
                className='sns_icon'
              >
                <a href={info.href}>{info.icon}</a>
              </li>
            );
          })}
        </ul>
      </article>
    </section>
  );
};
export default Information;
