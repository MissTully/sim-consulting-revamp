
import { useState } from 'react';
import { Mail, Phone, MapPin, Send, Clock, Calendar } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { useToast } from '@/hooks/use-toast';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    organization: '',
    message: ''
  });
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Message Sent Successfully!",
      description: "We'll get back to you within 24 hours.",
    });
    setFormData({ name: '', email: '', organization: '', message: '' });
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const contactInfo = [
    {
      icon: Mail,
      title: "Email Us",
      details: ["info@medicalsimulationconsulting.com", "support@medicalsimulationconsulting.com"],
      action: "Send Email"
    },
    {
      icon: Phone,
      title: "Call Us",
      details: ["+1 (555) 123-4567", "+1 (555) 987-6543"],
      action: "Call Now"
    },
    {
      icon: MapPin,
      title: "Visit Us",
      details: ["123 Medical Center Drive", "Healthcare District, HC 12345"],
      action: "Get Directions"
    }
  ];

  return (
    <section id="contact" className="py-20 medical-gradient-light">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-medical-navy mb-4">Get In Touch</h2>
          <p className="text-xl text-medical-gray max-w-3xl mx-auto">
            Ready to transform your medical education program? Let's discuss how our 
            simulation consulting services can help achieve your goals.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
          {contactInfo.map((info, index) => (
            <Card key={index} className="text-center hover:shadow-xl transition-all duration-300 border-0 shadow-lg">
              <CardHeader>
                <div className="flex items-center justify-center w-16 h-16 medical-gradient rounded-xl mb-4 mx-auto">
                  <info.icon className="w-8 h-8 text-white" />
                </div>
                <CardTitle className="text-xl text-medical-navy">{info.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-2 mb-6">
                  {info.details.map((detail, detailIndex) => (
                    <p key={detailIndex} className="text-medical-gray">{detail}</p>
                  ))}
                </div>
                <Button variant="outline" className="border-medical-blue text-medical-blue hover:bg-medical-blue hover:text-white">
                  {info.action}
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <Card className="border-0 shadow-xl">
            <CardHeader>
              <CardTitle className="text-2xl text-medical-navy">Send Us a Message</CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-medical-navy mb-2">
                      Full Name *
                    </label>
                    <Input
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className="border-medical-blue/20 focus:border-medical-blue"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-medical-navy mb-2">
                      Email Address *
                    </label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="border-medical-blue/20 focus:border-medical-blue"
                    />
                  </div>
                </div>
                
                <div>
                  <label htmlFor="organization" className="block text-sm font-medium text-medical-navy mb-2">
                    Organization
                  </label>
                  <Input
                    id="organization"
                    name="organization"
                    value={formData.organization}
                    onChange={handleInputChange}
                    className="border-medical-blue/20 focus:border-medical-blue"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-medical-navy mb-2">
                    Message *
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    rows={5}
                    className="border-medical-blue/20 focus:border-medical-blue"
                    placeholder="Tell us about your project and how we can help..."
                  />
                </div>

                <Button type="submit" size="lg" className="w-full medical-gradient text-white hover:opacity-90">
                  Send Message
                  <Send className="ml-2 w-5 h-5" />
                </Button>
              </form>
            </CardContent>
          </Card>

          <div className="space-y-8">
            <Card className="border-0 shadow-xl">
              <CardHeader>
                <CardTitle className="text-xl text-medical-navy flex items-center">
                  <Clock className="w-6 h-6 mr-2 text-medical-blue" />
                  Business Hours
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex justify-between">
                  <span className="text-medical-gray">Monday - Friday</span>
                  <span className="text-medical-navy font-medium">8:00 AM - 6:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-medical-gray">Saturday</span>
                  <span className="text-medical-navy font-medium">9:00 AM - 4:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-medical-gray">Sunday</span>
                  <span className="text-medical-navy font-medium">Closed</span>
                </div>
                <div className="pt-3 border-t">
                  <p className="text-sm text-medical-gray">
                    Emergency consultations available 24/7 for existing clients
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-xl">
              <CardHeader>
                <CardTitle className="text-xl text-medical-navy flex items-center">
                  <Calendar className="w-6 h-6 mr-2 text-medical-blue" />
                  Schedule a Consultation
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-medical-gray mb-6">
                  Book a free 30-minute consultation to discuss your medical simulation needs.
                </p>
                <Button className="w-full medical-gradient text-white hover:opacity-90">
                  Book Free Consultation
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
