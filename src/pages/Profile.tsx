import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { User, Mail, Phone, MapPin, Calendar, Settings, LogOut } from "lucide-react";

const Profile = () => {
  const bookingHistory = [
    {
      service: "Signature Royal Massage",
      therapist: "Anastasia Ivanova",
      date: "15 Nov 2025",
      status: "Selesai",
      price: "AED 450",
    },
    {
      service: "Luxury Facial Treatment",
      therapist: "Sakura Tanaka",
      date: "28 Okt 2025",
      status: "Selesai",
      price: "AED 380",
    },
    {
      service: "Deep Tissue Massage",
      therapist: "Mei Lin",
      date: "20 Nov 2025",
      status: "Terjadwal",
      price: "AED 350",
    },
  ];

  return (
    <div className="min-h-screen pb-20">
      {/* Header */}
      <div className="bg-gradient-to-br from-primary to-sage text-primary-foreground py-12 px-4">
        <div className="container mx-auto">
          <h1 className="text-3xl font-bold mb-2">Profil Saya</h1>
          <p className="text-primary-foreground/90">Kelola akun dan riwayat pemesanan</p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8 space-y-6">
        {/* Profile Card */}
        <Card>
          <CardHeader>
            <div className="flex items-center gap-4">
              <div className="h-20 w-20 rounded-full bg-gradient-to-br from-primary to-sage flex items-center justify-center text-primary-foreground text-2xl font-bold">
                JD
              </div>
              <div>
                <CardTitle className="text-2xl">John Doe</CardTitle>
                <CardDescription>Member sejak Jan 2025</CardDescription>
              </div>
            </div>
          </CardHeader>
          <CardContent className="space-y-3">
            <div className="flex items-center gap-3 text-sm">
              <Mail className="h-4 w-4 text-muted-foreground" />
              <span>john.doe@example.com</span>
            </div>
            <div className="flex items-center gap-3 text-sm">
              <Phone className="h-4 w-4 text-muted-foreground" />
              <span>+971 50 123 4567</span>
            </div>
            <div className="flex items-center gap-3 text-sm">
              <MapPin className="h-4 w-4 text-muted-foreground" />
              <span>Dubai, UAE</span>
            </div>
          </CardContent>
        </Card>

        {/* Membership Card */}
        <Card className="bg-gradient-to-br from-primary to-sage text-primary-foreground">
          <CardContent className="pt-6">
            <div className="flex items-center justify-between">
              <div>
                <h3 className="text-xl font-bold mb-1">Royal Member</h3>
                <p className="text-sm opacity-90">Dapatkan 10% diskon untuk setiap pemesanan</p>
              </div>
              <Badge className="bg-cream text-primary">Premium</Badge>
            </div>
          </CardContent>
        </Card>

        {/* Booking History */}
        <div className="space-y-4">
          <h2 className="text-2xl font-semibold text-foreground">Riwayat Pemesanan</h2>
          
          {bookingHistory.map((booking, index) => (
            <Card key={index}>
              <CardHeader>
                <div className="flex items-start justify-between">
                  <div>
                    <CardTitle className="text-lg">{booking.service}</CardTitle>
                    <CardDescription>dengan {booking.therapist}</CardDescription>
                  </div>
                  <Badge 
                    variant={booking.status === "Terjadwal" ? "default" : "secondary"}
                    className={booking.status === "Terjadwal" ? "bg-sage text-sage-foreground" : ""}
                  >
                    {booking.status}
                  </Badge>
                </div>
              </CardHeader>
              <CardContent>
                <div className="flex items-center justify-between text-sm">
                  <div className="flex items-center gap-2 text-muted-foreground">
                    <Calendar className="h-4 w-4" />
                    <span>{booking.date}</span>
                  </div>
                  <span className="font-bold text-primary">{booking.price}</span>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <Separator />

        {/* Settings */}
        <div className="space-y-3">
          <h2 className="text-xl font-semibold text-foreground">Pengaturan</h2>
          
          <Button variant="outline" className="w-full justify-start" size="lg">
            <Settings className="mr-2 h-5 w-5" />
            Preferensi Akun
          </Button>
          
          <Button variant="outline" className="w-full justify-start text-destructive hover:text-destructive" size="lg">
            <LogOut className="mr-2 h-5 w-5" />
            Keluar
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Profile;
