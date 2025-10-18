export default function Testimonials() {
  return (
    <section className="bg-gray-100 py-16 px-6 text-center">
      <h2 className="text-3xl font-bold mb-6 text-amber-700">What Our Customers Say</h2>
      <p className="max-w-2xl mx-auto mb-10 text-gray-600">
        See why homeowners across Middle Georgia trust Inside N Out Renovations.
      </p>
      <div className="flex flex-wrap justify-center gap-6">
        <a
          href="https://www.google.com/maps/search/?api=1&query=Inside+N+Out+Renovations"
          target="_blank"
          className="bg-white shadow-md rounded-xl p-6 w-64 hover:shadow-lg transition"
        >
          <p className="text-black italic">“Professional, friendly, and the work was top-notch!”</p>
          <p className="text-sm mt-3 font-semibold text-amber-700">– Google Review</p>
        </a>
        <a
          href="https://www.facebook.com/InsideNOutRenovations/reviews"
          target="_blank"
          className="bg-white shadow-md rounded-xl p-6 w-64 hover:shadow-lg transition"
        >
          <p className="text-black italic">“They made my kitchen remodel easy from start to finish.”</p>
          <p className="text-sm mt-3 font-semibold text-amber-700">– Facebook Review</p>
        </a>
      </div>
    </section>
  );
}
