import { ReactNode } from "react";

interface Props {
  children: ReactNode;
}

const layout = ({ children }: Props) => {
  return <div className="p-10">{children}</div>;
};

export default layout;
