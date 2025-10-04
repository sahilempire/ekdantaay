'use client';

import { useState } from 'react';
import { Phone, MapPin, Clock, Mail, Calendar, User, MessageSquare } from 'lucide-react';

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    service: '',
    message: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically send the form data to your backend
    console.log('Form submitted:', formData);
    alert('Thank you for your inquiry! We will contact you soon.');
    setFormData({ name: '', phone: '', email: '', service: '', message: '' });
  };

  const services = [
    'Root Canal Treatment',
    'Dental Implants',
    'Braces & Aligners',
    'Cosmetic Dentistry',
    'Oral Hygiene',
    'Periodontology',
    'Dental Surgery',
    'Emergency Care'
  ];

  return (
    <section id="contact" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-dental-teal mb-4">
            Contact Us
          </h2>
          <p className="text-xl text-dental-darkGray max-w-3xl mx-auto">
            Get in touch with us for appointments, consultations, or any dental care needs. 
            We&apos;re here to help you achieve your perfect smile.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-8">
            {/* Clinic Details */}
            <div className="bg-gradient-to-br from-dental-cream to-white rounded-2xl p-8 shadow-lg border border-gray-100">
              <div className="flex items-center space-x-4 mb-6">
                <div className="w-12 h-12 bg-dental-orange rounded-full flex items-center justify-center">
                  <span className="text-white font-bold text-lg">ए</span>
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-dental-orange font-hindi">एकदंताय</h3>
                  <p className="text-gray-600 italic">Smile & Dental care</p>
                </div>
              </div>

              <div className="space-y-6">
                {/* Phone */}
                <div className="flex items-center space-x-4">
                  <div className="w-10 h-10 bg-dental-orange rounded-full flex items-center justify-center">
                    <Phone className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-dental-darkGray">Phone</h4>
                    <a href="tel:9587815285" className="text-dental-orange hover:underline">
                      9587815285
                    </a>
                  </div>
                </div>

                {/* Address */}
                <div className="flex items-start space-x-4">
                  <div className="w-10 h-10 bg-dental-orange rounded-full flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-dental-darkGray">Address</h4>
                    <p className="text-gray-700 text-sm">
                      8 जनता धर्मशाला, महिला थाने के पास<br />
                      सवाई माधोपुर (राजस्थान)
                    </p>
                  </div>
                </div>

                {/* OPD Timings */}
                <div className="flex items-start space-x-4">
                  <div className="w-10 h-10 bg-dental-orange rounded-full flex items-center justify-center flex-shrink-0">
                    <Clock className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-dental-darkGray">OPD Timings</h4>
                    <div className="text-gray-700 text-sm space-y-1">
                      <p>Regular Hours: 10:30am - 6:00pm</p>
                      <p>Monday & Thursday: Barwada visiting 10:30am - 2:30pm</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Quick Contact */}
            <div className="bg-dental-teal rounded-2xl p-8 text-white">
              <h3 className="text-2xl font-bold mb-6">Quick Contact</h3>
              <div className="space-y-4">
                <a
                  href="tel:9587815285"
                  className="flex items-center space-x-3 bg-white bg-opacity-20 rounded-lg p-4 hover:bg-opacity-30 transition-colors"
                >
                  <Phone className="w-5 h-5" />
                  <span>Call Now: 9587815285</span>
                </a>
                <a
                  href="https://wa.me/919587815285"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-3 bg-white bg-opacity-20 rounded-lg p-4 hover:bg-opacity-30 transition-colors"
                >
                  <MessageSquare className="w-5 h-5" />
                  <span>WhatsApp</span>
                </a>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-white rounded-2xl shadow-xl p-8 border border-gray-100">
            <h3 className="text-2xl font-bold text-dental-darkGray mb-6">Book Appointment</h3>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-dental-darkGray mb-2">
                    Full Name *
                  </label>
                  <div className="relative">
                    <User className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleInputChange}
                      className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-dental-orange focus:border-transparent"
                      placeholder="Your full name"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-dental-darkGray mb-2">
                    Phone Number *
                  </label>
                  <div className="relative">
                    <Phone className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      required
                      value={formData.phone}
                      onChange={handleInputChange}
                      className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-dental-orange focus:border-transparent"
                      placeholder="Your phone number"
                    />
                  </div>
                </div>
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-dental-darkGray mb-2">
                  Email Address
                </label>
                <div className="relative">
                  <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-dental-orange focus:border-transparent"
                    placeholder="your.email@example.com"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="service" className="block text-sm font-medium text-dental-darkGray mb-2">
                  Service Required
                </label>
                <select
                  id="service"
                  name="service"
                  value={formData.service}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-dental-orange focus:border-transparent"
                >
                  <option value="">Select a service</option>
                  {services.map((service, index) => (
                    <option key={index} value={service}>
                      {service}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-dental-darkGray mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  value={formData.message}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-dental-orange focus:border-transparent"
                  placeholder="Tell us about your dental care needs..."
                />
              </div>

              <button
                type="submit"
                className="w-full bg-dental-orange text-white py-3 px-6 rounded-lg font-semibold hover:bg-orange-600 transition-colors flex items-center justify-center space-x-2"
              >
                <Calendar className="w-5 h-5" />
                <span>Book Appointment</span>
              </button>
            </form>

            <div className="mt-6 text-center">
              <p className="text-sm text-gray-600">
                Or call us directly at{' '}
                <a href="tel:9587815285" className="text-dental-orange font-semibold hover:underline">
                  9587815285
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

