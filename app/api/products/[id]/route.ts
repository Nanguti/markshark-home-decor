import { NextRequest, NextResponse } from "next/server";
import productsData from "@/data/products.json";

// The correct type definitions for App Router route handlers
export async function GET(request: NextRequest) {
  // Access the dynamic route parameter from the URL
  const pathname = request.nextUrl.pathname;
  const id = pathname.split("/").pop(); // Get the last part of the pathname

  if (!id) {
    return NextResponse.json(
      { error: "Product ID is missing" },
      { status: 400 }
    );
  }

  const product = productsData.products.find((p) => p.id === id);

  if (!product) {
    return NextResponse.json({ error: "Product not found" }, { status: 404 });
  }

  // Simulate network delay
  await new Promise((resolve) => setTimeout(resolve, 500));

  return NextResponse.json(product);
}
