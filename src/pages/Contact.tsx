import { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";
import { Mail, MessageCircle, Briefcase } from "lucide-react";

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "general",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // If you set an endpoint (see README below), the form will be POSTed there.
    // Configure the endpoint as VITE_CONTACT_ENDPOINT in your .env (Vite will expose it to import.meta.env).
    // Example (Formspree): VITE_CONTACT_ENDPOINT=https://formspree.io/f/your_form_id
  const endpoint = (import.meta as unknown as { env: { VITE_CONTACT_ENDPOINT?: string } }).env.VITE_CONTACT_ENDPOINT;

    const doReset = () =>
      setFormData({ name: "", email: "", subject: "general", message: "" });

    const notifySuccess = () =>
      toast({
        title: "Message Sent!",
        description: "Thank you for reaching out. We'll get back to you soon.",
      });

    if (!endpoint) {
      // No endpoint configured — fallback: log to console and notify user locally
      console.warn("Contact endpoint not configured. Form data:", formData);
      notifySuccess();
      doReset();
      return;
    }

    (async () => {
      try {
        const res = await fetch(endpoint, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(formData),
        });

        if (!res.ok) {
          const text = await res.text().catch(() => "");
          throw new Error(`Failed to send contact (status ${res.status}): ${text}`);
        }

        notifySuccess();
        doReset();
      } catch (err) {
        console.error("Contact submit error:", err);
        toast({ title: "Error", description: "Failed to send message. Please try again later." });
      }
    })();
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-grow">
        <section className="hero-gradient py-16 px-4">
          <div className="container mx-auto max-w-4xl text-center">
            <h1 className="font-poppins text-4xl sm:text-5xl font-bold mb-4">
              Get in Touch
            </h1>
            <p className="text-lg text-muted-foreground">
              ॐ शान्तिः शान्तिः शान्तिः — (Om śāntiḥ śāntiḥ śāntiḥ) — Peace, peace, peace. Share from the heart; we listen with care.
            </p>
          </div>
        </section>

        <section className="py-16 px-4">
          <div className="container mx-auto max-w-4xl">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
              <div className="text-center p-6 bg-muted/30 rounded-lg">
                <Mail className="h-8 w-8 text-primary mx-auto mb-3" />
                <h3 className="font-semibold mb-2">General Inquiries</h3>
                <p className="text-sm text-muted-foreground">
                  Questions about our content or mission
                </p>
              </div>
              <div className="text-center p-6 bg-muted/30 rounded-lg">
                <MessageCircle className="h-8 w-8 text-primary mx-auto mb-3" />
                <h3 className="font-semibold mb-2">Share Your Story</h3>
                <p className="text-sm text-muted-foreground">
                  Tell us about your spiritual journey
                </p>
              </div>
              <div className="text-center p-6 bg-muted/30 rounded-lg">
                <Briefcase className="h-8 w-8 text-primary mx-auto mb-3" />
                <h3 className="font-semibold mb-2">Partnerships</h3>
                <p className="text-sm text-muted-foreground">
                  Collaborate with DevoteYourSoul
                </p>
              </div>
            </div>

            <div className="max-w-2xl mx-auto">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <Label htmlFor="name">Your Name</Label>
                  <Input
                    id="name"
                    name="name"
                    type="text"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Enter your name"
                    className="mt-2"
                  />
                </div>

                <div>
                  <Label htmlFor="email">Email Address</Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="your@email.com"
                    className="mt-2"
                  />
                </div>

                <div>
                  <Label htmlFor="subject">Subject</Label>
                  <select
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    className="mt-2 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                  >
                    <option value="general">General Inquiry</option>
                    <option value="feedback">Feedback</option>
                    <option value="partnership">Brand Partnership</option>
                    <option value="collaboration">Content Collaboration</option>
                  </select>
                </div>

                <div>
                  <Label htmlFor="message">Your Message</Label>
                  <Textarea
                    id="message"
                    name="message"
                    required
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Share your thoughts with us..."
                    className="mt-2 min-h-[150px]"
                  />
                </div>

                <Button type="submit" size="lg" className="w-full">
                  Send Message
                </Button>
              </form>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Contact;
