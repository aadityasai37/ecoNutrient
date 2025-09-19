export default function Footer() {
  return (
    <footer className="bg-black text-white py-12">
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">EcoNutrient</h3>
            <p className="text-gray-300">
              Connecting cultures through native Indian flavors. Bringing traditional, healthy foods to your table.
            </p>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><a href="/" className="text-gray-300 hover:text-white">Home</a></li>
              <li><a href="/about" className="text-gray-300 hover:text-white">About Us</a></li>
              <li><a href="/backstage" className="text-gray-300 hover:text-white">Backstage</a></li>
              <li><a href="/contact" className="text-gray-300 hover:text-white">Contact</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">Legal</h4>
            <ul className="space-y-2">
              <li><a href="/privacy" className="text-gray-300 hover:text-white">Privacy Policy</a></li>
              <li><a href="/terms" className="text-gray-300 hover:text-white">Terms of Service</a></li>
              <li><a href="/return-replacement" className="text-gray-300 hover:text-white">Returns & Replacements</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact Us</h4>
            <p className="text-gray-300 mb-2">Email: info@econutrient.com</p>
            <p className="text-gray-300 mb-2">Phone: +91 12345 67890</p>
            <p className="text-gray-300">Address: Mumbai, India</p>
          </div>
        </div>
        <div className="border-t border-gray-700 mt-8 pt-8 text-center">
          <p className="text-gray-300">&copy; 2024 EcoNutrient. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
