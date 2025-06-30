
import { Stethoscope, Mail, Phone, MapPin, Linkedin, Twitter, Facebook } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-medical-navy text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-2 mb-6">
              <div className="flex items-center justify-center w-10 h-10 medical-gradient rounded-lg">
                <Stethoscope className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="text-xl font-bold">Medical Simulation</h3>
                <p className="text-sm text-gray-300">Consulting</p>
              </div>
            </div>
            <p className="text-gray-300 mb-6 max-w-md">
              Leading provider of medical simulation consulting services, transforming 
              healthcare education through innovative training solutions and evidence-based practices.
            </p>
            <div className="flex space-x-4">
              <div className="flex items-center justify-center w-10 h-10 bg-white/10 rounded-lg hover:bg-white/20 transition-colors cursor-pointer">
                <Linkedin className="w-5 h-5" />
              </div>
              <div className="flex items-center justify-center w-10 h-10 bg-white/10 rounded-lg hover:bg-white/20 transition-colors cursor-pointer">
                <Twitter className="w-5 h-5" />
              </div>
              <div className="flex items-center justify-center w-10 h-10 bg-white/10 rounded-lg hover:bg-white/20 transition-colors cursor-pointer">
                <Facebook className="w-5 h-5" />
              </div>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-6">Services</h4>
            <ul className="space-y-3 text-gray-300">
              <li><a href="#" className="hover:text-white transition-colors">Curriculum Development</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Faculty Development</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Program Implementation</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Educational Research</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Assessment & Evaluation</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-6">Contact Info</h4>
            <div className="space-y-4 text-gray-300">
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-medical-teal" />
                <span className="text-sm">info@medicalsimulationconsulting.com</span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-medical-teal" />
                <span className="text-sm">+1 (555) 123-4567</span>
              </div>
              <div className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-medical-teal mt-1" />
                <div className="text-sm">
                  <p>123 Medical Center Drive</p>
                  <p>Healthcare District, HC 12345</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-300 text-sm">
              © {currentYear} Medical Simulation Consulting. All rights reserved.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a href="#" className="text-gray-300 hover:text-white transition-colors text-sm">
                Privacy Policy
              </a>
              <a href="#" className="text-gray-300 hover:text-white transition-colors text-sm">
                Terms of Service
              </a>
              <a href="#" className="text-gray-300 hover:text-white transition-colors text-sm">
                Cookie Policy
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
