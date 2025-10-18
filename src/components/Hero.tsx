export default function Hero() {
  return (
    <section className="bg-[url('/hero-bg.jpg')] bg-cover bg-center text-white text-center py-24 px-6 relative">
      <div className="absolute inset-0 bg-black/60"></div>
      <div className="relative z-10 max-w-3xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          Quality Home Repairs and Renovations
        </h1>
        <p className="text-lg md:text-xl mb-6">
          Family-owned and operated with over 40 years of experience serving Middle Georgia.
        </p>
        <a
          href="/booking"
          className="bg-amber-600 hover:bg-amber-700 text-white font-semibold py-3 px-6 rounded-full transition"
        >
          Schedule an Estimate
        </a>
      </div>
    </section>
  );
}
