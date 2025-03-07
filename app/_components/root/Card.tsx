import Link from "next/link";

interface Props {
  href: string;
  label: string;
}

const Card = ({ href, label }: Props) => {
  return (
    <article className="w-fit h-fit">
      <Link
        href={`/${href}`}
        prefetch
        className="size-56 bg-gray-200 rounded-4xl text-2xl flex justify-center items-center drop-shadow-2xl hover:drop-shadow-sm hover:translate-y-6 transition-all duration-300 will-change-transform"
      >
        {label}
      </Link>
    </article>
  );
};

export default Card;
