export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-100 mt-16 py-8">
      <div className="max-w-7xl mx-auto px-6 text-center space-y-4">
        <p className="text-lg font-semibold">Inside N Out Renovations</p>
        <p>Serving Houston, Peach, Bibb, Crawford, and Pulaski Counties</p>
        <p className="text-sm text-gray-400">
          © {new Date().getFullYear()} Inside N Out Renovations. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
