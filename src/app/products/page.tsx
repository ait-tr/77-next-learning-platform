import Product from "@/types/Product";
import Link from "next/link";

export default async function Products() {
  const res = await fetch("https://api.escuelajs.co/api/v1/products", {
    next: { revalidate: 60 }, // если указали - будет ISR
  });
  const products: Product[] = await res.json();
  console.log("Hello!");

  return (
    <div>
      <ul>
        {products.map((product) => (
          <li key={product.id}>
            <Link href={`/products/${product.id}`}>{product.title}</Link>
            </li>
        ))}
      </ul>
    </div>
  );
}

// SERVER COMPONENTS
// SSG - Static Site Generation -  когда один раз генерируется при билде - и дальше не меняется
// SSR - Server Side Rendering - на каждый запрос
// ISR - Incremental Static Regeneration - когда например по таймеру или при определенных условиях
// {next: {revalidate: 60}}
