import { getSupabase, hasSupabaseEnv } from "./supabase";
import { doctors, products, type Doctor, type Product } from "./mockData";

export async function fetchDoctors(): Promise<Doctor[]> {
  if (!hasSupabaseEnv()) return doctors;
  try {
    const sb = getSupabase()!;
    const { data, error } = await sb.from("doctors").select("*");
    if (error || !data || data.length === 0) return doctors;
    return data as Doctor[];
  } catch {
    return doctors;
  }
}

export async function fetchProducts(): Promise<Product[]> {
  if (!hasSupabaseEnv()) return products;
  try {
    const sb = getSupabase()!;
    const { data, error } = await sb.from("products").select("*");
    if (error || !data || data.length === 0) return products;
    return data as Product[];
  } catch {
    return products;
  }
}
