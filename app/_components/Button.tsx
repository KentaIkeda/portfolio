import Link from 'next/link'

interface Props {
  id: number;
  text: string;
  href: string;
}

const Button = ({ id, text, href }: Props) => {
  return (
    <Link
      id={`btn-${id}`}
      href={href}
      className={'block relative bg-gradient-to-br from-acc to-pink-900 w-32 h-9 rounded-sm shadow-2xl shadow-teal-700 border-[1px] border-pink-400'}
      role={"button"}

    >
      <span className={'absolute top-[47.5%] -translate-y-1/2 left-1/2 -translate-x-1/2'}>
        {text}
      </span>
    </Link>
  )
}
export default Button
