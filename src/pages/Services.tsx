import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Clock, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import spaTreatment from "@/assets/spa-treatment.jpg";

const Services = () => {
  const serviceCategories = [
    {
      category: "Pijat Terapeutik",
      services: [
        {
          title: "Signature Royal Massage",
          description: "Pijat eksklusif dengan teknik khas Dubai Royal Spa menggunakan minyak aromaterapi premium",
          duration: "90 menit",
          price: "AED 450",
          badge: "Paling Populer",
        },
        {
          title: "Deep Tissue Massage",
          description: "Pijat dengan tekanan dalam untuk meredakan ketegangan otot dan nyeri kronis",
          duration: "60 menit",
          price: "AED 350",
          badge: null,
        },
        {
          title: "Hot Stone Therapy",
          description: "Terapi batu panas vulkanik untuk relaksasi mendalam dan peningkatan sirkulasi",
          duration: "75 menit",
          price: "AED 400",
          badge: null,
        },
      ],
    },
    {
      category: "Perawatan Wajah",
      services: [
        {
          title: "Luxury Facial Treatment",
          description: "Perawatan wajah premium dengan produk organik dan teknologi terkini",
          duration: "60 menit",
          price: "AED 380",
          badge: "Baru",
        },
        {
          title: "Anti-Aging Facial",
          description: "Perawatan anti-penuaan dengan serum kolagen dan vitamin C tinggi",
          duration: "75 menit",
          price: "AED 450",
          badge: null,
        },
      ],
    },
    {
      category: "Perawatan Tubuh",
      services: [
        {
          title: "Body Scrub & Wrap",
          description: "Lulur tubuh eksotis dan pembungkus detoksifikasi untuk kulit halus bercahaya",
          duration: "90 menit",
          price: "AED 420",
          badge: null,
        },
        {
          title: "Aromatherapy Session",
          description: "Sesi aromaterapi dengan minyak esensial pilihan untuk relaksasi total",
          duration: "60 menit",
          price: "AED 320",
          badge: null,
        },
      ],
    },
  ];

  return (
    <div className="min-h-screen pb-20">
      {/* Header */}
      <div className="bg-gradient-to-br from-primary to-sage text-primary-foreground py-12 px-4">
        <div className="container mx-auto">
          <h1 className="text-3xl font-bold mb-2">Katalog Layanan</h1>
          <p className="text-primary-foreground/90">Pilih treatment yang sempurna untuk Anda</p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8 space-y-8">
        {serviceCategories.map((category, categoryIndex) => (
          <div key={categoryIndex} className="space-y-4">
            <h2 className="text-2xl font-semibold text-foreground border-b border-border pb-2">
              {category.category}
            </h2>
            
            <div className="space-y-4">
              {category.services.map((service, serviceIndex) => (
                <Card key={serviceIndex} className="hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <div className="flex items-start justify-between gap-2">
                      <div className="flex-1">
                        <CardTitle className="text-xl mb-2">{service.title}</CardTitle>
                        {service.badge && (
                          <Badge className="mb-2 bg-sage text-sage-foreground">
                            {service.badge}
                          </Badge>
                        )}
                      </div>
                    </div>
                    <CardDescription className="text-sm leading-relaxed">
                      {service.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="flex items-center justify-between">
                      <div className="space-y-1">
                        <div className="flex items-center gap-2 text-sm text-muted-foreground">
                          <Clock className="h-4 w-4" />
                          <span>{service.duration}</span>
                        </div>
                        <div className="text-2xl font-bold text-primary">{service.price}</div>
                      </div>
                      <Link to="/booking">
                        <Button className="bg-primary hover:bg-primary/90">
                          Pesan Sekarang
                          <ArrowRight className="ml-2 h-4 w-4" />
                        </Button>
                      </Link>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        ))}

        {/* Bottom CTA */}
        <Card className="bg-gradient-to-br from-primary/10 to-sage/10 border-sage/20">
          <CardContent className="pt-6 text-center space-y-4">
            <h3 className="text-xl font-semibold text-foreground">Tidak yakin layanan mana yang tepat?</h3>
            <p className="text-muted-foreground">Konsultasikan dengan terapis profesional kami</p>
            <Link to="/therapists">
              <Button variant="outline" className="border-primary text-primary hover:bg-primary/5">
                Lihat Terapis Kami
              </Button>
            </Link>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Services;
