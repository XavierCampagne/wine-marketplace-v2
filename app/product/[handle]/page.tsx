// File: app/product/[handle]/page.tsx
import { getProduct } from '../../../lib/data';

export default async function ProductPage({ params }: { params: { handle: string } }) {
  const bottle = await getProduct(params.handle);

  if (!bottle) {
    return <div className="container mx-auto p-6 text-white">Bottle not found</div>;
  }

  return (
    <div className="container mx-auto p-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="w-full h-96 bg-gray-700 rounded-lg flex items-center justify-center">
          <span className="text-gray-400">Image Coming Soon</span>
        </div>
        <div>
          <h1 className="text-3xl font-bold text-white mb-4">{bottle.domaine}</h1>
          <p className="text-gray-400 mb-2">{bottle.appellation} {bottle.millesime}</p>
          <p className="text-gray-400 mb-2">{bottle.type} - {bottle.contenance}</p>
          <p className="text-gray-400 mb-4">Quantity: {bottle.quantite}</p>
          <p className="text-gray-400 mb-4">Region: {bottle.region}</p>
          <button className="btn-primary">Contact Seller</button>
        </div>
      </div>
    </div>
  );
}