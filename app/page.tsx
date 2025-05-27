// File: app/page.tsx
import Link from 'next/link';
import { getProducts } from '../lib/data';

export default async function Home() {
  const featuredBottles = await getProducts({ limit: 3 });

  return (
    <div className="container mx-auto p-6">
      <section className="text-center mb-12">
        <h1 className="text-4xl font-extrabold text-white mb-4">Discover Rare Wines</h1>
        <p className="text-gray-400 max-w-2xl mx-auto mb-6">
          Explore our curated collection of vintage wines from trusted sellers. Find your perfect bottle or sell your own.
        </p>
        <Link href="/collection">
          <button className="btn-primary">Shop Now</button>
        </Link>
      </section>
      <h2 className="text-2xl font-semibold text-white mb-6">Featured Bottles</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {featuredBottles.map((bottle: any) => (
          <div key={bottle.id} className="product-card">
            <div className="w-full h-48 bg-gray-700 rounded-lg mb-4 flex items-center justify-center">
              <span className="text-gray-400">Image Coming Soon</span>
            </div>
            <h3>{bottle.domaine}</h3>
            <p>{bottle.appellation} {bottle.millesime}</p>
            <p>{bottle.type} - {bottle.contenance}</p>
            <p>Quantity: {bottle.quantite}</p>
            <Link href={`/product/${bottle.cle}`}>
              <button className="btn-secondary mt-4 w-full">View Details</button>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}