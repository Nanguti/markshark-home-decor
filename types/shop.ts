export interface Product {
  id: string;
  name: string;
  category: ProductCategory;
  subCategory: string;
  price: number;
  description: string;
  features: string[];
  images: string[];
  dimensions?: {
    width: number;
    height: number;
    depth: number;
    unit: "cm" | "in";
  };
  materials?: string[];
  inStock: boolean;
  leadTime: string;
  rating: number;
  reviews: number;
}

export type ProductCategory =
  | "furniture"
  | "decor"
  | "lighting"
  | "textiles"
  | "services";

export interface CategoryInfo {
  name: string;
  description: string;
  image: string;
  subCategories: string[];
}

export interface ProductFilters {
  category?: ProductCategory;
  subCategory?: string;
  priceRange?: {
    min: number;
    max: number;
  };
  inStock?: boolean;
  sortBy?: "price-asc" | "price-desc" | "rating" | "newest";
  searchQuery?: string;
  page?: number;
  limit?: number;
}
