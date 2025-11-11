import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Star, Award } from "lucide-react";
import { Link } from "react-router-dom";
import therapist1 from "@/assets/therapist-1.jpg";
import therapist2 from "@/assets/therapist-2.jpg";
import therapist3 from "@/assets/therapist-3.jpg";

const Therapists = () => {
  const therapists = [
    {
      name: "Anastasia Ivanova",
      origin: "Russia",
      specialization: "Deep Tissue & Hot Stone",
      experience: "8 tahun",
      rating: 4.9,
      reviews: 127,
      image: therapist2,
      languages: ["Russian", "English", "Arabic"],
      badge: "Terapis Senior",
    },
    {
      name: "Mei Lin",
      origin: "Asia",
      specialization: "Traditional Thai & Aromatherapy",
      experience: "6 tahun",
      rating: 4.8,
      reviews: 98,
      image: therapist1,
      languages: ["Mandarin", "English", "Thai"],
      badge: "Paling Populer",
    },
    {
      name: "Sakura Tanaka",
      origin: "Asia",
      specialization: "Shiatsu & Facial Treatment",
      experience: "7 tahun",
      rating: 4.9,
      reviews: 115,
      image: therapist3,
      languages: ["Japanese", "English"],
      badge: "Ahli Perawatan Wajah",
    },
  ];

  return (
    <div className="min-h-screen pb-20">
      {/* Header */}
      <div className="bg-gradient-to-br from-primary to-sage text-primary-foreground py-12 px-4">
        <div className="container mx-auto">
          <h1 className="text-3xl font-bold mb-2">Terapis Profesional</h1>
          <p className="text-primary-foreground/90">Pilih terapis favorit Anda</p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8 space-y-6">
        {therapists.map((therapist, index) => (
          <Card key={index} className="overflow-hidden hover:shadow-xl transition-all">
            <div className="flex flex-col sm:flex-row">
              {/* Image */}
              <div 
                className="h-64 sm:h-auto sm:w-48 bg-cover bg-center flex-shrink-0"
                style={{ backgroundImage: `url(${therapist.image})` }}
              />
              
              {/* Content */}
              <div className="flex-1">
                <CardHeader>
                  <div className="flex items-start justify-between gap-2">
                    <div>
                      <CardTitle className="text-2xl mb-2">{therapist.name}</CardTitle>
                      <Badge className="bg-sage text-sage-foreground mb-2">
                        {therapist.badge}
                      </Badge>
                    </div>
                    <div className="flex items-center gap-1 bg-sage/10 px-3 py-1 rounded-full">
                      <Star className="h-4 w-4 fill-sage text-sage" />
                      <span className="font-semibold text-sage">{therapist.rating}</span>
                      <span className="text-xs text-muted-foreground">({therapist.reviews})</span>
                    </div>
                  </div>
                </CardHeader>
                
                <CardContent className="space-y-4">
                  {/* Details */}
                  <div className="space-y-2 text-sm">
                    <div className="flex items-center gap-2">
                      <Award className="h-4 w-4 text-primary" />
                      <span className="text-muted-foreground">Asal:</span>
                      <span className="font-medium">{therapist.origin}</span>
                    </div>
                    <div>
                      <span className="text-muted-foreground">Spesialisasi: </span>
                      <span className="font-medium">{therapist.specialization}</span>
                    </div>
                    <div>
                      <span className="text-muted-foreground">Pengalaman: </span>
                      <span className="font-medium">{therapist.experience}</span>
                    </div>
                    <div>
                      <span className="text-muted-foreground">Bahasa: </span>
                      <span className="font-medium">{therapist.languages.join(", ")}</span>
                    </div>
                  </div>

                  {/* Action Button */}
                  <Link to="/booking">
                    <Button className="w-full bg-primary hover:bg-primary/90">
                      Pesan dengan {therapist.name.split(" ")[0]}
                    </Button>
                  </Link>
                </CardContent>
              </div>
            </div>
          </Card>
        ))}

        {/* Info Card */}
        <Card className="bg-gradient-to-br from-sage/10 to-primary/10 border-sage/20">
          <CardContent className="pt-6 text-center space-y-2">
            <p className="text-sm text-muted-foreground">
              Semua terapis kami tersertifikasi internasional dan berpengalaman dalam berbagai teknik spa
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Therapists;
