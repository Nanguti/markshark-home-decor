"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  Paintbrush,
  Building2,
  HomeIcon,
  Store,
  PenTool,
  Lightbulb,
  ArrowRight,
  CheckCircle2,
} from "lucide-react";

const Services = () => {
  const [hoveredService, setHoveredService] = useState<number | null>(null);

  const services = [
    {
      icon: HomeIcon,
      title: "Residential Design",
      description:
        "Transform your living spaces into personalized sanctuaries that reflect your lifestyle and aesthetic preferences.",
      features: [
        "Space Planning & Layout",
        "Color Consultation",
        "Furniture Selection",
        "Custom Solutions",
      ],
    },
    {
      icon: Store,
      title: "Commercial Design",
      description:
        "Create impactful commercial spaces that enhance productivity and leave lasting impressions on clients.",
      features: [
        "Office Space Planning",
        "Retail Design",
        "Restaurant Interiors",
        "Corporate Branding Integration",
      ],
    },
    {
      icon: Building2,
      title: "Architectural Services",
      description:
        "Comprehensive architectural solutions that blend form and function for both residential and commercial projects.",
      features: [
        "3D Visualization",
        "Construction Documents",
        "Project Management",
        "Permit Assistance",
      ],
    },
    {
      icon: PenTool,
      title: "Custom Furniture Design",
      description:
        "Bespoke furniture pieces designed to perfectly fit your space and complement your interior style.",
      features: [
        "Custom Cabinetry",
        "Built-in Solutions",
        "Material Selection",
        "Prototype Development",
      ],
    },
    {
      icon: Paintbrush,
      title: "Renovation & Remodeling",
      description:
        "Breathe new life into existing spaces with our comprehensive renovation and remodeling services.",
      features: [
        "Kitchen Remodeling",
        "Bathroom Renovation",
        "Space Optimization",
        "Structural Updates",
      ],
    },
    {
      icon: Lightbulb,
      title: "Consultation & Planning",
      description:
        "Expert guidance and planning services to help you make informed decisions about your space.",
      features: [
        "Design Strategy",
        "Budget Planning",
        "Timeline Development",
        "Material Selection",
      ],
    },
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="relative h-[50vh] flex items-center justify-center">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="absolute inset-0 z-0"
          style={{
            backgroundImage: "url('/images/2.jpg')",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />
        <div className="absolute inset-0 bg-black/50 z-10" />
        <div className="relative z-20 text-center text-white px-4 max-w-4xl mx-auto">
          <motion.h1
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-5xl md:text-7xl font-bold mb-6"
          >
            Our Services
          </motion.h1>
          <motion.p
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="text-xl md:text-2xl text-white/90"
          >
            Comprehensive design solutions tailored to your vision
          </motion.p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                onHoverStart={() => setHoveredService(index)}
                onHoverEnd={() => setHoveredService(null)}
                className="relative group"
              >
                <Card className="h-full overflow-hidden">
                  <CardContent className="p-6">
                    <div className="mb-6">
                      <service.icon className="h-12 w-12 text-cyan-700 mb-4" />
                      <h3 className="text-2xl font-semibold mb-3 dark:text-white">
                        {service.title}
                      </h3>
                      <p className="text-gray-600 dark:text-gray-300 mb-6">
                        {service.description}
                      </p>
                    </div>

                    <motion.div
                      animate={{
                        height: hoveredService === index ? "auto" : 0,
                        opacity: hoveredService === index ? 1 : 0,
                      }}
                      className="space-y-3 overflow-hidden"
                    >
                      {service.features.map((feature) => (
                        <div
                          key={feature}
                          className="flex items-center text-gray-600 dark:text-gray-300"
                        >
                          <CheckCircle2 className="h-5 w-5 text-cyan-700 mr-2" />
                          <span>{feature}</span>
                        </div>
                      ))}
                    </motion.div>

                    <motion.div
                      animate={{
                        opacity: hoveredService === index ? 0 : 1,
                      }}
                      className="absolute bottom-6 left-6 right-6"
                    >
                      <Button
                        variant="outline"
                        className="w-full group-hover:bg-cyan-600 group-hover:text-white transition-colors duration-300"
                      >
                        Learn More
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Button>
                    </motion.div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-gray-50 dark:bg-gray-800">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto text-center"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-6 dark:text-white">
            Ready to Transform Your Space?
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 mb-8">
            Let&apos;s bring your vision to life
          </p>
          <Button
            size="lg"
            className="bg-cyan-700 hover:bg-cyan-800 text-white"
          >
            Schedule a Consultation
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </motion.div>
      </section>
    </div>
  );
};

export default Services;
