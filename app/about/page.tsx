"use client";

import React, { useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Star, Users, Palette, Award, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Navbar from "@/components/Navbar";

const AboutPage = () => {
  // State definitions
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [hoveredTeamMember, setHoveredTeamMember] = useState<number | null>(
    null
  );

  // Scroll animations
  const { scrollYProgress } = useScroll();
  const parallaxY = useTransform(scrollYProgress, [0, 1], [0, -100]);
  const opacity = useTransform(
    scrollYProgress,
    [0, 0.2, 0.8, 1],
    [1, 1, 0.8, 0]
  );

  const achievements = [
    { number: "250+", label: "Projects Completed", icon: Star },
    { number: "15+", label: "Years Experience", icon: Award },
    { number: "180+", label: "Happy Clients", icon: Users },
    { number: "12", label: "Design Awards", icon: Palette },
  ];

  const team = [
    {
      name: "Alexandra Rivers",
      role: "Principal Designer",
      image: "/images/team/member-1.jpg",
      quote:
        "Design is not just what it looks like and feels like. Design is how it works.",
    },
    {
      name: "Marcus Chen",
      role: "Creative Director",
      image: "/images/team/member-2.jpg",
      quote:
        "Every space tells a unique story. Our job is to make it unforgettable.",
    },
    {
      name: "Isabella Santos",
      role: "Interior Architect",
      image: "/images/team/member-3.jpg",
      quote: "The details are not the details. They make the design.",
    },
  ];

  const timelineEvents = [
    {
      year: "2008",
      title: "Our Beginning",
      description:
        "Founded with a vision to transform spaces into extraordinary experiences.",
    },
    {
      year: "2012",
      title: "First Major Project",
      description: "Completed the landmark Renaissance Hotel renovation.",
    },
    {
      year: "2016",
      title: "International Expansion",
      description: "Opened our first international studio in Paris.",
    },
    {
      year: "2020",
      title: "Digital Innovation",
      description:
        "Launched virtual design consultations and 3D visualization services.",
    },
    {
      year: "2024",
      title: "Sustainability Focus",
      description: "Committed to 100% sustainable design practices.",
    },
  ];

  // const testimonials = [
  //   {
  //     name: "Sarah Johnson",
  //     text: "Transformed our space beyond expectations. The attention to detail was remarkable.",
  //   },
  //   {
  //     name: "Michael Chen",
  //     text: "Professional, creative, and truly understood our vision. Highly recommended!",
  //   },
  //   {
  //     name: "Emma Williams",
  //     text: "The perfect blend of functionality and style. Our home feels completely renewed.",
  //   },
  // ];

  return (
    <div
      className={`min-h-screen overflow-x-hidden ${
        isDarkMode ? "dark bg-gray-900 text-white" : "bg-white text-gray-900"
      }`}
    >
      <Navbar
        isDarkMode={isDarkMode}
        onThemeToggle={() => setIsDarkMode(!isDarkMode)}
      />

      {/* Hero Section with Parallax */}
      <motion.section
        className="relative h-screen flex items-center justify-center overflow-hidden"
        style={{
          backgroundImage: "url('/images/hero.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <motion.div
          className="absolute inset-0 bg-black/50"
          style={{ y: parallaxY, opacity }}
        />
        <div className="relative z-10 max-w-4xl mx-auto text-center px-4">
          <motion.h1
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="text-6xl md:text-7xl font-bold text-white mb-6"
          >
            Our Story
          </motion.h1>
          <motion.p
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl md:text-2xl text-white/90 mb-8"
          >
            Crafting Extraordinary Spaces Since 2008
          </motion.p>
        </div>
      </motion.section>

      {/* Vision Statement */}
      <section className="py-20 px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto text-center"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-8 dark:text-white">
            Our Vision
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 leading-relaxed">
            We believe in the transformative power of thoughtful design. Every
            space we create is a canvas where functionality meets artistry,
            where your dreams take shape, and where life is most precious
            moments unfold in perfect harmony.
          </p>
        </motion.div>
      </section>

      {/* Achievements Section */}
      <section className="py-20 px-4 bg-gray-50 dark:bg-gray-800">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {achievements.map((achievement, index) => (
              <motion.div
                key={achievement.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="text-center h-full bg-white/50 dark:bg-gray-900/50 backdrop-blur-lg">
                  <CardContent className="p-6">
                    <achievement.icon className="w-8 h-8 mx-auto mb-4 text-blue-600" />
                    <h3 className="text-4xl font-bold mb-2 dark:text-white">
                      {achievement.number}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-300">
                      {achievement.label}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-20 px-4 relative">
        <div className="max-w-6xl mx-auto">
          <motion.h2
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold text-center mb-16 dark:text-white"
          >
            Our Journey
          </motion.h2>

          {/* Timeline Line */}
          <div className="hidden md:block absolute left-1/2 top-[150px] bottom-20 w-0.5 bg-gray-200 dark:bg-gray-700 transform -translate-x-1/2" />

          {/* Timeline Events */}
          <div className="relative flex flex-col space-y-8">
            {timelineEvents.map((event, index) => (
              <motion.div
                key={event.year}
                initial={{
                  opacity: 0,
                  x: index % 2 === 0 ? -50 : 50,
                }}
                whileInView={{
                  opacity: 1,
                  x: 0,
                }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.1,
                }}
                className={`flex items-center justify-center md:justify-between w-full ${
                  index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                }`}
              >
                {/* Timeline Card */}
                <div
                  className={`w-full md:w-[45%] ${
                    index % 2 === 0 ? "md:text-right" : "md:text-left"
                  }`}
                >
                  <Card
                    className="relative bg-white/50 dark:bg-gray-900/50 backdrop-blur-lg hover:shadow-lg transition-shadow 
                  duration-300"
                  >
                    <CardContent className="p-6">
                      <span className="text-cyan-700 font-bold text-xl mb-2 block">
                        {event.year}
                      </span>
                      <h3 className="text-xl font-semibold mb-2 dark:text-white">
                        {event.title}
                      </h3>
                      <p className="text-gray-600 dark:text-gray-300">
                        {event.description}
                      </p>
                    </CardContent>
                  </Card>
                </div>

                {/* Timeline Dot */}
                <div className="hidden md:block w-4 h-4 bg-cyan-700 rounded-full absolute left-1/2 transform -translate-x-1/2" />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 px-4 bg-gray-50 dark:bg-gray-800">
        <div className="max-w-7xl mx-auto">
          <motion.h2
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold text-center mb-16 dark:text-white"
          >
            Meet Our Visionaries
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                onHoverStart={() => setHoveredTeamMember(index)}
                onHoverEnd={() => setHoveredTeamMember(null)}
                className="relative group"
              >
                <Card className="overflow-hidden">
                  <div className="relative">
                    <motion.img
                      src={member.image}
                      alt={member.name}
                      className="w-full h-96 object-cover"
                      whileHover={{ scale: 1.05 }}
                      transition={{ duration: 0.3 }}
                    />
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: hoveredTeamMember === index ? 1 : 0 }}
                      className="absolute inset-0 bg-black/60 flex items-center justify-center p-6"
                    >
                      <p className="text-white text-center text-lg italic">
                        &ldquo;{member.quote}&rdquo;
                      </p>
                    </motion.div>
                  </div>
                  <CardContent className="p-6 text-center">
                    <h3 className="text-xl font-semibold mb-1 dark:text-white">
                      {member.name}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-300">
                      {member.role}
                    </p>
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
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto text-center"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-8 dark:text-white">
            Let us Create Something Extraordinary
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 mb-8">
            Join us in crafting spaces that inspire, comfort, and delight.
          </p>
          <Button
            size="lg"
            className="bg-blue-600 hover:bg-blue-700 text-white"
          >
            Start Your Journey
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </motion.div>
      </section>
    </div>
  );
};

export default AboutPage;
