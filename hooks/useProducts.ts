import { useState, useEffect } from "react";
import { Product, ProductFilters, CategoryInfo } from "@/types/shop";

interface ProductsResponse {
  products: Product[];
  pagination: {
    total: number;
    pages: number;
    currentPage: number;
    limit: number;
  };
}

export function useProducts(filters?: ProductFilters) {
  const [products, setProducts] = useState<Product[]>([]);
  const [pagination, setPagination] =
    useState<ProductsResponse["pagination"]>();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        setLoading(true);
        const response = await fetch(
          "/api/products?" +
            new URLSearchParams({
              ...(filters?.searchQuery && { searchQuery: filters.searchQuery }),
              ...(filters?.category && { category: filters.category }),
              ...(filters?.subCategory && { subCategory: filters.subCategory }),
              ...(filters?.priceRange && {
                minPrice: filters.priceRange.min.toString(),
                maxPrice: filters.priceRange.max.toString(),
              }),
              ...(filters?.inStock !== undefined && {
                inStock: filters.inStock.toString(),
              }),
              ...(filters?.sortBy && { sortBy: filters.sortBy }),
              ...(filters?.page && { page: filters.page.toString() }),
              limit: "12",
            })
        );

        if (!response.ok) throw new Error("Failed to fetch products");

        const data: ProductsResponse = await response.json();
        setProducts(data.products);
        setPagination(data.pagination);
        setError(null);
      } catch (err) {
        setError(err instanceof Error ? err.message : "An error occurred");
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, [filters]);

  return { products, pagination, loading, error };
}

export function useProduct(id: string) {
  const [product, setProduct] = useState<Product | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        setLoading(true);
        const response = await fetch(`/api/products/${id}`);
        if (!response.ok) throw new Error("Failed to fetch product");

        const data = await response.json();
        setProduct(data);
        setError(null);
      } catch (err) {
        setError(err instanceof Error ? err.message : "An error occurred");
      } finally {
        setLoading(false);
      }
    };

    if (id) fetchProduct();
  }, [id]);

  return { product, loading, error };
}

export function useCategories() {
  const [categories, setCategories] = useState<Record<string, CategoryInfo>>(
    {}
  );
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        setLoading(true);
        const response = await fetch("/api/categories");
        if (!response.ok) throw new Error("Failed to fetch categories");

        const data = await response.json();
        setCategories(data);
        setError(null);
      } catch (err) {
        setError(err instanceof Error ? err.message : "An error occurred");
      } finally {
        setLoading(false);
      }
    };

    fetchCategories();
  }, []);

  return { categories, loading, error };
}
