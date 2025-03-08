import Copyright from "./Copyright";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="relative footer p-10 bg-neutral text-neutral-content">
      <div className="footer footer-vertical md:footer-horizontal space-y-2">
        <nav>
          <h2 className="footer-title">Content</h2>
          <ul className="space-y-1.5">
            <li>
              <Link prefetch href={"/"} className="link link-hover">
                Top
              </Link>
            </li>
            <li>
              <Link prefetch href={"/blog"} className="link link-hover">
                Blog
              </Link>
            </li>
            <li>
              <Link prefetch href={"/category"} className="link link-hover">
                Category
              </Link>
            </li>
            <li>
              <Link prefetch href={"/products"} className="link link-hover">
                Products
              </Link>
            </li>
          </ul>
        </nav>
        <nav>
          <h2 className="footer-title">SNS</h2>
          <ul className="space-y-1.5">
            <li>
              <a href="https://github.com/KentaIkeda" target="_blank" className="link link-hover">
                Git Hub
              </a>
            </li>
          </ul>
        </nav>
      </div>
      <Copyright />
    </footer>
  );
};

export default Footer;
