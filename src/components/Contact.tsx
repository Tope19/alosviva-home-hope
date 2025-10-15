import { Mail, Phone, MapPin, Facebook, Instagram } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { useState } from "react";

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Message Sent!",
      description: "Thank you for reaching out. We'll get back to you soon.",
    });
    setFormData({ name: "", email: "", phone: "", message: "" });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const contactInfo = [
    {
      icon: MapPin,
      label: "Address",
      value: "123 Hope Street, Lagos, Nigeria",
    },
    {
      icon: Mail,
      label: "Email",
      value: "info@alosviva.org",
      link: "mailto:info@alosviva.org",
    },
    {
      icon: Phone,
      label: "Phone",
      value: "+234 (0) 123 456 7890",
      link: "tel:+2341234567890",
    },
  ];

  const socialLinks = [
    {
      icon: Facebook,
      label: "Facebook",
      url: "https://facebook.com/alosviva",
    },
    {
      icon: Instagram,
      label: "Instagram",
      url: "https://instagram.com/alosviva",
    },
    {
      icon: ({ className }: { className?: string }) => (
        <svg className={className} fill="currentColor" viewBox="0 0 24 24">
          <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
        </svg>
      ),
      label: "X (Twitter)",
      url: "https://x.com/alosviva",
    },
  ];

  return (
    <section id="contact" className="py-24 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-sm font-semibold text-primary uppercase tracking-wider mb-4">
            Connect With Us
          </h2>
          <h3 className="text-4xl sm:text-5xl font-bold text-foreground mb-6">
            Get In Touch
          </h3>
          <p className="text-xl text-muted-foreground leading-relaxed">
            Have questions or want to support our mission? We'd love to hear from you. Reach out
            through any of the channels below.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Form */}
          <div className="bg-card p-10 rounded-lg shadow-md border border-border">
            <h3 className="text-3xl font-bold text-foreground mb-8">
              Send Us a Message
            </h3>
            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                  Full Name
                </label>
                <Input
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="John Doe"
                  required
                  className="w-full"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                  Email Address
                </label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="john@example.com"
                  required
                  className="w-full"
                />
              </div>
              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-foreground mb-2">
                  Phone Number
                </label>
                <Input
                  id="phone"
                  name="phone"
                  type="tel"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="+234 (0) 123 456 7890"
                  className="w-full"
                />
              </div>
              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-foreground mb-2"
                >
                  Message
                </label>
                <Textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Tell us how you'd like to help or any questions you have..."
                  required
                  rows={5}
                  className="w-full"
                />
              </div>
              <Button
                type="submit"
                className="w-full bg-primary hover:bg-primary/90 text-white py-6 font-semibold text-lg"
              >
                Send Message →
              </Button>
            </form>
          </div>

          {/* Contact Information */}
          <div className="space-y-8">
            <div className="bg-card p-8 rounded-lg shadow-md border border-border">
              <h3 className="text-3xl font-bold text-foreground mb-8">
                Contact Information
              </h3>
              <div className="space-y-6">
                {contactInfo.map((info, index) => {
                  const Icon = info.icon;
                  return (
                    <div key={index} className="flex items-start gap-5">
                      <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center flex-shrink-0">
                        <Icon className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <div className="font-bold text-foreground mb-2">{info.label}</div>
                        {info.link ? (
                          <a
                            href={info.link}
                            className="text-muted-foreground hover:text-primary transition-colors"
                          >
                            {info.value}
                          </a>
                        ) : (
                          <div className="text-muted-foreground">{info.value}</div>
                        )}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            <div className="bg-card p-8 rounded-lg shadow-md border border-border">
              <h3 className="text-3xl font-bold text-foreground mb-8">
                Follow Us
              </h3>
              <div className="flex gap-4">
                {socialLinks.map((social, index) => {
                  const Icon = social.icon;
                  return (
                    <a
                      key={index}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-14 h-14 bg-primary rounded-lg flex items-center justify-center hover:bg-primary/90 transition-colors"
                      aria-label={social.label}
                    >
                      <Icon className="w-7 h-7 text-white" />
                    </a>
                  );
                })}
              </div>
            </div>

            <div className="bg-primary p-8 rounded-lg shadow-lg">
              <h4 className="text-2xl font-bold text-white mb-4">
                Make a Donation
              </h4>
              <p className="text-white/90 mb-6 leading-relaxed">
                Your generous contribution helps us provide shelter, meals, and support services to
                those in need.
              </p>
              <Button className="w-full bg-white text-primary hover:bg-white/90 py-6 font-semibold text-lg">
                Donate Now →
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
