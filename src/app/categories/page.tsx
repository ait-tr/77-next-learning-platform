import Category from "@/types/Category";

export default async function Categories() {
  const res = await fetch("https://api.escuelajs.co/api/v1/categories");
  const categories: Category[] = await res.json();

  const categoriesList = (
    <ul>
      {categories.map((c) => (
        <li key={c.id}>{c.name}</li>
      ))}
    </ul>
  );

  return <div>{categoriesList}</div>;
}

// SSR
// SSG
// ISR

