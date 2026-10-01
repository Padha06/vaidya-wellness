"use client";
import { Fragment, Suspense, useMemo, useState } from "react";
import { useSearchParams } from "next/navigation";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import confetti from "canvas-confetti";
import { toast } from "sonner";
import { ArrowLeft, ArrowRight, CheckCircle2, Video, Building2, Phone } from "lucide-react";
import { doctors, timeSlots, type Doctor } from "@/lib/mockData";
import { DoctorCard } from "@/components/DoctorCard";
import { CalendarLite } from "@/components/ui/calendar";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input, Textarea, Label } from "@/components/ui/form";
import { cn } from "@/lib/utils";

const detailsSchema = z.object({
  patient_name: z.string().min(2, "Please enter your full name"),
  patient_email: z.string().email("Enter a valid email"),
  patient_phone: z.string().min(8, "Enter a valid phone number"),
  patient_age: z.coerce.number().min(1, "Enter age").max(120, "Enter a valid age"),
  symptoms: z.string().min(5, "Briefly describe your concern (min 5 chars)")
});
type Details = z.infer<typeof detailsSchema>;

const types = [
  { id: "Video", icon: Video },
  { id: "Clinic Visit", icon: Building2 },
  { id: "Phone", icon: Phone }
];

export default function BookPage() {
  return (
    <Suspense fallback={<div className="mx-auto max-w-4xl px-4 py-12 text-center">Loading booking…</div>}>
      <BookWizard />
    </Suspense>
  );
}

function BookWizard() {
  const params = useSearchParams();
  const preselected = params.get("doctor");
  const [step, setStep] = useState(1);
  const [doctorId, setDoctorId] = useState<string | null>(preselected && doctors.some((d) => d.id === preselected) ? preselected : null);
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [consultType, setConsultType] = useState("Video");
  const [submitting, setSubmitting] = useState(false);
  const [confirmed, setConfirmed] = useState<(Details & { bookingId: string }) | null>(null);

  const doctor: Doctor | undefined = useMemo(() => doctors.find((d) => d.id === doctorId), [doctorId]);

  const { register, handleSubmit, formState: { errors }, getValues } = useForm<Details>({
    resolver: zodResolver(detailsSchema)
  });

  const canNext1 = Boolean(doctorId);
  const canNext2 = Boolean(date && time && consultType);

  async function onConfirm(values: Details) {
    setSubmitting(true);
    try {
      const res = await fetch("/api/bookings", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          doctor_id: doctorId,
          consultation_type: consultType,
          appointment_date: date,
          appointment_time: time,
          ...values
        })
      });
      const json = await res.json();
      if (!res.ok && !json.ok) throw new Error(json.error || "Booking failed");
      setConfirmed({ ...values, bookingId: json.id ?? `mock-${Date.now()}` });
      confetti({ particleCount: 140, spread: 75, origin: { y: 0.6 } });
      toast.success("Booking confirmed!");
      setStep(4);
    } catch (e) {
      toast.error(e instanceof Error ? e.message : "Booking failed. Please retry.");
    } finally {
      setSubmitting(false);
    }
  }

  function reset() {
    setStep(1);
    setDoctorId(null);
    setDate("");
    setTime("");
    setConsultType("Video");
    setConfirmed(null);
  }

  return (
    <div className="mx-auto max-w-4xl px-3 sm:px-4 py-8 sm:py-12">
      {/* SWITCH BANNER TO PHARMACY */}
      <div className="mb-6 flex flex-col sm:flex-row items-center justify-between gap-3 rounded-2xl bg-gold-muted/70 p-3 sm:p-4 border border-gold/40 text-xs sm:text-sm">
        <div className="flex items-center gap-2 text-forest font-medium text-center sm:text-left">
          <span className="font-semibold text-gold-dark">🌿 Looking for pharmacy products instead?</span>
          <span className="hidden sm:inline text-stone-600">— Classical herbal oils & supplements</span>
        </div>
        <a href="/products" className="w-full sm:w-auto">
          <Button variant="outline" size="sm" className="w-full sm:w-auto text-xs py-1.5 px-3 border-gold text-forest">
            Explore Pharmacy Products <ArrowRight size={13} />
          </Button>
        </a>
      </div>

      <h1 className="text-center font-serif text-2xl sm:text-3xl md:text-4xl text-forest">
        Book your consultation
      </h1>
      <p className="mt-1 text-center text-xs sm:text-sm text-stone-500">
        Choose your Vaidya specialist, pick a preferred slot, and start your healing journey.
      </p>

      {/* Stepper */}
      <div className="mx-auto mt-6 flex max-w-lg items-start text-xs font-medium">
        {["Doctor", "Date & Time", "Details", "Confirm"].map((label, i) => (
          <Fragment key={label}>
            <div className="flex flex-col items-center gap-1">
              <span
                className={cn(
                  "flex h-7 w-7 sm:h-8 sm:w-8 items-center justify-center rounded-full text-xs font-semibold transition-all",
                  step > i + 1 ? "bg-forest text-white" : step === i + 1 ? "bg-gold text-ink ring-2 ring-gold/40" : "bg-stone-200 text-stone-500"
                )}
              >
                {step > i + 1 ? "✓" : i + 1}
              </span>
              <span className={cn("text-[10px] sm:text-xs", step === i + 1 ? "text-forest font-semibold" : "text-stone-400")}>{label}</span>
            </div>
            {i < 3 && <div className={cn("mx-1.5 sm:mx-2 mt-[13px] sm:mt-[15px] h-0.5 flex-1 transition-colors", step > i + 1 ? "bg-forest" : "bg-stone-200")} />}
          </Fragment>
        ))}
      </div>

      <div className="mt-6 sm:mt-8">
        {step === 1 && (
          <div>
            <div className="grid gap-5 md:grid-cols-3">
              {doctors.map((d) => (
                <DoctorCard key={d.id} doctor={d} selected={doctorId === d.id} onSelect={() => setDoctorId(d.id)} />
              ))}
            </div>
            <div className="mt-6 flex justify-end">
              <Button disabled={!canNext1} onClick={() => setStep(2)}>
                Next <ArrowRight size={16} />
              </Button>
            </div>
          </div>
        )}

        {step === 2 && (
          <div className="grid gap-6 md:grid-cols-2">
            <CalendarLite value={date} onChange={setDate} />
            <div>
              <Label>Time slot</Label>
              <div className="grid grid-cols-2 gap-2">
                {timeSlots.map((t) => (
                  <button
                    key={t}
                    type="button"
                    onClick={() => setTime(t)}
                    className={cn(
                      "rounded-xl border px-3 py-2.5 text-sm transition",
                      time === t ? "border-forest bg-forest text-white" : "border-stone-300 bg-white hover:border-forest"
                    )}
                  >
                    {t}
                  </button>
                ))}
              </div>
              <Label className="mt-5">Consultation type</Label>
              <div className="grid grid-cols-3 gap-2">
                {types.map((t) => (
                  <button
                    key={t.id}
                    type="button"
                    onClick={() => setConsultType(t.id)}
                    className={cn(
                      "flex min-h-[72px] flex-col items-center justify-center gap-1 rounded-xl border px-1 py-3 text-center text-[11px] sm:text-xs transition",
                      consultType === t.id ? "border-forest bg-forest-muted font-semibold text-forest" : "border-stone-300 bg-white"
                    )}
                  >
                    <t.icon size={18} /> {t.id}
                  </button>
                ))}
              </div>
              <div className="mt-6 flex justify-between">
                <Button variant="outline" onClick={() => setStep(1)}><ArrowLeft size={16} /> Back</Button>
                <Button disabled={!canNext2} onClick={() => setStep(3)}>Next <ArrowRight size={16} /></Button>
              </div>
            </div>
          </div>
        )}

        {step === 3 && (
          <Card>
            <CardContent>
              <form onSubmit={handleSubmit(onConfirm)} className="grid gap-4">
                <div className="grid gap-4 md:grid-cols-2">
                  <div>
                    <Label>Full Name</Label>
                    <Input placeholder="Meera Nair" {...register("patient_name")} />
                    {errors.patient_name && <p className="mt-1 text-xs text-red-600">{errors.patient_name.message}</p>}
                  </div>
                  <div>
                    <Label>Email</Label>
                    <Input placeholder="you@example.com" {...register("patient_email")} />
                    {errors.patient_email && <p className="mt-1 text-xs text-red-600">{errors.patient_email.message}</p>}
                  </div>
                  <div>
                    <Label>Phone</Label>
                    <Input placeholder="+91 98200 12345" {...register("patient_phone")} />
                    {errors.patient_phone && <p className="mt-1 text-xs text-red-600">{errors.patient_phone.message}</p>}
                  </div>
                  <div>
                    <Label>Age</Label>
                    <Input type="number" placeholder="34" {...register("patient_age")} />
                    {errors.patient_age && <p className="mt-1 text-xs text-red-600">{errors.patient_age.message}</p>}
                  </div>
                </div>
                <div>
                  <Label>Brief Symptoms</Label>
                  <Textarea rows={4} placeholder="e.g. Bloating after meals, poor sleep for 2 months…" {...register("symptoms")} />
                  {errors.symptoms && <p className="mt-1 text-xs text-red-600">{errors.symptoms.message}</p>}
                </div>
                <div className="flex justify-between pt-2">
                  <Button type="button" variant="outline" onClick={() => setStep(2)}><ArrowLeft size={16} /> Back</Button>
                  <Button type="submit" disabled={submitting}>{submitting ? "Booking…" : "Review & Confirm"}</Button>
                </div>
              </form>
            </CardContent>
          </Card>
        )}

        {step === 4 && (
          <Card>
            <CardContent className="text-center">
              <CheckCircle2 size={52} className="mx-auto text-forest" />
              <h2 className="mt-3 font-serif text-3xl text-forest">Booking Confirmed</h2>
              <p className="mt-2 text-sm text-stone-500">
                {confirmed ? (
                  <>You&apos;ll receive an email at <strong>{confirmed.patient_email}</strong>. Ref: {confirmed.bookingId}</>
                ) : (
                  "Your appointment request has been received."
                )}
              </p>
              {doctor && (
                <div className="mx-auto mt-5 max-w-md rounded-2xl bg-cream p-4 text-left text-sm">
                  <p><strong>Vaidya:</strong> {doctor.name} ({doctor.specialization})</p>
                  <p><strong>Date:</strong> {date} · <strong>Time:</strong> {time}</p>
                  <p><strong>Type:</strong> {consultType}</p>
                  {confirmed && <p><strong>Patient:</strong> {confirmed.patient_name}</p>}
                </div>
              )}
              <div className="mt-6 flex justify-center gap-3">
                <Button variant="outline" onClick={reset}>Book Another</Button>
              </div>
            </CardContent>
          </Card>
        )}
      </div>
    </div>
  );
}
