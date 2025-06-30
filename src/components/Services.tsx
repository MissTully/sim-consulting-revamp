
import { Brain, Users, Settings, BookOpen, Target, Zap } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

const Services = () => {
  const services = [
    {
      icon: Brain,
      title: "Curriculum Development",
      description: "Custom simulation-based curricula designed to meet your specific learning objectives and accreditation requirements.",
      features: ["Evidence-based design", "Competency mapping", "Assessment integration"]
    },
    {
      icon: Users,
      title: "Faculty Development",
      description: "Comprehensive training programs to develop simulation educators and enhance teaching effectiveness.",
      features: ["Instructor certification", "Best practices", "Ongoing mentorship"]
    },
    {
      icon: Settings,
      title: "Program Implementation",
      description: "End-to-end support for establishing and optimizing medical simulation programs.",
      features: ["Needs assessment", "Resource planning", "Quality assurance"]
    },
    {
      icon: BookOpen,
      title: "Educational Research",
      description: "Research-driven approaches to validate and improve simulation-based medical education outcomes.",
      features: ["Study design", "Data analysis", "Publication support"]
    },
    {
      icon: Target,
      title: "Assessment & Evaluation",
      description: "Robust assessment strategies to measure learning outcomes and program effectiveness.",
      features: ["Competency assessment", "Program evaluation", "Outcome measurement"]
    },
    {
      icon: Zap,
      title: "Technology Integration",
      description: "Strategic implementation of simulation technologies to enhance learning experiences.",
      features: ["Equipment selection", "Integration planning", "Training support"]
    }
  ];

  return (
    <section id="services" className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-medical-navy mb-4">Our Services</h2>
          <p className="text-xl text-medical-gray max-w-3xl mx-auto">
            Comprehensive medical simulation consulting services designed to transform 
            healthcare education and improve patient outcomes.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card key={index} className="group hover:shadow-xl transition-all duration-300 border-0 shadow-lg hover:-translate-y-2">
              <CardHeader className="text-center pb-4">
                <div className="flex items-center justify-center w-16 h-16 medical-gradient rounded-xl mb-4 mx-auto group-hover:scale-110 transition-transform duration-300">
                  <service.icon className="w-8 h-8 text-white" />
                </div>
                <CardTitle className="text-xl text-medical-navy">{service.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-medical-gray mb-6 text-center">
                  {service.description}
                </CardDescription>
                <ul className="space-y-2">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-sm text-medical-gray">
                      <div className="w-2 h-2 bg-medical-teal rounded-full mr-3"></div>
                      {feature}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
