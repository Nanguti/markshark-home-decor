"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Navbar from "@/components/Navbar";
import { useProducts } from "@/hooks/useProducts";
import Link from "next/link";
import Image from "next/image";

const fadeIn = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 },
};

const HomePage = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const { products, loading } = useProducts();

  // Get top 6 products sorted by rating
  const topProducts = products.sort((a, b) => b.rating - a.rating).slice(0, 6);

  const collections = [
    {
      title: "Modern Minimalist",
      image: "/images/featured-collections/featured-1.jpg",
      description: "Clean lines and purposeful spaces",
    },
    {
      title: "Scandinavian",
      image: "/images/featured-collections/featured-2.jpg",
      description: "Light, airy, and functional design",
    },
    {
      title: "Industrial Chic",
      image: "/images/featured-collections/featured-3.jpg",
      description: "Raw materials meet refined style",
    },
    {
      title: "Bohemian Living",
      image: "/images/featured-collections/featured-4.jpg",
      description: "Free-spirited and eclectic spaces",
    },
  ];

  const testimonials = [
    {
      name: "Sarah Johnson",
      text: "Transformed our space beyond expectations. The attention to detail was remarkable.",
    },
    {
      name: "Michael Chen",
      text: "Professional, creative, and truly understood our vision. Highly recommended!",
    },
    {
      name: "Emma Williams",
      text: "The perfect blend of functionality and style. Our home feels completely renewed.",
    },
  ];

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
      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="h-screen flex items-center justify-center relative overflow-hidden"
      >
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="absolute inset-0 z-0"
        >
          <Image
            src="/images/hero-1.jpg"
            alt="Hero background"
            fill
            className="object-cover"
            priority
          />
        </motion.div>
        <div className="absolute inset-0 bg-black/40" />
        <div className="relative z-10 text-center text-white">
          <motion.h1
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-5xl md:text-7xl font-bold mb-6"
          >
            Transform Your Space
          </motion.h1>
          <motion.p
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="text-xl md:text-2xl mb-8"
          >
            Where luxury meets comfort in every detail
          </motion.p>
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.6 }}
          >
            <Button
              size="lg"
              className="bg-white text-gray-900 hover:bg-gray-100"
            >
              Explore Collections
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </motion.div>
        </div>
      </motion.section>

      {/* Recent Projects Section */}
      <section className="py-20 px-4">
        <motion.div
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          variants={fadeIn}
          className="max-w-7xl mx-auto"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            Recent Projects
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Modern Apartment",
                location: "Nairobi CBD",
                image: "/images/projects/project-1.jpg",
                category: "Residential",
              },
              {
                title: "Luxury Office",
                location: "Westlands",
                image: "/images/projects/project-2.jpg",
                category: "Commercial",
              },
              {
                title: "Boutique Hotel",
                location: "Mombasa",
                image: "/images/projects/project-3.jpg",
                category: "Hospitality",
              },
            ].map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group cursor-pointer"
              >
                <div className="relative overflow-hidden rounded-lg">
                  <Image
                    src={project.image}
                    alt={project.title}
                    width={600}
                    height={400}
                    className="w-full h-72 object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div
                    className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity 
                  duration-300 flex flex-col justify-end p-6"
                  >
                    <h3 className="text-xl font-semibold text-white mb-1">
                      {project.title}
                    </h3>
                    <p className="text-white/80">{project.location}</p>
                    <span className="text-sm text-cyan-400 mt-2">
                      {project.category}
                    </span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
          <div className="text-center mt-12">
            <Button variant="outline" size="lg">
              View All Projects
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </motion.div>
      </section>

      {/* Design Process Section */}
      <section className="py-24 px-4 bg-gradient-to-br from-gray-50 to-white dark:from-gray-900 dark:to-gray-800">
        <motion.div
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          variants={fadeIn}
          className="max-w-7xl mx-auto"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">
            Our Design Process
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 relative">
            {[
              {
                step: "01",
                title: "Consultation",
                description:
                  "Understanding your vision, needs, and style preferences",
                icon: "💭",
              },
              {
                step: "02",
                title: "Concept Development",
                description:
                  "Creating detailed design concepts and mood boards",
                icon: "✏️",
              },
              {
                step: "03",
                title: "Implementation",
                description:
                  "Bringing designs to life with expert craftsmanship",
                icon: "��",
              },
              {
                step: "04",
                title: "Final Touches",
                description: "Perfecting every detail for a stunning result",
                icon: "✨",
              },
            ].map((process, index) => (
              <motion.div
                key={process.step}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.2,
                  ease: "easeOut",
                }}
                viewport={{ once: true }}
                className="relative"
              >
                <div className="group">
                  <div className="relative z-10">
                    <motion.div
                      whileHover={{ scale: 1.05 }}
                      transition={{ type: "spring", stiffness: 300 }}
                      className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-lg hover:shadow-xl 
                      transition-shadow duration-300 h-full border border-gray-100 dark:border-gray-700"
                    >
                      <div className="text-4xl mb-4">{process.icon}</div>
                      <div
                        className="absolute -top-4 -right-4 w-12 h-12 bg-cyan-700 rounded-full 
                      flex items-center justify-center text-white font-bold transform 
                      group-hover:rotate-12 transition-transform duration-300"
                      >
                        {process.step}
                      </div>
                      <h3 className="text-xl font-semibold mb-3 dark:text-white">
                        {process.title}
                      </h3>
                      <p className="text-gray-600 dark:text-gray-300">
                        {process.description}
                      </p>
                    </motion.div>
                  </div>
                </div>
                {index < 3 && (
                  <div
                    className="hidden md:block absolute top-1/2 left-full w-full 
                  transform -translate-y-1/2 -translate-x-1/2 pointer-events-none"
                  >
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: "100%" }}
                      transition={{ duration: 0.8, delay: index * 0.2 }}
                      viewport={{ once: true }}
                      className="h-0.5 bg-gradient-to-r from-cyan-700 to-cyan-500"
                    />
                  </div>
                )}
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            viewport={{ once: true }}
            className="text-center mt-16"
          >
            <Button
              size="lg"
              className="bg-cyan-700 hover:bg-cyan-800 text-white"
            >
              Start Your Design Journey
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </motion.div>
        </motion.div>
      </section>

      {/* Featured Products Section */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4 dark:text-white">
              Featured Products
            </h2>
            <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              Discover our most popular pieces that blend style, comfort, and
              functionality
            </p>
          </motion.div>

          {loading ? (
            <div className="text-center">Loading...</div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {topProducts.map((product, index) => (
                <Link href={`/shop/${product.id}`} key={product.id}>
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="group"
                  >
                    <Card className="overflow-hidden h-full">
                      <div className="relative">
                        <Image
                          src={product.images[0]}
                          alt={product.name}
                          width={400}
                          height={300}
                          className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-105"
                        />
                        {!product.inStock && (
                          <div className="absolute top-2 right-2 bg-red-500 text-white px-2 py-1 rounded text-sm">
                            Out of Stock
                          </div>
                        )}
                      </div>
                      <CardContent className="p-4">
                        <h3 className="text-lg font-semibold mb-2 dark:text-white">
                          {product.name}
                        </h3>
                        <div className="flex justify-between items-center mb-2">
                          <span className="text-xl font-bold text-cyan-700">
                            Ksh. {product.price.toLocaleString()}
                          </span>
                          <div className="flex items-center">
                            <Star className="h-4 w-4 text-yellow-400 fill-current" />
                            <span className="ml-1 text-sm text-gray-600 dark:text-gray-400">
                              {product.rating}
                            </span>
                          </div>
                        </div>
                        <Button
                          variant="outline"
                          className="w-full group-hover:bg-cyan-700 group-hover:text-white transition-colors duration-300"
                        >
                          View Details
                          <ArrowRight className="ml-2 h-4 w-4" />
                        </Button>
                      </CardContent>
                    </Card>
                  </motion.div>
                </Link>
              ))}
            </div>
          )}

          <div className="text-center mt-12">
            <Link href="/shop">
              <Button size="lg" variant="outline">
                View All Products
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Featured Collections */}
      <section className="py-20 px-4 bg-gray-50 dark:bg-gray-800">
        <motion.div
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          variants={fadeIn}
          className="max-w-7xl mx-auto"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            Featured Collections
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {collections.map((collection, index) => (
              <motion.div
                key={collection.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="overflow-hidden group">
                  <motion.img
                    src={collection.image}
                    alt={collection.title}
                    className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                  <CardContent className="p-4">
                    <h3 className="text-xl font-semibold mb-2">
                      {collection.title}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-300">
                      {collection.description}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* About Section */}
      <section className="py-20 px-4">
        <motion.div
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          variants={fadeIn}
          className="max-w-3xl mx-auto text-center"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-8">Our Approach</h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 mb-8">
            We believe that every space tells a story. Our design philosophy
            combines timeless elegance with contemporary innovation, creating
            environments that reflect your unique style and elevate your daily
            living experience.
          </p>
          <Button variant="outline" size="lg">
            Learn More About Us
          </Button>
        </motion.div>
      </section>

      {/* Testimonials */}
      <section className="py-20 px-4 bg-gray-50 dark:bg-gray-800">
        <div className="max-w-7xl mx-auto">
          <motion.h2
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={fadeIn}
            className="text-3xl md:text-4xl font-bold text-center mb-12"
          >
            Client Stories
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={testimonial.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="h-full">
                  <CardContent className="p-6">
                    <p className="text-gray-600 dark:text-gray-300 mb-4">
                      &ldquo;{testimonial.text}&rdquo;
                    </p>
                    <p className="font-semibold">{testimonial.name}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-20 px-4">
        <motion.div
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          variants={fadeIn}
          className="max-w-4xl mx-auto text-center"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-8">
            Ready to Transform Your Space?
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 mb-8">
            We&apos;d love to hear from you. Our friendly team is always here to
            chat about your ideas and bring them to life.
          </p>
          <Button
            size="lg"
            className="bg-cyan-700 hover:bg-cyan-800 text-white"
          >
            Book a Consultation
          </Button>
        </motion.div>
      </section>

      {/* Services Overview */}
      <section className="py-20 px-4 bg-gray-50 dark:bg-gray-800">
        <motion.div
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          variants={fadeIn}
          className="max-w-7xl mx-auto"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            Our Services
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Interior Design",
                description:
                  "Full-service interior design for residential and commercial spaces",
                icon: "🎨",
              },
              {
                title: "Space Planning",
                description: "Optimize your space for functionality and flow",
                icon: "",
              },
              {
                title: "Custom Furniture",
                description: "Bespoke furniture design and manufacturing",
                icon: "🪑",
              },
            ].map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group"
              >
                <Card className="h-full hover:shadow-lg transition-shadow duration-300">
                  <CardContent className="p-6 text-center">
                    <span className="text-4xl mb-4 block">{service.icon}</span>
                    <h3 className="text-xl font-semibold mb-2 dark:text-white">
                      {service.title}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-300 mb-4">
                      {service.description}
                    </p>
                    <Button
                      variant="outline"
                      className="group-hover:bg-cyan-700 group-hover:text-white"
                    >
                      Learn More
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>
    </div>
  );
};

export default HomePage;
