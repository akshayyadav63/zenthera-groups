import React from 'react';
import { Mail, Phone, MapPin, Clock, Globe } from 'lucide-react';
import SEO from '../components/SEO';

const offices = [
  {
    city: "Visakhapatnam",
    region: "Asia Pacific HQ",
    address: ["11th Floor, Millennium IT Towers,", "Rushikonda, Visakhapatnam – 530048"],
    phone: "+91 08069754754"
  },
  {
    city: "Houston",
    region: "Global Operations",
    address: ["2800 Post Oak Blvd", "Houston, TX 77056, USA"],
    phone: "+1 (713) 555-0199"
  },
  {
    city: "London",
    region: "Europe & Africa",
    address: ["1 Canada Square", "London E14 5AB, UK"],
    phone: "+44 20 7123 4567"
  },
  {
    city: "Dubai",
    region: "Middle East",
    address: ["Business Bay, Tower B", "Dubai, UAE"],
    phone: "+971 4 321 4321"
  }
];

const Contact: React.FC = () => {
  return (
    <div className="pt-16 sm:pt-20 md:pt-24 min-h-screen bg-white">
      <SEO 
        title="Contact Us" 
        description="Get in touch with Zenthera Groups for project inquiries, partnerships, or general information. Offices in Visakhapatnam, Houston, London, and Dubai." 
      />
      
      {/* Header Section */}
      <div className="bg-zenthera-dark text-white py-12 sm:py-16 md:py-20 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <span className="text-zenthera-gold text-xs sm:text-sm uppercase tracking-widest font-bold mb-3 sm:mb-4 block">
            Get in Touch
          </span>
          <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl mb-4 sm:mb-6">
            Start Your Project
          </h1>
          <p className="text-gray-300 max-w-2xl mx-auto text-sm sm:text-base md:text-lg px-4">
            Connect with our engineering teams worldwide.
          </p>
        </div>
      </div>

      {/* Main Contact Section - Two Column Layout */}
      <div className="flex flex-col lg:flex-row min-h-screen">
        {/* Left Sidebar - Contact Information */}
        <div className="w-full lg:w-2/5 bg-zenthera-light p-6 sm:p-8 lg:p-12 border-r border-gray-200">
          <div className="max-w-lg mx-auto lg:mx-0">
            <h2 className="font-serif text-2xl sm:text-3xl lg:text-4xl mb-4 sm:mb-6 text-zenthera-dark">
              General Inquiries
            </h2>
            <p className="text-gray-600 text-sm sm:text-base lg:text-lg mb-8 sm:mb-10 lg:mb-12 leading-relaxed">
              For general questions, tender opportunities, or partnership requests, please contact our central desk or fill out the form. Our team typically responds within 24 hours.
            </p>

          {/* Phone Section */}
<div className="mb-8 sm:mb-10 lg:mb-12">
  <div className="flex items-start gap-4 sm:gap-6 group">
    <div className="bg-white p-3 sm:p-4 rounded-full group-hover:bg-zenthera-gold transition-colors duration-300 flex-shrink-0">
      <Phone size={20} className="sm:w-6 sm:h-6 text-zenthera-dark group-hover:text-white transition-colors" />
    </div>
    <div>
      <h3 className="text-xs uppercase tracking-wider text-gray-500 mb-2 sm:mb-3 font-bold">
        CENTRAL PHONE
      </h3>
      
        href="tel:+08069754754"
        className="text-lg sm:text-xl lg:text-2xl font-serif text-zenthera-dark hover:text-zenthera-gold transition-colors block mb-1 sm:mb-2 break-all"
      >
        08069754754
      </a>
      
        href="tel:+08062366936"
        className="text-lg sm:text-xl lg:text-2xl font-serif text-zenthera-dark hover:text-zenthera-gold transition-colors block mb-1 sm:mb-2 break-all"
      >
        08062366936
      </a>
      <p className="text-xs sm:text-sm text-gray-600">Mon-Fri, 9am - 6pm EST</p>
    </div>
  </div>
</div>

            {/* Email Directory */}
            <div className="mb-8 sm:mb-10 lg:mb-12">
              <div className="flex items-start gap-4 sm:gap-6 group">
                <div className="bg-white p-3 sm:p-4 rounded-full group-hover:bg-zenthera-gold transition-colors duration-300 flex-shrink-0">
                  <Mail size={20} className="sm:w-6 sm:h-6 text-zenthera-dark group-hover:text-white transition-colors" />
                </div>
                <div className="w-full min-w-0">
                  <h3 className="text-xs uppercase tracking-wider text-gray-500 mb-3 sm:mb-4 font-bold">
                    EMAIL DIRECTORY
                  </h3>
                  
                  {/* Careers & HR */}
                  <div className="mb-4">
                    <p className="text-xs uppercase tracking-wider text-zenthera-gold font-bold mb-2">
                      CAREERS @ HR
                    </p>
                    <div className="space-y-1">
                      <a href="mailto:jobs@zentheragroups.com" className="text-xs sm:text-sm text-zenthera-dark hover:text-zenthera-gold block break-all transition-colors">
                        jobs@zentheragroups.com
                      </a>
                      <a href="mailto:careers@zentheragroups.com" className="text-xs sm:text-sm text-zenthera-dark hover:text-zenthera-gold block break-all transition-colors">
                        careers@zentheragroups.com
                      </a>
                      <a href="mailto:hr@zentheragroups.com" className="text-xs sm:text-sm text-zenthera-dark hover:text-zenthera-gold block break-all transition-colors">
                        hr@zentheragroups.com
                      </a>
                      <a href="mailto:recruitment@zentheragroups.com" className="text-xs sm:text-sm text-zenthera-dark hover:text-zenthera-gold block break-all transition-colors">
                        recruitment@zentheragroups.com
                      </a>
                    </div>
                  </div>

                  {/* General & Operations */}
                  <div className="mb-4">
                    <p className="text-xs uppercase tracking-wider text-zenthera-gold font-bold mb-2">
                      GENERAL @ OPERATIONS
                    </p>
                    <div className="space-y-1">
                      <a href="mailto:Info@zentheragroups.com" className="text-xs sm:text-sm text-zenthera-dark hover:text-zenthera-gold block break-all transition-colors">
                        Info@zentheragroups.com
                      </a>
                      <a href="mailto:operations@zentheragroups.com" className="text-xs sm:text-sm text-zenthera-dark hover:text-zenthera-gold block break-all transition-colors">
                        operations@zentheragroups.com
                      </a>
                    </div>
                  </div>

                  {/* Support & Grievance */}
                  <div>
                    <p className="text-xs uppercase tracking-wider text-zenthera-gold font-bold mb-2">
                      SUPPORT @ GRIEVANCE
                    </p>
                    <div className="space-y-1">
                      <a href="mailto:support@zentheragroups.com" className="text-xs sm:text-sm text-zenthera-dark hover:text-zenthera-gold block break-all transition-colors">
                        support@zentheragroups.com
                      </a>
                      <a href="mailto:grievance@zentheragroups.com" className="text-xs sm:text-sm text-zenthera-dark hover:text-zenthera-gold block break-all transition-colors">
                        grievance@zentheragroups.com
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Business Hours */}
            <div className="mb-8 sm:mb-10 lg:mb-12">
              <div className="flex items-start gap-4 sm:gap-6 group">
                <div className="bg-white p-3 sm:p-4 rounded-full group-hover:bg-zenthera-gold transition-colors duration-300 flex-shrink-0">
                  <Clock size={20} className="sm:w-6 sm:h-6 text-zenthera-dark group-hover:text-white transition-colors" />
                </div>
                <div>
                  <h3 className="text-xs uppercase tracking-wider text-gray-500 mb-2 sm:mb-3 font-bold">
                    BUSINESS HOURS
                  </h3>
                  <p className="text-sm sm:text-base text-gray-600 mb-1">
                    Mon - Fri: 09:00 - 18:00
                  </p>
                  <p className="text-xs sm:text-sm text-gray-500">(Local Time)</p>
                </div>
              </div>
            </div>

            {/* Headquarters */}
            <div>
              <div className="flex items-start gap-4 sm:gap-6 group">
                <div className="bg-white p-3 sm:p-4 rounded-full group-hover:bg-zenthera-gold transition-colors duration-300 flex-shrink-0">
                  <MapPin size={20} className="sm:w-6 sm:h-6 text-zenthera-dark group-hover:text-white transition-colors" />
                </div>
                <div>
                  <h3 className="text-xs uppercase tracking-wider text-gray-500 mb-2 sm:mb-3 font-bold">
                    HEADQUARTERS
                  </h3>
                  <p className="text-sm sm:text-base text-zenthera-dark leading-relaxed">
                    11th Floor, Millennium IT Towers<br />
                    Rushikonda<br />
                    Visakhapatnam – 530048
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Right Section - Contact Form */}
        <div className="w-full lg:w-3/5 p-6 sm:p-8 lg:p-12 bg-white">
          <div className="max-w-2xl mx-auto lg:mx-0">
            <h2 className="font-serif text-2xl sm:text-3xl lg:text-4xl text-zenthera-dark mb-3 sm:mb-4">
              Send us a message
            </h2>
            <p className="text-sm sm:text-base text-gray-600 mb-8 sm:mb-10 lg:mb-12">
              We'd love to hear from you. Fill out the form below and we'll get back to you shortly.
            </p>

            <form className="space-y-6">
              {/* Name Fields */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
                <div>
                  <label htmlFor="firstName" className="block text-xs uppercase tracking-widest font-bold text-gray-500 mb-2">
                    FIRST NAME
                  </label>
                  <input
                    type="text"
                    id="firstName"
                    placeholder="John"
                    className="w-full bg-gray-50 px-0 py-3 sm:py-4 border-0 border-b-2 border-gray-200 focus:border-zenthera-gold focus:ring-0 focus:outline-none text-sm sm:text-base text-zenthera-dark placeholder-gray-400 transition-colors"
                  />
                </div>

                <div>
                  <label htmlFor="lastName" className="block text-xs uppercase tracking-widest font-bold text-gray-500 mb-2">
                    LAST NAME
                  </label>
                  <input
                    type="text"
                    id="lastName"
                    placeholder="Doe"
                    className="w-full bg-gray-50 px-0 py-3 sm:py-4 border-0 border-b-2 border-gray-200 focus:border-zenthera-gold focus:ring-0 focus:outline-none text-sm sm:text-base text-zenthera-dark placeholder-gray-400 transition-colors"
                  />
                </div>
              </div>

              {/* Email */}
              <div>
                <label htmlFor="email" className="block text-xs uppercase tracking-widest font-bold text-gray-500 mb-2">
                  EMAIL ADDRESS
                </label>
                <input
                  type="email"
                  id="email"
                  placeholder="john@company.com"
                  className="w-full bg-gray-50 px-0 py-3 sm:py-4 border-0 border-b-2 border-gray-200 focus:border-zenthera-gold focus:ring-0 focus:outline-none text-sm sm:text-base text-zenthera-dark placeholder-gray-400 transition-colors"
                />
              </div>

              {/* Department Dropdown */}
              <div>
                <label htmlFor="department" className="block text-xs uppercase tracking-widest font-bold text-gray-500 mb-2">
                  DEPARTMENT
                </label>
                <select
                  id="department"
                  className="w-full bg-gray-50 px-0 py-3 sm:py-4 border-0 border-b-2 border-gray-200 focus:border-zenthera-gold focus:ring-0 focus:outline-none text-sm sm:text-base text-gray-600 transition-colors appearance-none cursor-pointer"
                >
                  <option value="">Support & Grievances</option>
                  <option value="careers">Careers & HR</option>
                  <option value="operations">General & Operations</option>
                  <option value="support">Support & Grievance</option>
                  <option value="other">Other</option>
                </select>
              </div>

              {/* Message */}
              <div>
                <label htmlFor="message" className="block text-xs uppercase tracking-widest font-bold text-gray-500 mb-2">
                  YOUR MESSAGE
                  <span className="float-right text-gray-400 normal-case font-normal text-xs">0/2000 words left</span>
                </label>
                <textarea
                  id="message"
                  rows={6}
                  placeholder="Tell us about your project requirements..."
                  className="w-full bg-gray-50 px-0 py-3 sm:py-4 border-0 border-b-2 border-gray-200 focus:border-zenthera-gold focus:ring-0 focus:outline-none text-sm sm:text-base text-zenthera-dark placeholder-gray-400 resize-none transition-colors"
                />
              </div>

              {/* Submit Button */}
              <div className="pt-4">
                <button
                  type="submit"
                  className="w-full sm:w-auto inline-flex items-center justify-center px-8 sm:px-10 lg:px-12 py-3 sm:py-4 bg-zenthera-dark text-white text-xs sm:text-sm uppercase tracking-widest font-bold hover:bg-zenthera-gold transition-all duration-300 group"
                >
                  SUBMIT INQUIRY
                  <svg 
                    className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" 
                    fill="none" 
                    viewBox="0 0 24 24" 
                    stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>

      {/* Global Offices Section */}
      <div className="bg-zenthera-light py-12 sm:py-16 md:py-20 lg:py-24 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-10 sm:mb-12 lg:mb-16">
            <Globe size={28} className="sm:w-8 sm:h-8 mx-auto text-zenthera-gold mb-3 sm:mb-4" />
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl mb-3 sm:mb-4 text-zenthera-dark">
              Global Footprint
            </h2>
            <p className="text-sm sm:text-base lg:text-lg text-gray-600 max-w-2xl mx-auto px-4">
              Strategically located to serve major energy hubs worldwide.
            </p>
          </div>

          {/* Office Cards Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            {offices.map((office, idx) => (
              <div
                key={idx}
                className="bg-white p-6 sm:p-8 border-t-4 border-zenthera-gold hover:-translate-y-2 transition-all duration-300 shadow-sm hover:shadow-lg"
              >
                <h3 className="font-serif text-xl sm:text-2xl mb-1 text-zenthera-dark">
                  {office.city}
                </h3>
                <span className="text-xs font-bold text-gray-400 uppercase tracking-widest block mb-4 sm:mb-6">
                  {office.region}
                </span>

                <div className="space-y-3 sm:space-y-4">
                  {/* Address */}
                  <div className="flex gap-3">
                    <MapPin size={16} className="text-zenthera-gold shrink-0 mt-1" />
                    <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
                      {office.address.map((line, i) => (
                        <span key={i} className="block">{line}</span>
                      ))}
                    </p>
                  </div>

                  {/* Phone */}
                  {office.phone && (
                    <div className="flex gap-3 items-center">
                      <Phone size={16} className="text-zenthera-gold shrink-0" />
                      <a
                        href={`tel:${office.phone.replace(/\s/g, '')}`}
                        className="text-xs sm:text-sm text-gray-600 hover:text-zenthera-gold transition-colors break-all"
                      >
                        {office.phone}
                      </a>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
