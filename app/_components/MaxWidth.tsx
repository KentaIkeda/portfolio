interface Props {
  children: React.ReactNode;
}

const MaxWidth = ({ children }: Props) => {
  return <div className='max-w-screen-lg mx-auto'>{children}</div>;
};

export default MaxWidth;
