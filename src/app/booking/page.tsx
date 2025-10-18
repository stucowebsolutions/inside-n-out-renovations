"use client";

import { useState, useEffect } from "react";

export default function BookingPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    preferredDates: "",
    message: "",
  });
  const [status, setStatus] = useState("");
  const [showToast, setShowToast] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("Sending...");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (res.ok) {
        setStatus("✅ Success! Your booking request has been sent.");
        setFormData({
          name: "",
          email: "",
          phone: "",
          service: "",
          preferredDates: "",
          message: "",
        });
        setShowToast(true);
      } else {
        setStatus("❌ Failed to send. Please try again later.");
      }
    } catch (err) {
      console.error(err);
      setStatus("⚠️ Error sending form.");
    }
  };

  // Automatically hide toast after 4 seconds
  useEffect(() => {
    if (showToast) {
      const timer = setTimeout(() => setShowToast(false), 4000);
      return () => clearTimeout(timer);
    }
  }, [showToast]);

  return (
    <div className="max-w-2xl mx-auto p-8 bg-gray-100 rounded-2xl shadow-lg mt-12 text-gray-800">
      <h1 className="text-3xl font-bold mb-6 text-center text-gray-900">Request an Estimate</h1>

      <form onSubmit={handleSubmit} className="space-y-5">
        <div>
          <label htmlFor="name" className="block font-semibold mb-1">Name</label>
          <input
            name="name"
            id="name"
            placeholder="Your Name"
            value={formData.name}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white text-gray-900"
            required
          />
        </div>

        <div>
          <label htmlFor="email" className="block font-semibold mb-1">Email</label>
          <input
            name="email"
            id="email"
            type="email"
            placeholder="Your Email"
            value={formData.email}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white text-gray-900"
            required
          />
        </div>

        <div>
          <label htmlFor="phone" className="block font-semibold mb-1">Phone</label>
          <input
            name="phone"
            id="phone"
            type="tel"
            placeholder="Your Phone"
            value={formData.phone}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white text-gray-900"
            required
          />
        </div>

        <div>
          <label htmlFor="service" className="block font-semibold mb-1">Service Type</label>
          <input
            name="service"
            id="service"
            placeholder="e.g., Deck Repair, Kitchen Remodel"
            value={formData.service}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white text-gray-900"
          />
        </div>

        <div>
          <label htmlFor="preferredDates" className="block font-semibold mb-1">Preferred Dates/Times</label>
          <input
            name="preferredDates"
            id="preferredDates"
            placeholder="Enter a few date/time options"
            value={formData.preferredDates}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white text-gray-900"
          />
        </div>

        <div>
          <label htmlFor="message" className="block font-semibold mb-1">Additional Details</label>
          <textarea
            name="message"
            id="message"
            placeholder="Tell us about your project..."
            rows={4}
            value={formData.message}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white text-gray-900"
          />
        </div>

        <button
          type="submit"
          className="w-full bg-blue-600 text-white font-semibold py-3 rounded-lg hover:bg-blue-700 transition duration-200"
        >
          Submit Request
        </button>
      </form>

      {status && <p className="mt-4 text-center text-gray-700">{status}</p>}

      {/* ✅ Success Toast */}
      {showToast && (
        <div className="fixed bottom-6 right-6 bg-green-600 text-white px-5 py-3 rounded-lg shadow-md animate-fade-in">
          Form submitted successfully!
        </div>
      )}
    </div>
  );
}
