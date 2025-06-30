
import { ArrowRight, Users, Award, BookOpen } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Hero = () => {
  return (
    <section id="home" className="pt-20 pb-16 medical-gradient-light">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center min-h-[80vh]">
          <div className="animate-fade-in">
            <h1 className="text-4xl md:text-6xl font-bold text-medical-navy leading-tight mb-6">
              Expert Medical
              <span className="block text-medical-blue">Simulation</span>
              Consulting
            </h1>
            <p className="text-xl text-medical-gray mb-8 leading-relaxed">
              Transform healthcare education through innovative simulation programs. 
              We provide comprehensive consulting services to enhance medical training 
              and improve patient outcomes through evidence-based simulation solutions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <Button size="lg" className="medical-gradient text-white hover:opacity-90 transition-opacity">
                Start Your Project
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
              <Button size="lg" variant="outline" className="border-medical-blue text-medical-blue hover:bg-medical-blue hover:text-white">
                Learn More
              </Button>
            </div>
            
            <div className="grid grid-cols-3 gap-8">
              <div className="text-center">
                <div className="flex items-center justify-center w-12 h-12 medical-gradient rounded-lg mb-3 mx-auto">
                  <Users className="w-6 h-6 text-white" />
                </div>
                <div className="text-2xl font-bold text-medical-navy">500+</div>
                <div className="text-sm text-medical-gray">Healthcare Professionals Trained</div>
              </div>
              <div className="text-center">
                <div className="flex items-center justify-center w-12 h-12 medical-gradient rounded-lg mb-3 mx-auto">
                  <Award className="w-6 h-6 text-white" />
                </div>
                <div className="text-2xl font-bold text-medical-navy">15+</div>
                <div className="text-sm text-medical-gray">Years of Experience</div>
              </div>
              <div className="text-center">
                <div className="flex items-center justify-center w-12 h-12 medical-gradient rounded-lg mb-3 mx-auto">
                  <BookOpen className="w-6 h-6 text-white" />
                </div>
                <div className="text-2xl font-bold text-medical-navy">100+</div>
                <div className="text-sm text-medical-gray">Programs Developed</div>
              </div>
            </div>
          </div>

          <div className="animate-slide-in-right">
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                alt="Medical simulation training"
                className="rounded-2xl shadow-2xl"
              />
              <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-xl shadow-lg">
                <div className="flex items-center space-x-3">
                  <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                  <span className="text-medical-navy font-semibold">Live Training in Progress</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
