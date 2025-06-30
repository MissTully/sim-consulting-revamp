
import { ArrowRight, TrendingUp, Users, Star } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

const CaseStudies = () => {
  const caseStudies = [
    {
      title: "Regional Medical Center Transformation",
      category: "Hospital Training Program",
      challenge: "Implement comprehensive simulation-based training for 200+ healthcare professionals",
      solution: "Developed integrated curriculum with hands-on simulation labs and competency assessments",
      results: [
        "40% improvement in clinical confidence scores",
        "25% reduction in medical errors",
        "95% staff satisfaction rate"
      ],
      image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    },
    {
      title: "Medical School Curriculum Redesign",
      category: "Academic Institution",
      challenge: "Modernize medical education with simulation-based learning integration",
      solution: "Created progressive simulation curriculum aligned with LCME standards",
      results: [
        "100% OSCE pass rate improvement",
        "Enhanced student engagement scores",
        "Successful accreditation renewal"
      ],
      image: "https://images.unsplash.com/photo-1518770660439-4636190af475?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    },
    {
      title: "Emergency Department Excellence",
      category: "Critical Care Training",
      challenge: "Improve emergency response team coordination and patient outcomes",
      solution: "High-fidelity team-based simulation scenarios with real-time debriefing",
      results: [
        "30% faster response times",
        "Improved team communication",
        "Enhanced patient safety metrics"
      ],
      image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    }
  ];

  return (
    <section id="case-studies" className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-medical-navy mb-4">Success Stories</h2>
          <p className="text-xl text-medical-gray max-w-3xl mx-auto">
            Real-world results from our medical simulation consulting projects that 
            have transformed healthcare education and improved patient outcomes.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
          {caseStudies.map((study, index) => (
            <Card key={index} className="group hover:shadow-2xl transition-all duration-300 border-0 shadow-lg overflow-hidden">
              <div className="relative h-48 overflow-hidden">
                <img
                  src={study.image}
                  alt={study.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute top-4 left-4">
                  <span className="bg-medical-blue text-white px-3 py-1 rounded-full text-sm font-medium">
                    {study.category}
                  </span>
                </div>
              </div>
              
              <CardHeader>
                <CardTitle className="text-xl text-medical-navy group-hover:text-medical-blue transition-colors">
                  {study.title}
                </CardTitle>
              </CardHeader>
              
              <CardContent className="space-y-4">
                <div>
                  <h4 className="font-semibold text-medical-navy mb-2">Challenge</h4>
                  <p className="text-sm text-medical-gray">{study.challenge}</p>
                </div>
                
                <div>
                  <h4 className="font-semibold text-medical-navy mb-2">Solution</h4>
                  <p className="text-sm text-medical-gray">{study.solution}</p>
                </div>
                
                <div>
                  <h4 className="font-semibold text-medical-navy mb-2">Results</h4>
                  <ul className="space-y-1">
                    {study.results.map((result, resultIndex) => (
                      <li key={resultIndex} className="flex items-center text-sm text-medical-gray">
                        <Star className="w-4 h-4 text-medical-teal mr-2 flex-shrink-0" />
                        {result}
                      </li>
                    ))}
                  </ul>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <Button size="lg" variant="outline" className="border-medical-blue text-medical-blue hover:bg-medical-blue hover:text-white">
            View All Case Studies
            <ArrowRight className="ml-2 w-5 h-5" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default CaseStudies;
