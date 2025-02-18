import { NextResponse } from "next/server";
import productsData from "@/data/products.json";

export async function GET() {
  // Simulate network delay
  await new Promise((resolve) => setTimeout(resolve, 500));

  return NextResponse.json(productsData.categories);
}
