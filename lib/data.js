// File: lib/data.js (create or replace existing)
import { supabase } from './supabase';

export async function getProduct(cle) {
  const { data, error } = await supabase
    .from('wines')
    .select('*')
    .eq('cle', cle)
    .single();
  if (error) throw new Error(error.message);
  return data;
}

export async function getProducts({ limit = 12, offset = 0, filters = {} }) {
  let query = supabase.from('wines').select('*');
  if (filters.region) query = query.eq('region', filters.region);
  if (filters.type) query = query.eq('type', filters.type);
  if (filters.millesime) query = query.eq('millesime', filters.millesime);
  if (filters.appellation) query = query.ilike('appellation', `%${filters.appellation}%`);
  query = query.range(offset, offset + limit - 1);
  const { data, error } = await query;
  if (error) throw new Error(error.message);
  return data;
}