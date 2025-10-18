const services = [
  { title: "Home Repairs", desc: "Fixing floors, ceilings, walls, and everything in between." },
  { title: "Remodeling", desc: "Kitchen, bathroom, and full-home remodels with expert craftsmanship." },
  { title: "Window & Flooring", desc: "Installation and replacement done right the first time." },
  { title: "Decks & Outdoor", desc: "Custom decks, gazebos, and outdoor improvements." },
];

export default function ServicesPreview() {
  return (
    <section className="max-w-7xl mx-auto px-6 py-16 text-center">
      <h2 className="text-3xl font-bold mb-10 text-amber-700">Our Most Requested Services</h2>
      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
        {services.map((s) => (
          <div key={s.title} className="bg-white shadow-md rounded-xl p-6 hover:shadow-xl transition">
            <h3 className="font-semibold text-xl text-black mb-2">{s.title}</h3>
            <p className="text-gray-600">{s.desc}</p>
          </div>
        ))}
      </div>
      <a
        href="/services"
        className="inline-block mt-10 bg-amber-600 hover:bg-amber-700 text-white font-semibold py-3 px-8 rounded-full transition"
      >
        View All Services
      </a>
    </section>
  );
}
