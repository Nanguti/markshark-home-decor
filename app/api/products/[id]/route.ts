import { NextRequest, NextResponse } from "next/server";
import productsData from "@/data/products.json";

export async function GET(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  // Await the params object
  const { id } = await params;

  const product = productsData.products.find((p) => p.id === id);

  if (!product) {
    return NextResponse.json({ error: "Product not found" }, { status: 404 });
  }

  // Simulate network delay
  await new Promise((resolve) => setTimeout(resolve, 500));

  return NextResponse.json(product);
}
