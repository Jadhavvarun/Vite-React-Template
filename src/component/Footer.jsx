import { FaTwitter, FaInstagram, FaFacebook } from 'react-icons/fa';

export default function Footer() {
  return (
    <footer className="bg-primary p-4">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {/* Column 1: Social Media */}
          <div className="text-white">
            <h3 className="text-lg font-semibold mb-2">Follow Us</h3>
            <div className="flex space-x-4">
              <a href="#" className="text-blue-500 hover:text-blue-700"><FaTwitter size={24} /></a>
              <a href="#" className="text-pink-500 hover:text-pink-700"><FaInstagram size={24} /></a>
              <a href="#" className="text-blue-700 hover:text-blue-900"><FaFacebook size={24} /></a>
            </div>
          </div>

          {/* Column 2: Empty */}
          <div></div>

          {/* Column 3: Newsletter */}
          <div className="text-white">
            <h3 className="text-lg font-semibold mb-2">Subscribe to Newsletter</h3>
            <form>
              <input
                type="email"
                placeholder="Your Email"
                className="border border-gray-300 rounded-md p-2 w-full mb-2 outline-none"
              />
              <button
                type="submit"
                className="bg-white text-primary font-bold py-2 px-4 rounded"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>

        {/* Additional Footer Info */}
        <div className="mt-4 text-center">
          <p className="text-gray-600">Your Company &copy; 2024. All rights reserved.</p>
          <div className="mt-2">
            <a href="#" className="text-blue-500 hover:text-blue-700 mx-2">Privacy Policy</a>
            <a href="#" className="text-blue-500 hover:text-blue-700 mx-2">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
