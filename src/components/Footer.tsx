import { Phone, MapPin, Clock, Heart } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-dental-darkGray text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Clinic Info */}
          <div>
            <div className="flex items-center space-x-3 mb-4">
              <div className="w-10 h-10 bg-dental-orange rounded-full flex items-center justify-center">
                <span className="text-white font-bold text-lg">ए</span>
              </div>
              <div>
                <h3 className="text-xl font-bold text-dental-orange font-hindi">एकदंताय</h3>
                <p className="text-sm text-gray-300 italic">Smile & Dental care</p>
              </div>
            </div>
            <p className="text-gray-300 mb-4">
              Complete dental care for every smile. Your smile is our priority!
            </p>
            <div className="flex items-center space-x-2 text-sm text-gray-300">
              <Heart className="w-4 h-4 text-dental-orange" />
              <span>Pain-Free Treatment • Modern Equipment • Expert Specialists</span>
            </div>
          </div>

          {/* Contact Information */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-dental-orange">Contact Info</h4>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-dental-orange" />
                <span className="text-gray-300">9587815285</span>
              </div>
              <div className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-dental-orange mt-0.5" />
                <span className="text-gray-300">
                  8 जनता धर्मशाला, महिला थाने के पास<br />
                  सवाई माधोपुर (राजस्थान)
                </span>
              </div>
            </div>
          </div>

          {/* OPD Timings */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-dental-orange">OPD Timings</h4>
            <div className="space-y-2">
              <div className="flex items-center space-x-3">
                <Clock className="w-5 h-5 text-dental-orange" />
                <div>
                  <p className="text-gray-300">Regular Hours</p>
                  <p className="text-sm text-gray-400">10:30am - 6:00pm</p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <Clock className="w-5 h-5 text-dental-orange" />
                <div>
                  <p className="text-gray-300">Monday & Thursday</p>
                  <p className="text-sm text-gray-400">Barwada visiting: 10:30am - 2:30pm</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-600 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center space-x-2 mb-4 md:mb-0">
              <MapPin className="w-4 h-4 text-dental-orange" />
              <span className="text-sm text-gray-300">
                8 जनता धर्मशाला, महिला थाने के पास, सवाई माधोपुर (राजस्थान)
              </span>
            </div>
            <div className="flex items-center space-x-2">
              <Phone className="w-4 h-4 text-dental-orange" />
              <span className="text-sm text-gray-300">9587815285</span>
            </div>
          </div>
          <div className="text-center mt-4">
            <p className="text-sm text-gray-400">
              © 2024 एकदंताय Dental Clinic. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}

