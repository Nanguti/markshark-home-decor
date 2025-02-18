import { NextRequest, NextResponse } from "next/server";
import { type NextApiRequest, type NextApiResponse } from "next";
import productsData from "@/data/products.json";

// The correct type definitions for App Router route handlers
interface RouteHandlerContext {
  params: {
    id: string;
  };
}

export async function GET(
  request: NextRequest,
  { params }: RouteHandlerContext
) {
  const product = productsData.products.find((p) => p.id === params.id);

  if (!product) {
    return NextResponse.json({ error: "Product not found" }, { status: 404 });
  }

  // Simulate network delay
  await new Promise((resolve) => setTimeout(resolve, 500));

  return NextResponse.json(product);
}
