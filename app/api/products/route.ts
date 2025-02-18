import { NextResponse } from "next/server";
import productsData from "@/data/products.json";
// import { ProductFilters } from "@/types/shop";

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);

  let filteredProducts = [...productsData.products];

  // Add search filter
  if (searchParams.has("searchQuery")) {
    const query = searchParams.get("searchQuery")?.toLowerCase();
    filteredProducts = filteredProducts.filter(
      (p) =>
        p.name.toLowerCase().includes(query!) ||
        p.description.toLowerCase().includes(query!)
    );
  }

  // Apply filters
  if (searchParams.has("category")) {
    filteredProducts = filteredProducts.filter(
      (p) => p.category === searchParams.get("category")
    );
  }

  if (searchParams.has("subCategory")) {
    filteredProducts = filteredProducts.filter(
      (p) => p.subCategory === searchParams.get("subCategory")
    );
  }

  if (searchParams.has("minPrice") && searchParams.has("maxPrice")) {
    const minPrice = parseFloat(searchParams.get("minPrice") || "0");
    const maxPrice = parseFloat(searchParams.get("maxPrice") || "999999");
    filteredProducts = filteredProducts.filter(
      (p) => p.price >= minPrice && p.price <= maxPrice
    );
  }

  if (searchParams.has("inStock")) {
    const inStock = searchParams.get("inStock") === "true";
    filteredProducts = filteredProducts.filter((p) => p.inStock === inStock);
  }

  // Apply sorting
  if (searchParams.has("sortBy")) {
    const sortBy = searchParams.get("sortBy");
    switch (sortBy) {
      case "price-asc":
        filteredProducts.sort((a, b) => a.price - b.price);
        break;
      case "price-desc":
        filteredProducts.sort((a, b) => b.price - a.price);
        break;
      case "rating":
        filteredProducts.sort((a, b) => b.rating - a.rating);
        break;
      case "newest":
        // Assuming we had a dateAdded field, we'd sort by that
        break;
    }
  }

  // Simulate network delay
  await new Promise((resolve) => setTimeout(resolve, 500));

  return NextResponse.json(filteredProducts);
}
