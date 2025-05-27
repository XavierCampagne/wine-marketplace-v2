import { createClient } from '@supabase/supabase-js';

const supabase = createClient(process.env.SUPABASE_URL!, process.env.SUPABASE_KEY!);

type ProductPageProps = {
  params: Promise<{ handle: string }>;
};

export default async function ProductPage({ params }: ProductPageProps) {
  const { handle } = await params; // Await the params Promise to get the handle

  // Fetch product data from Supabase
  const { data: bottle, error } = await supabase
    .from('products') // Adjust table name if different
    .select('domaine, appellation, millesime, type, contenance, quantite, region')
    .eq('handle', handle)
    .single();

  if (error || !bottle) {
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