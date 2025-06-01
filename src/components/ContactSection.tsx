import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Phone, MapPin, Copy } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

const ContactSection = () => {
  const { toast } = useToast();
  
  const phoneNumbers = [
    '+971 4 285 7715',
    '+971 55 4747065',
    '+971 55 9074779'
  ];

  const handleCallClick = (phoneNumber: string) => {
    window.open(`tel:${phoneNumber}`, '_self');
  };

  const handleCopyClick = (phoneNumber: string) => {
    navigator.clipboard.writeText(phoneNumber);
    toast({
      title: "Phone number copied!",
      description: `${phoneNumber} has been copied to your clipboard.`,
    });
  };

  return (
    <section id="contact" className="py-20 bg-gradient-to-br from-earth-900 to-saffron-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-playfair font-bold mb-4">
            Contact Us
          </h2>
          <div className="text-2xl font-noto-kufi text-saffron-200 mb-6 arabic-text">
            اتصل بنا
          </div>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Visit our store or get in touch for all your spice and grinding needs
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          {/* Contact Information */}
          <div className="space-y-8">
            <Card className="bg-white/10 backdrop-blur border-saffron-300/30">
              <CardContent className="p-6">
                <h3 className="text-2xl font-playfair font-semibold mb-6 flex items-center text-saffron-200">
                  <Phone className="w-6 h-6 mr-3" />
                  Call Us
                </h3>
                <div className="space-y-4">
                  {phoneNumbers.map((phone, index) => (
                    <div key={index} className="flex items-center justify-between">
                      <span className="text-lg text-gray-300">{phone}</span>
                      <div className="flex gap-2">
                        <Button
                          onClick={() => handleCopyClick(phone)}
                          size="sm"
                          className="bg-earth-600 hover:bg-earth-700 text-white border border-earth-500 shadow-md"
                        >
                          <Copy className="w-4 h-4" />
                        </Button>
                        <Button
                          onClick={() => handleCallClick(phone)}
                          size="sm"
                          className="bg-saffron-600 hover:bg-saffron-700 text-white font-semibold shadow-md"
                        >
                          Call
                        </Button>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card className="bg-white/10 backdrop-blur border-saffron-300/30">
              <CardContent className="p-6">
                <h3 className="text-2xl font-playfair font-semibold mb-6 flex items-center text-saffron-200">
                  <MapPin className="w-6 h-6 mr-3" />
                  Visit Our Store
                </h3>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold text-saffron-200 mb-2">Address:</h4>
                    <p className="text-gray-300">
                      BAHAR ALZAFARAN GRINDING SHOP<br />
                      Nad Rashid Market, Al Rashidiya<br />
                      Near 29A Street & 26th Street intersection<br />
                      Close to Rashidiya Police Station<br />
                      Dubai, United Arab Emirates
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-saffron-200 mb-2">Business Hours:</h4>
                    <div className="text-gray-300 space-y-1">
                      <p>Daily: 6:00 AM - 11:30 PM</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-white/10 backdrop-blur border-saffron-300/30">
              <CardContent className="p-6">
                <h3 className="text-2xl font-playfair font-semibold mb-4 text-saffron-200">
                  Why Choose Us?
                </h3>
                <div className="space-y-3">
                  <div className="flex items-center text-gray-300">
                    <div className="w-2 h-2 bg-saffron-400 rounded-full mr-3"></div>
                    Premium quality spices and herbs
                  </div>
                  <div className="flex items-center text-gray-300">
                    <div className="w-2 h-2 bg-saffron-400 rounded-full mr-3"></div>
                    Traditional stone grinding methods
                  </div>
                  <div className="flex items-center text-gray-300">
                    <div className="w-2 h-2 bg-saffron-400 rounded-full mr-3"></div>
                    Expert consultation and advice
                  </div>
                  <div className="flex items-center text-gray-300">
                    <div className="w-2 h-2 bg-saffron-400 rounded-full mr-3"></div>
                    Competitive prices
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="lg:sticky lg:top-8">
            <Card className="overflow-hidden bg-white/10 backdrop-blur border-saffron-300/30">
              <CardContent className="p-0">
                <div className="relative">
                  <iframe 
                    src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d104520.32142778013!2d55.3156343!3d25.2256447!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f675f5a7eb597%3A0x7766958fd13126d0!2zQkFIQVIgQUxaQUZBUkFOIEdSSU5ESU5HIFNIT1Ag2YXYt9it2YbYqSDZiCDYo9i52LTYp9ioINio2K3Ysdin2YTYsti52YHYsdin2YY!5e1!3m2!1sen!2sae!4v1748177558623!5m2!1sen!2sae" 
                    width="100%" 
                    height="450" 
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy" 
                    referrerPolicy="no-referrer-when-downgrade"
                    className="w-full"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent pointer-events-none"></div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        <div className="text-center bg-white/10 backdrop-blur rounded-2xl p-8 border border-saffron-300/30">
          <h3 className="text-3xl font-playfair font-bold mb-4 text-saffron-200">
            Ready to Experience Authentic Spices?
          </h3>
          <p className="text-lg text-gray-300 mb-6 max-w-2xl mx-auto">
            Visit our store today and discover the difference that traditional quality makes. 
            Our team is ready to help you find the perfect spices for your needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              onClick={() => handleCallClick(phoneNumbers[0])}
              size="lg"
              className="bg-saffron-600 hover:bg-saffron-700 text-white px-8 py-3 text-lg font-semibold rounded-full shadow-lg"
            >
              <Phone className="w-5 h-5 mr-2" />
              Call Now
            </Button>
            <Button
              onClick={() => window.open('https://maps.google.com/?q=BAHAR+ALZAFARAN+GRINDING+SHOP', '_blank')}
              size="lg"
              className="bg-earth-600 hover:bg-earth-700 text-white border-2 border-earth-500 px-8 py-3 text-lg font-semibold rounded-full shadow-lg"
            >
              <MapPin className="w-5 h-5 mr-2" />
              Get Directions
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
