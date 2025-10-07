import { Link } from "lucide-react";
import React from "react";
import { FaFacebook, FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

function Footer() {
  return (
    <footer className="bg-slate-900 text-slate-300 py-10">
      <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* About Section */}
        <div>
          <h2 className="text-xl font-semibold text-white mb-3">
            Sochea Seyha
          </h2>
          <p className="text-sm text-slate-400 leading-relaxed">
            Frontend Developer passionate about creating modern and responsive
            websites using React.js and Tailwind CSS. Always learning and
            improving every day.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-3">Quick Links</h3>
          <ul className="space-y-2 text-sm">
            <li>
              <Link to={"/"} className="hover:text-blue-400 transition">
                Home
              </Link>
            </li>
            <li>
              <Link to={"/about"} className="hover:text-blue-400 transition">
                About
              </Link>
            </li>
            <li>
              <Link to={"/skills"} className="hover:text-blue-400 transition">
                Skills
              </Link>
            </li>
            <li>
              <Link to={"/contact"} className="hover:text-blue-400 transition">
                Contact
              </Link>
            </li>
          </ul>
        </div>

        {/* Social Links */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-3">Follow Me</h3>
          <div className="flex items-center gap-4 text-2xl">
            <a
              href="https://www.facebook.com/sochea.seyha.2025"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-blue-500 transition"
            >
              <FaFacebook />
            </a>
            <a
              href="https://github.com/socheaseyha-stack"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-gray-300 transition"
            >
              <FaGithub />
            </a>
            <a
              href="https://www.linkedin.com/feed/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-blue-400 transition"
            >
              <FaLinkedin />
            </a>
            <a
              href="mailto:yourname@email.com"
              className="hover:text-red-400 transition"
            >
              <FaEnvelope />
            </a>
          </div>
        </div>
      </div>

      {/* Bottom */}
      <div className="border-t border-slate-700 mt-10 pt-6 text-center text-sm text-slate-500">
        © {new Date().getFullYear()} Sochea Seyha. All rights reserved.
      </div>
    </footer>
  );
}
export default Footer;
