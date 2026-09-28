import { useEffect, useState } from 'react';
import { Mail, Phone, Clock, Calendar, Send } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { useToast } from '@/hooks/use-toast';

const CONTACT_EMAIL = 'melissa@encountive.com';
const BOOKING_URL = 'https://calendar.app.google/4rcHz3JYTDYmnS6i9';
const FORM_ACTION = 'https://formsubmit.co/el/zudoro';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    organization: '',
    message: ''
  });
  const [sent, setSent] = useState(false);
  const { toast } = useToast();

  useEffect(() => {
    const sentId = new URLSearchParams(window.location.search).get('sent');
    if (sentId === 'contact') {
      setSent(true);
      toast({
        title: 'Message sent',
        description: 'We will reply to the email you provided.',
      });
    }
  }, [toast]);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    const form = e.currentTarget;
    if (!form.checkValidity()) {
      e.preventDefault();
      return;
    }
    const next = form.querySelector('input[name="_next"]') as HTMLInputElement | null;
    if (next) {
      const back = new URL(window.location.href);
      back.searchParams.set('sent', 'contact');
      back.hash = 'contact';
      next.value = back.toString();
    }
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
      details: [CONTACT_EMAIL],
      action: "Send Email",
      href: `mailto:${CONTACT_EMAIL}`
    },
    {
      icon: Phone,
      title: "Call Us",
      details: ["813-337-6813"],
      action: "Call Now",
      href: "tel:813-337-6813"
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

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
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
                <Button asChild variant="outline" className="border-medical-blue text-medical-blue hover:bg-medical-blue hover:text-white">
                  <a href={info.href}>{info.action}</a>
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
              <form action={FORM_ACTION} method="POST" onSubmit={handleSubmit} className="space-y-6">
                <input type="hidden" name="_subject" value="New message from the Encountive consulting site" />
                <input type="hidden" name="_template" value="table" />
                <input type="hidden" name="_captcha" value="false" />
                <input type="hidden" name="_next" value="" />
                <input type="text" name="_honey" tabIndex={-1} autoComplete="off" aria-hidden="true" style={{ position: 'absolute', left: '-9999px' }} />
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
                {sent && (
                  <p className="text-sm text-medical-navy text-center">Message sent. We will reply to the email you provided.</p>
                )}
                <p className="text-sm text-medical-gray text-center">
                  If this form does not send, email{' '}
                  <a href={`mailto:${CONTACT_EMAIL}`} className="text-medical-blue underline">{CONTACT_EMAIL}</a>.
                </p>
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
                <Button asChild className="w-full medical-gradient text-white hover:opacity-90">
                  <a href={BOOKING_URL} target="_blank" rel="noopener noreferrer">Book Free Consultation</a>
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
