"use client";

import React, { useState } from "react";
import Image from "next/image";

interface Project {
  title: string;
  category: string;
  images: string[];
}

const projects: Project[] = [
  { title: "Laundry Room Repair", category: "Flooring", images: ["/gallery/laundry1.jpg", "/gallery/laundry2.jpg"] },
  { title: "Kitchen Makeover", category: "Kitchen & Dining", images: ["/gallery/kitchen1.jpg", "/gallery/kitchen2.jpg"] },
  { title: "Pulaski County Ballfield", category: "Specialty / Commercial", images: ["/gallery/ballfield1.jpg"] },
  { title: "Luxury Swim Clubhouse", category: "Specialty / Commercial", images: ["/gallery/swimclub1.jpg"] },
  // Add more projects here with category and images
];

export default function GalleryPage() {
  const [selectedCategory, setSelectedCategory] = useState<string>("All");
  const [lightbox, setLightbox] = useState<string | null>(null);

  const filteredProjects = selectedCategory === "All" ? projects : projects.filter(p => p.category === selectedCategory);

  const categories = ["All", ...Array.from(new Set(projects.map(p => p.category)))];

  return (
    <div className="max-w-7xl mx-auto p-6">
      <h1 className="text-3xl font-bold text-center mb-8">Gallery</h1>

      {/* Filter Bar */}
      <div className="flex justify-center flex-wrap gap-4 mb-8">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setSelectedCategory(cat)}
            className={`py-2 px-4 rounded-full ${
              selectedCategory === cat ? "bg-blue-600 text-white" : "bg-gray-200 text-gray-700"
            } hover:bg-blue-500 hover:text-white transition`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Project Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredProjects.map((project, index) => (
          <div key={index} className="cursor-pointer" onClick={() => setLightbox(project.images[0])}>
            <div className="relative w-full h-64 rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition">
              <Image src={project.images[0]} alt={project.title} fill style={{ objectFit: "cover" }} />
            </div>
            <h2 className="mt-2 text-lg font-semibold text-center">{project.title}</h2>
          </div>
        ))}
      </div>

      {/* Lightbox */}
      {lightbox && (
        <div
          className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50"
          onClick={() => setLightbox(null)}
        >
          <Image src={lightbox} alt="Project Image" width={1200} height={800} className="rounded-xl" />
        </div>
      )}
    </div>
  );
}
