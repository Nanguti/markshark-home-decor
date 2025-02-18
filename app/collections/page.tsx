"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Navbar from "@/components/Navbar";
import { Search, ArrowRight } from "lucide-react";

const CollectionsPage = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");

  const categories = [
    "all",
    "modern",
    "scandinavian",
    "industrial",
    "minimalist",
    "bohemian",
  ];

  const collections = [
    {
      title: "Modern Elegance",
      category: "modern",
      image: "/images/featured-collections/featured-1.jpg",
      description: "Contemporary luxury with clean lines and bold statements",
      details: {
        space: "Living Room",
        area: "450 sq.ft",
        completion: "2024",
      },
    },
    {
      title: "Nordic Serenity",
      category: "scandinavian",
      image: "/images/featured-collections/featured-2.jpg",
      description:
        "Light-filled spaces with natural elements and minimal décor",
      details: {
        space: "Bedroom",
        area: "320 sq.ft",
        completion: "2023",
      },
    },
    {
      title: "Urban Loft",
      category: "industrial",
      image: "/images/featured-collections/featured-3.jpg",
      description: "Raw materials meet sophisticated design elements",
      details: {
        space: "Open Plan",
        area: "680 sq.ft",
        completion: "2024",
      },
    },
    {
      title: "Zen Minimalism",
      category: "minimalist",
      image: "/images/featured-collections/featured-4.jpg",
      description: "Purposeful simplicity creating calm and focused spaces",
      details: {
        space: "Study",
        area: "280 sq.ft",
        completion: "2023",
      },
    },
    {
      title: "Bohemian Dreams",
      category: "bohemian",
      image: "/images/featured-collections/featured-5.jpg",
      description: "Eclectic mix of patterns, textures, and cultural elements",
      details: {
        space: "Bedroom",
        area: "400 sq.ft",
        completion: "2024",
      },
    },
    // Add more collections as needed
  ];

  const filteredCollections = collections.filter((collection) => {
    const matchesCategory =
      selectedCategory === "all" || collection.category === selectedCategory;
    const matchesSearch =
      collection.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      collection.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

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

      {/* Hero Section */}
      <section className="relative h-[60vh] flex items-center justify-center">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="absolute inset-0 z-0"
          style={{
            backgroundImage: "url('/images/hero.jpg')",
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundAttachment: "fixed",
          }}
        />
        <div className="absolute inset-0 bg-black/50 z-10" />
        <div className="relative z-20 text-center text-white px-4">
          <motion.h1
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-5xl md:text-7xl font-bold mb-6"
          >
            Our Collections
          </motion.h1>
          <motion.p
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="text-xl md:text-2xl text-white/90 max-w-2xl mx-auto"
          >
            Discover our carefully curated selection of interior designs that
            define modern living
          </motion.p>
        </div>
      </section>

      {/* Filter Section */}
      <section className="py-12 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 mb-12">
            {/* Search Bar */}
            <div className="relative w-full md:w-72">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
              <input
                type="text"
                placeholder="Search collections..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-2 rounded-lg border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            {/* Category Filters */}
            <div className="flex flex-wrap gap-2 justify-center">
              {categories.map((category) => (
                <Button
                  key={category}
                  variant={
                    selectedCategory === category ? "default" : "outline"
                  }
                  onClick={() => setSelectedCategory(category)}
                  className="capitalize"
                >
                  {category}
                </Button>
              ))}
            </div>
          </div>

          {/* Collections Grid */}
          <motion.div
            layout
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            <AnimatePresence>
              {filteredCollections.map((collection, index) => (
                <motion.div
                  key={collection.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 20 }}
                  transition={{ delay: index * 0.1 }}
                  className="group"
                >
                  <Card className="overflow-hidden h-full">
                    <div className="relative">
                      <motion.img
                        src={collection.image}
                        alt={collection.title}
                        className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    </div>
                    <CardContent className="p-6">
                      <h3 className="text-2xl font-semibold mb-2 dark:text-white">
                        {collection.title}
                      </h3>
                      <p className="text-gray-600 dark:text-gray-300 mb-4">
                        {collection.description}
                      </p>
                      <div className="flex justify-between items-center text-sm text-gray-500 dark:text-gray-400 mb-4">
                        <span>{collection.details.space}</span>
                        <span>{collection.details.area}</span>
                        <span>{collection.details.completion}</span>
                      </div>
                      <Button
                        variant="outline"
                        className="w-full group-hover:bg-blue-600 group-hover:text-white transition-colors duration-300"
                      >
                        View Details
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Button>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default CollectionsPage;
