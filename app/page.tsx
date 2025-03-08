import Link from "next/link";

export default async function Home() {
  return (
    <div className="p-10">
      <div className="space-y-12">
        <section>
          <div>
            <h1 className="text-lg font-extralight">About blog.</h1>
            <p className="mt-4 mb-2">
              I write articles regarding daily questions. The articles I write include my own understanding. You may
              gain new insights!
            </p>
            <Link prefetch href="/blog" className="btn btn-block btn-dash btn-circle btn-secondary">
              Read article
            </Link>
          </div>
        </section>
        <section>
          <div>
            <h1 className="text-lg font-extralight">About product.</h1>
            <p className="mt-4 mb-2">
              I introduce the products I create on a daily basis. You may possibly come across a good product.
            </p>
            <Link prefetch href="/products" className="btn btn-block btn-dash btn-circle btn-secondary">
              View product
            </Link>
          </div>
        </section>
      </div>
    </div>
  );
}
