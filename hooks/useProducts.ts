import { useState, useEffect } from "react";
import { Product, ProductFilters, CategoryInfo } from "@/types/shop";
import axios, { AxiosError } from "axios";

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
        const { data } = await axios.get<ProductsResponse>("/api/products", {
          params: {
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
          },
        });

        setProducts(data.products);
        setPagination(data.pagination);
        setError(null);
      } catch (err) {
        const error = err as AxiosError<{ message: string }>;
        setError(
          error.response?.data?.message ||
            error.message ||
            "Failed to fetch products"
        );
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
        const { data } = await axios.get<Product>(`/api/products/${id}`);
        setProduct(data);
        setError(null);
      } catch (err) {
        const error = err as AxiosError<{ message: string }>;
        setError(
          error.response?.data?.message ||
            error.message ||
            "Failed to fetch product"
        );
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
        const { data } = await axios.get<Record<string, CategoryInfo>>(
          "/api/categories"
        );
        setCategories(data);
        setError(null);
      } catch (err) {
        const error = err as AxiosError<{ message: string }>;
        setError(
          error.response?.data?.message ||
            error.message ||
            "Failed to fetch categories"
        );
      } finally {
        setLoading(false);
      }
    };

    fetchCategories();
  }, []);

  return { categories, loading, error };
}
