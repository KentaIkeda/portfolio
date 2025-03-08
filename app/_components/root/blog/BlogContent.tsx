import style from "./css/BlogContent.module.css";

interface Props {
  html: string;
}

const BlogContent = ({ html }: Props) => {
  return <div className={style.article} dangerouslySetInnerHTML={{ __html: html }} />;
};

export default BlogContent;
