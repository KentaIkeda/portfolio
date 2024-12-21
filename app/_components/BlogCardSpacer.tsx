interface Props {
  children: React.ReactNode;
}

const BlogCardSpacer = ({ children }: Props) => {
  return <div className='space-y-16'>{children}</div>;
};

export default BlogCardSpacer;
