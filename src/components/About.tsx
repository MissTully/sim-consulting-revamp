
import { CheckCircle, Heart, Lightbulb, Shield } from 'lucide-react';

const About = () => {
  const values = [
    {
      icon: Heart,
      title: "Patient-Centered",
      description: "Every solution we develop is designed with patient safety and outcomes as the primary focus."
    },
    {
      icon: Lightbulb,
      title: "Innovation",
      description: "We leverage cutting-edge simulation technologies and evidence-based practices to drive innovation."
    },
    {
      icon: Shield,
      title: "Quality Excellence",
      description: "Our commitment to quality ensures the highest standards in medical simulation education."
    }
  ];

  const achievements = [
    "Board-certified simulation specialists",
    "Published research in peer-reviewed journals",
    "International speaking engagements",
    "Accreditation with professional organizations",
    "Collaborative partnerships with leading institutions"
  ];

  return (
    <section id="about" className="py-20 medical-gradient-light">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-4xl font-bold text-medical-navy mb-6">
              Leading Medical Simulation Excellence
            </h2>
            <p className="text-lg text-medical-gray mb-6">
              With over 15 years of experience in medical simulation, our team combines 
              clinical expertise with educational innovation to deliver transformative 
              healthcare training solutions.
            </p>
            <p className="text-lg text-medical-gray mb-8">
              We work with healthcare institutions, medical schools, and training centers 
              worldwide to develop comprehensive simulation programs that enhance learning 
              outcomes and improve patient care quality.
            </p>
            
            <div className="space-y-4">
              {achievements.map((achievement, index) => (
                <div key={index} className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-medical-teal mr-3 flex-shrink-0" />
                  <span className="text-medical-gray">{achievement}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="space-y-8">
            <img
              src="https://images.unsplash.com/photo-1485827404703-89b55fcc595e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
              alt="Medical simulation equipment"
              className="rounded-2xl shadow-xl"
            />
            
            <div className="grid grid-cols-1 gap-6">
              {values.map((value, index) => (
                <div key={index} className="bg-white p-6 rounded-xl shadow-lg">
                  <div className="flex items-start space-x-4">
                    <div className="flex items-center justify-center w-12 h-12 medical-gradient rounded-lg flex-shrink-0">
                      <value.icon className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-medical-navy mb-2">{value.title}</h3>
                      <p className="text-medical-gray text-sm">{value.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
