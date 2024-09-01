import Link from "next/link";
import "/home/juannvrs/Documents/nextjs-learning/nextjs-series/src/app/globals.css"

export default function Home() {
  return (
    <main className="div">
      <h1 className="h1 text-white">Welcome home!</h1>
      <Link href="/blog" className="text-white">Blog</Link>
      <Link href="/products" className="text-white block">Products</Link>
   </main>
  );
}
