import Link from 'next/link';
import { cp } from '@/app/fonts/fonts';

interface Props {
  i: number;
  id: string;
  title: string;
  description: string;
}

const BlogCard = ({ id, title, description, i }: Props) => {
  return (
    <article
      className={'group grid space-y-3'}
      id={`blog-card-${i}`}
    >
      <Link href={`/blogs/${id}`}>
        <h2 className={`${cp.className} group-hover:text-accent1 transition-normal`}>{title}</h2>
        <p className={'text-justify text-sub group-hover:text-main transition-normal'}>
          {description}
        </p>
      </Link>
    </article>
  );
};
export default BlogCard;
