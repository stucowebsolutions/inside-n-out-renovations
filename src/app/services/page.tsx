"use client";

import React from "react";
import Link from "next/link";

const services = [
  { 
    title: "Flooring & Subfloor Work", 
    description: "Floor repair, new installations, joist repairs, water damage fixes.", 
    icon: "🪵", 
    galleryCategory: "Flooring" 
  },
  { 
    title: "Kitchen Renovations & Drop Zones", 
    description: "Kitchen makeovers, updates, and custom cabinetry.", 
    icon: "🍽️", 
    galleryCategory: "Kitchen & Dining" 
  },
  { 
    title: "Bathroom Remodeling & Upgrades", 
    description: "Full remodels, showers, and master bath renovations.", 
    icon: "🛁", 
    galleryCategory: "Bathrooms" 
  },
  { 
    title: "Full House Renovations & Multi-Additions", 
    description: "Multi-addition projects, complete remodels, and full house renovations.", 
    icon: "🏠", 
    galleryCategory: "Full House" 
  },
  { 
    title: "Decks, Porches & Outdoor Structures", 
    description: "Decks, porches, floating decks, and gazebos.", 
    icon: "🏗️", 
    galleryCategory: "Decks & Porches" 
  },
  { 
    title: "Custom Woodwork & Trim", 
    description: "Crown molding, shelving, and other custom carpentry.", 
    icon: "🛠️", 
    galleryCategory: "Custom Woodwork" 
  },
  { 
    title: "Windows & Doors", 
    description: "Window replacement and door installation.", 
    icon: "🪟", 
    galleryCategory: "Windows & Doors" 
  },
  { 
    title: "Lead & Hazard Removal", 
    description: "Certified removal of lead materials for safety compliance.", 
    icon: "⚠️", 
    galleryCategory: "Lead Removal" 
  },
  { 
    title: "Structural & Foundation Repairs", 
    description: "Foundation work, joist repairs, stair rebuilds, and garage repair.", 
    icon: "🏛️", 
    galleryCategory: "Structural" 
  },
  { 
    title: "Roofing & Weather Protection", 
    description: "Roof additions, storm damage repair, waterproofing.", 
    icon: "🌧️", 
    galleryCategory: "Roofing" 
  },
  { 
    title: "Specialty & Commercial Projects", 
    description: "Custom clubhouses, commercial renovations, and unique specialty builds.", 
    icon: "🏢", 
    galleryCategory: "Specialty / Commercial" 
  },
];

export default function ServicesPage() {
  return (
    <div className="max-w-7xl mx-auto p-6">
      <h1 className="text-3xl font-bold text-center mb-8">Our Services</h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {services.map((service, index) => (
          <div key={index} className="p-6 bg-white rounded-2xl shadow-md hover:shadow-xl transition">
            <div className="text-5xl mb-4 text-center">{service.icon}</div>
            <h2 className="text-xl font-semibold mb-2 text-black text-center">{service.title}</h2>
            <p className="text-gray-600 text-center mb-4">{service.description}</p>
            <div className="text-center">
              <Link
                href={`/gallery?category=${encodeURIComponent(service.galleryCategory)}`}
                className="inline-block bg-blue-600 text-white font-semibold py-2 px-4 rounded-xl hover:bg-blue-700 transition"
              >
                View Projects
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
