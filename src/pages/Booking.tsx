import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar } from "@/components/ui/calendar";
import { Clock, Check } from "lucide-react";
import { toast } from "sonner";

const Booking = () => {
  const [step, setStep] = useState(1);
  const [selectedService, setSelectedService] = useState<string | null>(null);
  const [selectedTherapist, setSelectedTherapist] = useState<string | null>(null);
  const [selectedDate, setSelectedDate] = useState<Date | undefined>(undefined);
  const [selectedTime, setSelectedTime] = useState<string | null>(null);

  const services = [
    { id: "1", name: "Signature Royal Massage", duration: "90 min", price: "AED 450" },
    { id: "2", name: "Deep Tissue Massage", duration: "60 min", price: "AED 350" },
    { id: "3", name: "Hot Stone Therapy", duration: "75 min", price: "AED 400" },
    { id: "4", name: "Luxury Facial Treatment", duration: "60 min", price: "AED 380" },
  ];

  const therapists = [
    { id: "1", name: "Anastasia Ivanova", specialty: "Deep Tissue" },
    { id: "2", name: "Mei Lin", specialty: "Thai Massage" },
    { id: "3", name: "Sakura Tanaka", specialty: "Facial" },
  ];

  const timeSlots = [
    "09:00", "10:00", "11:00", "12:00", "14:00", "15:00", "16:00", "17:00", "18:00", "19:00"
  ];

  const handleComplete = () => {
    toast.success("Pemesanan berhasil!", {
      description: "Kami akan mengirimkan konfirmasi melalui email",
    });
    // Reset form
    setStep(1);
    setSelectedService(null);
    setSelectedTherapist(null);
    setSelectedDate(undefined);
    setSelectedTime(null);
  };

  return (
    <div className="min-h-screen pb-20">
      {/* Header */}
      <div className="bg-gradient-to-br from-primary to-sage text-primary-foreground py-12 px-4">
        <div className="container mx-auto">
          <h1 className="text-3xl font-bold mb-2">Buat Pemesanan</h1>
          <p className="text-primary-foreground/90">Langkah {step} dari 4</p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        {/* Progress */}
        <div className="flex justify-between mb-8">
          {[1, 2, 3, 4].map((num) => (
            <div key={num} className="flex items-center flex-1">
              <div className={`flex items-center justify-center w-10 h-10 rounded-full border-2 ${
                step >= num ? "bg-primary border-primary text-primary-foreground" : "border-muted text-muted-foreground"
              }`}>
                {step > num ? <Check className="h-5 w-5" /> : num}
              </div>
              {num < 4 && (
                <div className={`flex-1 h-0.5 mx-2 ${step > num ? "bg-primary" : "bg-muted"}`} />
              )}
            </div>
          ))}
        </div>

        {/* Step 1: Select Service */}
        {step === 1 && (
          <div className="space-y-4">
            <h2 className="text-2xl font-semibold text-foreground mb-4">Pilih Layanan</h2>
            {services.map((service) => (
              <Card 
                key={service.id}
                className={`cursor-pointer transition-all hover:shadow-lg ${
                  selectedService === service.id ? "ring-2 ring-primary" : ""
                }`}
                onClick={() => setSelectedService(service.id)}
              >
                <CardHeader>
                  <div className="flex justify-between items-start">
                    <div>
                      <CardTitle>{service.name}</CardTitle>
                      <CardDescription className="flex items-center gap-2 mt-1">
                        <Clock className="h-4 w-4" />
                        {service.duration}
                      </CardDescription>
                    </div>
                    <Badge variant="outline" className="text-primary border-primary">
                      {service.price}
                    </Badge>
                  </div>
                </CardHeader>
              </Card>
            ))}
            <Button 
              className="w-full bg-primary hover:bg-primary/90"
              disabled={!selectedService}
              onClick={() => setStep(2)}
            >
              Lanjut ke Pilih Terapis
            </Button>
          </div>
        )}

        {/* Step 2: Select Therapist */}
        {step === 2 && (
          <div className="space-y-4">
            <h2 className="text-2xl font-semibold text-foreground mb-4">Pilih Terapis</h2>
            {therapists.map((therapist) => (
              <Card 
                key={therapist.id}
                className={`cursor-pointer transition-all hover:shadow-lg ${
                  selectedTherapist === therapist.id ? "ring-2 ring-primary" : ""
                }`}
                onClick={() => setSelectedTherapist(therapist.id)}
              >
                <CardHeader>
                  <CardTitle>{therapist.name}</CardTitle>
                  <CardDescription>Spesialisasi: {therapist.specialty}</CardDescription>
                </CardHeader>
              </Card>
            ))}
            <div className="flex gap-4">
              <Button variant="outline" onClick={() => setStep(1)} className="flex-1">
                Kembali
              </Button>
              <Button 
                className="flex-1 bg-primary hover:bg-primary/90"
                disabled={!selectedTherapist}
                onClick={() => setStep(3)}
              >
                Lanjut ke Pilih Tanggal
              </Button>
            </div>
          </div>
        )}

        {/* Step 3: Select Date */}
        {step === 3 && (
          <div className="space-y-4">
            <h2 className="text-2xl font-semibold text-foreground mb-4">Pilih Tanggal</h2>
            <Card>
              <CardContent className="pt-6 flex justify-center">
                <Calendar
                  mode="single"
                  selected={selectedDate}
                  onSelect={setSelectedDate}
                  disabled={(date) => date < new Date()}
                  className="rounded-md border pointer-events-auto"
                />
              </CardContent>
            </Card>
            <div className="flex gap-4">
              <Button variant="outline" onClick={() => setStep(2)} className="flex-1">
                Kembali
              </Button>
              <Button 
                className="flex-1 bg-primary hover:bg-primary/90"
                disabled={!selectedDate}
                onClick={() => setStep(4)}
              >
                Lanjut ke Pilih Waktu
              </Button>
            </div>
          </div>
        )}

        {/* Step 4: Select Time */}
        {step === 4 && (
          <div className="space-y-4">
            <h2 className="text-2xl font-semibold text-foreground mb-4">Pilih Waktu</h2>
            <div className="grid grid-cols-3 gap-3">
              {timeSlots.map((time) => (
                <Button
                  key={time}
                  variant={selectedTime === time ? "default" : "outline"}
                  className={selectedTime === time ? "bg-primary" : ""}
                  onClick={() => setSelectedTime(time)}
                >
                  {time}
                </Button>
              ))}
            </div>
            
            {/* Summary */}
            {selectedTime && (
              <Card className="bg-gradient-to-br from-primary/5 to-sage/5 border-sage/20">
                <CardHeader>
                  <CardTitle>Ringkasan Pemesanan</CardTitle>
                </CardHeader>
                <CardContent className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Layanan:</span>
                    <span className="font-medium">{services.find(s => s.id === selectedService)?.name}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Terapis:</span>
                    <span className="font-medium">{therapists.find(t => t.id === selectedTherapist)?.name}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Tanggal:</span>
                    <span className="font-medium">{selectedDate?.toLocaleDateString("id-ID")}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Waktu:</span>
                    <span className="font-medium">{selectedTime}</span>
                  </div>
                  <div className="flex justify-between pt-2 border-t border-border">
                    <span className="font-semibold">Total:</span>
                    <span className="text-xl font-bold text-primary">
                      {services.find(s => s.id === selectedService)?.price}
                    </span>
                  </div>
                </CardContent>
              </Card>
            )}

            <div className="flex gap-4">
              <Button variant="outline" onClick={() => setStep(3)} className="flex-1">
                Kembali
              </Button>
              <Button 
                className="flex-1 bg-primary hover:bg-primary/90"
                disabled={!selectedTime}
                onClick={handleComplete}
              >
                Konfirmasi Pemesanan
              </Button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Booking;
