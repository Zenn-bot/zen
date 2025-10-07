import React from "react";
import { Mail, Phone, MapPin, Send } from "lucide-react";
function Contact() {
  return (
    <section className="py-16 px-6 bg-slate-700 min-h-screen flex items-center justify-center">
      <div className="max-w-5xl w-full bg-white rounded-2xl shadow-md p-8 md:p-12">
        {/* Header */}
        <h2 className="text-3xl md:text-4xl font-bold text-yellow-400 text-center mb-8">
          Contact Me
        </h2>
        <p className="text-center textyellow-400 mb-12 max-w-xl mx-auto">
          Feel free to reach out if you’d like to collaborate on a project,
          discuss opportunities, or just say hi!
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Contact Info */}
          <div className="space-y-6">
            <div className="flex items-center gap-4">
              <div className="p-3 bg-blue-100 text-blue-600 rounded-xl">
                <Mail size={24} />
              </div>
              <div>
                <p className="font-semibold">Email</p>
                <p className="text-slate-500">socheaseyha42@email.com</p>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <div className="p-3 bg-blue-100 text-blue-600 rounded-xl">
                <Phone size={24} />
              </div>
              <div>
                <p className="font-semibold">Phone</p>
                <p className="text-slate-500">+855 962 720 13</p>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <div className="p-3 bg-blue-100 text-blue-600 rounded-xl">
                <MapPin size={24} />
              </div>
              <div>
                <p className="font-semibold">Location</p>
                <p className="text-slate-500">Phnom Penh, Cambodia</p>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <form className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-1">
                Name
              </label>
              <input
                type="text"
                placeholder="Your name"
                className="w-full border border-slate-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-400"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-slate-700 mb-1">
                Email
              </label>
              <input
                type="email"
                placeholder="Your email"
                className="w-full border border-slate-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-400"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-slate-700 mb-1">
                Message
              </label>
              <textarea
                placeholder="Write your message..."
                rows="4"
                className="w-full border border-slate-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-400"
                required
              />
            </div>

            <button
              type="submit"
              className="flex items-center gap-2 bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-all duration-300"
            >
              <Send size={18} />
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
export default Contact;
