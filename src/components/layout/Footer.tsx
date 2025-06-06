import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-secondary py-12 text-white">
      <div className="container">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          {/* Company Info */}
          <div>
            <h3 className="mb-4 text-xl font-bold">Rhomboid-AI</h3>
            <p className="mb-4 text-gray-300">
              Shaping brand identities and designing thoughtful digital experiences to help
              businesses succeed in the digital world.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="mb-4 text-xl font-bold">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="#intro" className="text-gray-300 transition-colors hover:text-accent">
                  Home
                </Link>
              </li>
              <li>
                <Link href="#about" className="text-gray-300 transition-colors hover:text-accent">
                  About
                </Link>
              </li>
              <li>
                <Link
                  href="#services"
                  className="text-gray-300 transition-colors hover:text-accent"
                >
                  Services
                </Link>
              </li>
              <li>
                <Link href="#contact" className="text-gray-300 transition-colors hover:text-accent">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="mb-4 text-xl font-bold">Contact Us</h3>
            <ul className="space-y-2 text-gray-300">
              <li>Bengaluru, Karnataka</li>
              <li>
                <a
                  href="mailto:info@rhomboid-ai.com"
                  className="transition-colors hover:text-accent"
                >
                  info@rhomboid-ai.com
                </a>
              </li>
              <li>
                <a href="tel:+919876543210" className="transition-colors hover:text-accent">
                  +91 98765 43210
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-8 border-t border-gray-700 pt-8 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} Rhomboid-AI. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
