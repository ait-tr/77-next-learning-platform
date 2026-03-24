import Product from "@/types/Product";

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
          <li key={product.id}>{product.title}</li>
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
