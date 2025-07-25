import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Car, MapPin, Clock, Shield, Users, Plane } from "lucide-react";
import TaxiPricingTable from "@/components/TaxiPricingTable";
import { useQuery } from '@tanstack/react-query';
import { supabase } from '@/integrations/supabase/client';

const Taxi = () => {
  // Fetch taxi services from Supabase
  const { data: taxiServices, isLoading } = useQuery({
    queryKey: ["taxi-services"],
    queryFn: async () => {
      const { data, error } = await supabase
        .from("services")
        .select("*")
        .eq("service_type", "taxi")
        .eq("is_active", true)
        .order("sort_order", { ascending: true });
      
      if (error) throw error;
      return data;
    },
  });

  const fallbackServices = [
    {
      icon: Plane,
      title: "Airport Transfers",
      description: "Reliable pickup and drop-off services for King Abdulaziz Airport and all Saudi airports.",
      features: ["Flight tracking", "Meet & greet service", "Luggage assistance", "24/7 availability"]
    },
    {
      icon: MapPin,
      title: "Haram Transfers",
      description: "Comfortable transportation between your hotel and the Holy Haram in Makkah and Madinah.",
      features: ["Prayer time scheduling", "Short waiting times", "Frequent services", "Direct routes"]
    },
    {
      icon: Car,
      title: "Ziaraat Trips",
      description: "Private vehicle for visiting blessing sites with flexible timing and comfortable seating.",
      features: ["Full day tours", "Half day options", "Custom itineraries", "Air-conditioned vehicles"]
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="bg-gradient-subtle py-12 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-primary mb-6">
            {taxiServices && taxiServices.length > 0 ? taxiServices[0].name : "Reliable Taxi Service for Haram, Airport & Ziaraat"}
          </h1>
          <p className="text-xl text-muted-foreground mb-8">
            {taxiServices && taxiServices.length > 0 ? taxiServices[0].description : "Safe, comfortable, and trusted transportation with verified drivers who understand the blessing nature of your journey."}
          </p>
          <Button variant="holy" size="xl">
            Book Taxi Now
          </Button>
        </div>
      </section>

      {/* Pricing Table */}
      <section className="py-8 px-4 bg-background">
        <div className="max-w-7xl mx-auto">
          <TaxiPricingTable />
        </div>
      </section>

      {/* Features */}
      <section className="py-12 px-4 bg-background">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-primary mb-8">
            Why Choose Our Taxi Service?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <Card className="text-center">
              <CardHeader>
                <Shield className="w-12 h-12 text-primary mx-auto mb-4" />
                <CardTitle>Verified Drivers</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Licensed, experienced drivers who respect pilgrims and Islamic values.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardHeader>
                <Clock className="w-12 h-12 text-primary mx-auto mb-4" />
                <CardTitle>24/7 Service</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Available around the clock including late-night and early morning transfers.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardHeader>
                <Users className="w-12 h-12 text-primary mx-auto mb-4" />
                <CardTitle>Family Friendly</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Spacious vehicles suitable for families with luggage and comfortable seating.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardHeader>
                <Car className="w-12 h-12 text-primary mx-auto mb-4" />
                <CardTitle>Modern Fleet</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Clean, air-conditioned vehicles maintained to highest safety standards.
                </CardDescription>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-12 px-4 bg-accent/30">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-primary mb-8">
            Our Transportation Services
          </h2>
          {isLoading ? (
            <div className="text-center py-8">
              <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary mx-auto"></div>
              <p className="mt-4 text-muted-foreground">Loading services...</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {(taxiServices && taxiServices.length > 0 ? taxiServices : fallbackServices).map((service, index) => (
                <Card key={service.id || index} className="hover:shadow-card transition-all duration-300">
                  <CardHeader>
                    {service.featured_image_url && (
                      <div className="mb-4 rounded-lg overflow-hidden">
                        <img 
                          src={service.featured_image_url} 
                          alt={service.name || service.title}
                          className="w-full h-32 object-cover"
                        />
                      </div>
                    )}
                    <CardTitle className="text-xl">{service.name || service.title}</CardTitle>
                    <CardDescription>{service.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    {service.features ? (
                      <div dangerouslySetInnerHTML={{ __html: service.features }} />
                    ) : (
                      <ul className="space-y-2">
                        {service.features?.map((feature, featureIndex) => (
                          <li key={featureIndex} className="flex items-center space-x-2 text-sm">
                            <div className="w-1.5 h-1.5 bg-primary rounded-full" />
                            <span>{feature}</span>
                          </li>
                        ))}
                      </ul>
                    )}
                  </CardContent>
                </Card>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Booking CTA */}
      <section className="py-16 px-4 bg-primary text-primary-foreground">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">
            Book Your Transportation Now
          </h2>
          <p className="text-xl text-primary-foreground/90 mb-8">
            Secure your reliable transport with our verified drivers. Same bank transfer payment system - 
            pay within 4 hours to confirm your booking.
          </p>
          <div className="space-y-4">
            <Button variant="gold" size="xl" className="bg-primary-foreground text-primary hover:bg-primary-foreground/90">
              Book Taxi Service
            </Button>
            <p className="text-sm text-primary-foreground/80">
              Available 24/7 • Instant confirmation • Verified drivers
            </p>
            <p className="text-sm text-primary-foreground/80">
              Contact us: +923455141224 (Call/WhatsApp)
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Taxi;