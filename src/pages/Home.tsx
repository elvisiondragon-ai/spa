import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Sparkles, Clock, MapPin, Star } from "lucide-react";
import { Link } from "react-router-dom";
import { useLanguage } from "@/contexts/LanguageContext";
import spaHero from "@/assets/spa-hero.jpg";
import spaTreatment from "@/assets/spa-treatment.jpg";

const Home = () => {
  const { t } = useLanguage();
  
  const featuredServices = [
    {
      title: t("service.signatureMassage"),
      duration: `90 ${t("common.minutes")}`,
      price: "AED 450",
      image: spaTreatment,
      badge: t("common.popular"),
    },
    {
      title: t("service.deepTissue"),
      duration: `60 ${t("common.minutes")}`,
      price: "AED 350",
      image: spaTreatment,
      badge: t("common.new"),
    },
  ];

  return (
    <div className="min-h-screen pb-20">
      {/* Hero Section */}
      <div className="relative h-[50vh] overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${spaHero})` }}
        >
          <div className="absolute inset-0 bg-gradient-to-b from-primary/60 via-primary/40 to-background" />
        </div>
        <div className="relative h-full flex flex-col justify-end p-6 text-primary-foreground">
          <h1 className="text-4xl font-bold mb-2">Dubai Royal Spa</h1>
          <div className="flex items-center gap-2 text-sm opacity-90">
            <MapPin className="h-4 w-4" />
            <span>Sheikh Zayed Road, E 11</span>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8 space-y-8">
        {/* Welcome Section */}
        <div className="text-center space-y-2">
          <h2 className="text-2xl font-semibold text-foreground">{t("home.welcome")}</h2>
          <p className="text-muted-foreground">{t("home.subtitle")}</p>
        </div>

        {/* Quick Actions */}
        <div className="grid grid-cols-2 gap-4">
          <Link to="/booking">
            <Button className="w-full h-24 flex flex-col gap-2 bg-primary hover:bg-primary/90">
              <Sparkles className="h-6 w-6" />
              <span>{t("home.bookNow")}</span>
            </Button>
          </Link>
          <Link to="/therapists">
            <Button variant="outline" className="w-full h-24 flex flex-col gap-2 border-primary text-primary hover:bg-primary/5">
              <Star className="h-6 w-6" />
              <span>{t("home.chooseTherapist")}</span>
            </Button>
          </Link>
        </div>

        {/* Featured Services */}
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <h3 className="text-xl font-semibold text-foreground">{t("home.featuredServices")}</h3>
            <Link to="/services">
              <Button variant="ghost" size="sm" className="text-primary">
                {t("home.viewAll")}
              </Button>
            </Link>
          </div>
          
          <div className="space-y-4">
            {featuredServices.map((service, index) => (
              <Card key={index} className="overflow-hidden hover:shadow-lg transition-shadow">
                <div className="flex">
                  <div 
                    className="w-32 bg-cover bg-center flex-shrink-0"
                    style={{ backgroundImage: `url(${service.image})` }}
                  />
                  <div className="flex-1">
                    <CardHeader className="pb-2">
                      <div className="flex items-start justify-between">
                        <CardTitle className="text-lg">{service.title}</CardTitle>
                        <Badge variant="secondary" className="bg-sage text-sage-foreground">
                          {service.badge}
                        </Badge>
                      </div>
                      <CardDescription className="flex items-center gap-2 mt-1">
                        <Clock className="h-3 w-3" />
                        {service.duration}
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="flex items-center justify-between">
                        <span className="text-2xl font-bold text-primary">{service.price}</span>
                        <Link to="/booking">
                          <Button size="sm" className="bg-primary hover:bg-primary/90">
                            {t("home.book")}
                          </Button>
                        </Link>
                      </div>
                    </CardContent>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>

        {/* Testimonial */}
        <Card className="bg-gradient-to-br from-primary/5 to-sage/5 border-sage/20">
          <CardContent className="pt-6">
            <div className="flex gap-1 mb-3">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="h-4 w-4 fill-sage text-sage" />
              ))}
            </div>
            <p className="text-sm text-foreground italic mb-2">
              "{t("home.testimonial")}"
            </p>
            <p className="text-xs text-muted-foreground">- Sarah M.</p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Home;
