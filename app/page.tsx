import { fetchAllBlog } from "@/lib/microcms/getMicroCMS";

export default async function Home() {
  const { contents } = await fetchAllBlog();
  return (
    <ul>
      {contents.map(content => {
        const { id, title } = content;
        return (
          <li key={id}>
            <article>
              <h1>{title}</h1>
            </article>
          </li>
        );
      })}
    </ul>
  );
}
