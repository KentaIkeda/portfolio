import AllBlogFetch from "./AllBlogFetch";
import { Suspense } from "react";

const Header = () => {
  return (
    <Suspense fallback={<p>Loading...</p>}>
      <AllBlogFetch />
    </Suspense>
  );
};

export default Header;
