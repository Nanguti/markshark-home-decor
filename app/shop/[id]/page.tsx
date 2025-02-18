"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Navbar from "@/components/Navbar";
import {
  Star,
  ArrowLeft,
  Truck,
  Package,
  Ruler,
  ShoppingCart,
} from "lucide-react";
import { useProduct } from "@/hooks/useProducts";
import Link from "next/link";
import Image from "next/image";

const ProductPage = ({ params }: { params: { id: string } }) => {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [selectedImage, setSelectedImage] = useState(0);
  const [quantity, setQuantity] = useState(1);

  // Unwrap params using React.use()
  const id = React.use(params).id;
  const { product, loading, error } = useProduct(id);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;
  if (!product) return <div>Product not found</div>;

  return (
    <div
      className={`min-h-screen ${
        isDarkMode ? "dark bg-gray-900 text-white" : "bg-white text-gray-900"
      }`}
    >
      <Navbar
        isDarkMode={isDarkMode}
        onThemeToggle={() => setIsDarkMode(!isDarkMode)}
      />

      <div className="max-w-7xl mx-auto px-4 py-12">
        {/* Back Button */}
        <Link href="/shop">
          <Button variant="ghost" className="mb-8">
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to Shop
          </Button>
        </Link>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Product Images */}
          <div className="space-y-4">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="relative aspect-square rounded-lg overflow-hidden"
            >
              <Image
                src={product.images[selectedImage]}
                alt={product.name}
                fill
                className="object-cover"
              />
            </motion.div>

            {/* Thumbnail Images */}
            <div className="flex gap-2 overflow-x-auto">
              {product.images.map((image, index) => (
                <button
                  key={image}
                  onClick={() => setSelectedImage(index)}
                  className={`relative w-20 h-20 rounded-lg overflow-hidden ${
                    selectedImage === index
                      ? "ring-2 ring-blue-500"
                      : "ring-1 ring-gray-200"
                  }`}
                >
                  <Image
                    src={image}
                    alt={`${product.name} view ${index + 1}`}
                    fill
                    className="object-cover"
                  />
                </button>
              ))}
            </div>
          </div>

          {/* Product Details */}
          <div>
            <div className="mb-6">
              <h1 className="text-3xl font-bold mb-2 dark:text-white">
                {product.name}
              </h1>
              <div className="flex items-center gap-4 mb-4">
                <span className="text-2xl font-bold text-cyan-700">
                  Ksh. {product.price.toLocaleString()}
                </span>
                <div className="flex items-center">
                  <Star className="h-5 w-5 text-yellow-400 fill-current" />
                  <span className="ml-1 text-gray-600 dark:text-gray-400">
                    {product.rating} ({product.reviews} reviews)
                  </span>
                </div>
              </div>
              <p className="text-gray-600 dark:text-gray-300">
                {product.description}
              </p>
            </div>

            {/* Features */}
            <div className="mb-6">
              <h2 className="text-xl font-semibold mb-4 dark:text-white">
                Features
              </h2>
              <ul className="space-y-2">
                {product.features.map((feature) => (
                  <li
                    key={feature}
                    className="flex items-center text-gray-600 dark:text-gray-300"
                  >
                    <span className="mr-2">•</span>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>

            {/* Dimensions if available */}
            {product.dimensions && (
              <div className="mb-6">
                <h2 className="text-xl font-semibold mb-4 dark:text-white">
                  Dimensions
                </h2>
                <div className="grid grid-cols-3 gap-4">
                  <div className="text-center p-4 bg-gray-50 dark:bg-gray-800 rounded-lg">
                    <div className="text-sm text-gray-500 dark:text-gray-400">
                      Width
                    </div>
                    <div className="font-medium dark:text-white">
                      {product.dimensions.width} {product.dimensions.unit}
                    </div>
                  </div>
                  <div className="text-center p-4 bg-gray-50 dark:bg-gray-800 rounded-lg">
                    <div className="text-sm text-gray-500 dark:text-gray-400">
                      Height
                    </div>
                    <div className="font-medium dark:text-white">
                      {product.dimensions.height} {product.dimensions.unit}
                    </div>
                  </div>
                  <div className="text-center p-4 bg-gray-50 dark:bg-gray-800 rounded-lg">
                    <div className="text-sm text-gray-500 dark:text-gray-400">
                      Depth
                    </div>
                    <div className="font-medium dark:text-white">
                      {product.dimensions.depth} {product.dimensions.unit}
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* Add to Cart Section */}
            <div className="pt-6 border-t border-gray-200 dark:border-gray-700">
              <div className="flex items-center gap-4 mb-4">
                <div className="flex items-center border border-gray-200 dark:border-gray-700 rounded">
                  <button
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                    className="px-3 py-2 border-r border-gray-200 dark:border-gray-700 hover:bg-gray-100 dark:hover:bg-gray-800"
                  >
                    -
                  </button>
                  <span className="px-4 py-2">{quantity}</span>
                  <button
                    onClick={() => setQuantity(quantity + 1)}
                    className="px-3 py-2 border-l border-gray-200 dark:border-gray-700 hover:bg-gray-100 dark:hover:bg-gray-800"
                  >
                    +
                  </button>
                </div>
                <Button
                  size="lg"
                  className="flex-1 bg-cyan-700 hover:bg-cyan-800 text-white"
                  disabled={!product.inStock}
                >
                  <ShoppingCart className="h-5 w-5 mr-2" />
                  Add to Cart
                </Button>
              </div>

              {/* Delivery Info */}
              <div className="space-y-2 text-sm text-gray-600 dark:text-gray-300">
                <div className="flex items-center gap-2">
                  <Truck className="h-4 w-4" />
                  <span>Free delivery on orders over Ksh. 100,000</span>
                </div>
                <div className="flex items-center gap-2">
                  <Package className="h-4 w-4" />
                  <span>Expected delivery: {product.leadTime}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductPage;
