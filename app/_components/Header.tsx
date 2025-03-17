import AllBlogFetch from "./AllBlogFetch";
import { Suspense } from "react";

const Header = () => {
  return (
    <header className="p-10 bg-base-300 text-base-content rounded-b-4xl mx-2">
      <div className="flex flex-col items-start gap-y-2">
        <Suspense fallback={<p>Loading...</p>}>
          <AllBlogFetch />
        </Suspense>
      </div>
    </header>
  );
};

export default Header;
