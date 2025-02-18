import { NextRequest, NextResponse } from "next/server";
import productsData from "@/data/products.json";

// Define the expected type for the product ID in the URL
type RouteParams = {
  id: string;
};

export async function GET(request: NextRequest) {
  // Extract the product id from the URL path
  const { pathname } = request.nextUrl;
  const id = pathname.split("/").pop(); // Extract the last segment (ID)

  if (!id) {
    return NextResponse.json(
      { error: "Product ID is missing" },
      { status: 400 }
    );
  }

  // Find the product from the mock data
  const product = productsData.products.find((p) => p.id === id);

  if (!product) {
    return NextResponse.json({ error: "Product not found" }, { status: 404 });
  }

  // Simulate network delay
  await new Promise((resolve) => setTimeout(resolve, 500));

  return NextResponse.json(product);
}
