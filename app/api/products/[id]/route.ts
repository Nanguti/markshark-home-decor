import { NextRequest, NextResponse } from "next/server";
import productsData from "@/data/products.json";

// Use this type for the context parameter
type Context = {
  params: { id: string };
};

export async function GET(req: NextRequest, context: Context) {
  const product = productsData.products.find((p) => p.id === context.params.id);

  if (!product) {
    return NextResponse.json({ error: "Product not found" }, { status: 404 });
  }

  // Simulate network delay
  await new Promise((resolve) => setTimeout(resolve, 500));

  return NextResponse.json(product);
}
