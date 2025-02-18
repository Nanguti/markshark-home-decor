import { NextResponse } from "next/server";
import productsData from "@/data/products.json";

export async function GET(
  request: Request,
  { params }: { params: { id: string } }
) {
  const product = productsData.products.find((p) => p.id === params.id);

  if (!product) {
    return new NextResponse("Product not found", { status: 404 });
  }

  // Simulate network delay
  await new Promise((resolve) => setTimeout(resolve, 500));

  return NextResponse.json(product);
}
