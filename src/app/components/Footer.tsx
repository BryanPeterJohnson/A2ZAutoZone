import { Link } from "react-router";
import { Phone, Mail, MapPin, Globe, Clock } from "lucide-react";
import logo from "../../assets/logo2.png";

export function Footer() {
  const currentYear = new Date().getFullYear();

  const services = [
    "MOT Testing",
    "Mechanical Repairs",
    "Vehicle Diagnostics",
    "Brakes",
    "Clutches",
    "Servicing",
    "Tracking",
    "Cars & Vans",
  ];

  const quickLinks = [
    { path: "/", label: "Home" },
    { path: "/about", label: "About Us" },
    { path: "/services", label: "Services" },
    { path: "/book", label: "Book Appointment" },
    { path: "/contact", label: "Contact Us" },
  ];

  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Logo & Description */}
          <div>
            <img
              src={logo}
              alt="A2Z Autozone Logo"
              className="h-12 mb-4 brightness-0 invert"
            />
            <p className="text-gray-400 mb-4 text-sm sm:text-base">
              Trusted MOT & Vehicle Services in Slough. Certified testing facilities for all makes & models.
            </p>
            <div className="flex items-center gap-2 text-gray-400 text-sm sm:text-base">
              <Phone className="w-4 h-4" />
              <a href="tel:01753674649" className="hover:text-blue-400 transition-colors">
                01753 67 46 49
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm sm:text-base">
              {quickLinks.map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="text-gray-400 hover:text-blue-400 transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Our Services</h3>
            <ul className="space-y-2 text-sm sm:text-base">
              {services.map((service) => (
                <li key={service} className="text-gray-400">
                  {service}
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Info</h3>
            <div className="space-y-3 text-gray-400 text-sm sm:text-base">
              <div className="flex items-start gap-2">
                <MapPin className="w-5 h-5 mt-0.5 flex-shrink-0" />
                <span className="break-words">16A, Canada Road, Slough, Berks, SL1 1SE</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-5 h-5 flex-shrink-0" />
                <a href="tel:01753674649" className="hover:text-blue-400 transition-colors">
                  01753 67 46 49
                </a>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-5 h-5 flex-shrink-0" />
                <a href="mailto:a2zautozoneltd@gmail.com" className="hover:text-blue-400 transition-colors break-all">
                  a2zautozoneltd@gmail.com
                </a>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-5 h-5 flex-shrink-0" />
                <span>Mon – Sat: 09:00 AM – 06:00 PM</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400 text-sm sm:text-base">
          <p>© {currentYear} A2Z Autozone – All Rights Reserved</p>
        </div>
      </div>
    </footer>
  );
}
