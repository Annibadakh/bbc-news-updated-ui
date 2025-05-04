import { FaFacebookF, FaTwitter, FaInstagram, FaTiktok, FaLinkedinIn, FaYoutube } from 'react-icons/fa';
import logo from '../assets/bbclogo.png'

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 py-10 px-6">
        <img className='h-10 mb-10' src={logo} alt="" />
      <div className="max-w-7xl mx-auto">
        {/* Top Section */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-sm mb-10">
          <div>
            <h4 className="text-white font-semibold mb-4">Explore</h4>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-white transition">News</a></li>
              <li><a href="#" className="hover:text-white transition">Sport</a></li>
              <li><a href="#" className="hover:text-white transition">Business</a></li>
              <li><a href="#" className="hover:text-white transition">Weather</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-white font-semibold mb-4">Entertainment</h4>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-white transition">Culture</a></li>
              <li><a href="#" className="hover:text-white transition">Arts</a></li>
              <li><a href="#" className="hover:text-white transition">BBC Shop</a></li>
              <li><a href="#" className="hover:text-white transition">BritBox</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-white font-semibold mb-4">Company</h4>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-white transition">About BBC</a></li>
              <li><a href="#" className="hover:text-white transition">Advertise</a></li>
              <li><a href="#" className="hover:text-white transition">Contact Support</a></li>
              <li><a href="#" className="hover:text-white transition">Terms & Privacy</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-white font-semibold mb-4">Language</h4>
            <select className="bg-gray-800 text-gray-200 w-full p-2 rounded">
              <option>English</option>
              <option>Hindi</option>
              <option>Spanish</option>
              <option>French</option>
            </select>
          </div>
        </div>

        {/* Social & Branding */}
        <div className="border-t border-gray-700 pt-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex space-x-4 text-lg">
            <a href="#"><FaFacebookF className="hover:text-white transition" /></a>
            <a href="#"><FaInstagram className="hover:text-white transition" /></a>
            <a href="#"><FaTiktok className="hover:text-white transition" /></a>
            <a href="#"><FaLinkedinIn className="hover:text-white transition" /></a>
            <a href="#"><FaYoutube className="hover:text-white transition" /></a>
          </div>

          <p className="text-sm text-gray-400 text-center md:text-left">
            © 2025 BBC. All rights reserved. <br className="md:hidden" />
            <span className="italic">BBC is not responsible for the content of external sites.</span>
          </p>
        </div>
      </div>
    </footer>
  );
}
