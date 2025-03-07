import Copyright from "./Copyright";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="relative footer p-10 bg-neutral text-neutral-content">
      <div className="footer footer-vertical md:footer-horizontal">
        <nav>
          <h6 className="footer-title">Content</h6>
          <Link prefetch href={"/blog"} className="link link-hover">
            Blog
          </Link>
          <Link prefetch href={"/product"} className="link link-hover">
            Product
          </Link>
        </nav>
        <nav>
          <h6 className="footer-title">SNS</h6>
          <a href="https://github.com/KentaIkeda" target="_blank" className="link link-hover">
            Git Hub
          </a>
        </nav>
      </div>
      <Copyright />
    </footer>
  );
};

export default Footer;
