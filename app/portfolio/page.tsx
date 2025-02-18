"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import Image from "next/image";

interface Project {
  id: string;
  title: string;
  category: string;
  description: string;
  images: string[];
  client: string;
  location: string;
  year: string;
  services: string[];
}

const projects: Project[] = [
  {
    id: "1",
    title: "Modern Minimalist Villa",
    category: "Residential",
    description:
      "A contemporary villa design emphasizing clean lines and natural light, creating a harmonious living space that blends indoor and outdoor elements.",
    images: [
      "/images/projects/project-1.jpg",
      "/images/projects/project-2.jpg",
      "/images/projects/project-3.jpg",
    ],
    client: "Private Client",
    location: "Karen, Nairobi",
    year: "2023",
    services: ["Interior Design", "Space Planning", "Furniture Selection"],
  },
  {
    id: "2",
    title: "Luxury Restaurant Interior",
    category: "Commercial",
    description:
      "An upscale dining establishment featuring rich textures, ambient lighting, and a sophisticated atmosphere that enhances the culinary experience.",
    images: [
      "/images/projects/project-2.jpg",
      "/images/projects/project-3.jpg",
      "/images/projects/project-4.jpg",
    ],
    client: "Fine Dining Co.",
    location: "Westlands, Nairobi",
    year: "2023",
    services: ["Interior Design", "Lighting Design", "Custom Furniture"],
  },
  // Add more projects as needed
];

const categories = [
  "All",
  "Residential",
  "Commercial",
  "Hospitality",
  "Office",
];

const Portfolio = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const filteredProjects = projects.filter(
    (project) =>
      selectedCategory === "All" || project.category === selectedCategory
  );

  return (
    <div className="min-h-screen py-20 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Hero Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Our Portfolio</h1>
          <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Explore our collection of thoughtfully designed spaces that reflect
            our commitment to excellence and innovation in interior design.
          </p>
        </motion.div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <Button
              key={category}
              variant={selectedCategory === category ? "default" : "outline"}
              onClick={() => setSelectedCategory(category)}
              className={`${
                selectedCategory === category
                  ? "bg-cyan-700 hover:bg-cyan-800"
                  : ""
              }`}
            >
              {category}
            </Button>
          ))}
        </div>

        {/* Projects Grid */}
        <motion.div
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {filteredProjects.map((project) => (
            <motion.div
              key={project.id}
              layout
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="group cursor-pointer"
              onClick={() => setSelectedProject(project)}
            >
              <div className="relative overflow-hidden rounded-lg">
                <Image
                  src={project.images[0]}
                  alt={project.title}
                  width={600}
                  height={400}
                  className="w-full h-72 object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                  <h3 className="text-xl font-semibold text-white mb-2">
                    {project.title}
                  </h3>
                  <p className="text-white/80 mb-2">{project.location}</p>
                  <span className="text-sm text-cyan-400">
                    {project.category}
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Project Modal */}
        {selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="fixed inset-0 bg-black/80 z-50 overflow-y-auto"
            onClick={() => setSelectedProject(null)}
          >
            <div className="min-h-screen flex items-center justify-center p-4">
              <motion.div
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                className="bg-white dark:bg-gray-800 rounded-lg max-w-4xl w-full p-6"
                onClick={(e) => e.stopPropagation()}
              >
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div>
                    <Image
                      src={selectedProject.images[0]}
                      alt={selectedProject.title}
                      width={600}
                      height={400}
                      className="w-full h-72 object-cover rounded-lg"
                    />
                    <div className="grid grid-cols-3 gap-2 mt-2">
                      {selectedProject.images.slice(1).map((image, index) => (
                        <Image
                          key={index}
                          src={image}
                          alt={`${selectedProject.title} ${index + 2}`}
                          width={200}
                          height={150}
                          className="w-full h-24 object-cover rounded-lg"
                        />
                      ))}
                    </div>
                  </div>
                  <div>
                    <h2 className="text-2xl font-bold mb-4">
                      {selectedProject.title}
                    </h2>
                    <p className="text-gray-600 dark:text-gray-300 mb-6">
                      {selectedProject.description}
                    </p>
                    <div className="space-y-4">
                      <div>
                        <h3 className="font-semibold mb-2">Project Details</h3>
                        <div className="grid grid-cols-2 gap-4">
                          <div>
                            <p className="text-sm text-gray-500">Client</p>
                            <p>{selectedProject.client}</p>
                          </div>
                          <div>
                            <p className="text-sm text-gray-500">Location</p>
                            <p>{selectedProject.location}</p>
                          </div>
                          <div>
                            <p className="text-sm text-gray-500">Year</p>
                            <p>{selectedProject.year}</p>
                          </div>
                          <div>
                            <p className="text-sm text-gray-500">Category</p>
                            <p>{selectedProject.category}</p>
                          </div>
                        </div>
                      </div>
                      <div>
                        <h3 className="font-semibold mb-2">
                          Services Provided
                        </h3>
                        <div className="flex flex-wrap gap-2">
                          {selectedProject.services.map((service) => (
                            <span
                              key={service}
                              className="px-3 py-1 bg-gray-100 dark:bg-gray-700 rounded-full text-sm"
                            >
                              {service}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <Button
                  variant="ghost"
                  className="absolute top-4 right-4"
                  onClick={() => setSelectedProject(null)}
                >
                  ✕
                </Button>
              </motion.div>
            </div>
          </motion.div>
        )}
      </div>
    </div>
  );
};

export default Portfolio;
