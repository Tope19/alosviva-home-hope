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
    <section id="contact" className="py-24 bg-white relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-gradient-to-br from-secondary/5 via-transparent to-primary/5" />
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-3xl mx-auto text-center mb-20">
          <div className="inline-block mb-4 px-5 py-2 bg-gradient-to-r from-accent/10 to-primary/10 rounded-full">
            <span className="text-accent text-sm font-semibold uppercase tracking-wider">Connect With Us</span>
          </div>
          <h2 className="font-display text-5xl md:text-6xl font-bold bg-gradient-to-r from-accent via-primary to-secondary bg-clip-text text-transparent mb-6">
            Get In Touch
          </h2>
          <p className="text-xl text-foreground/80 leading-relaxed">
            Have questions or want to support our mission? We'd love to hear from you. Reach out
            through any of the channels below.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Form */}
          <div className="bg-card p-10 rounded-3xl shadow-xl border-2 border-border/50 hover:border-primary/30 transition-all duration-500">
            <h3 className="font-display text-3xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent mb-8">
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
                className="w-full bg-gradient-to-r from-primary to-secondary hover:opacity-90 text-white py-6 rounded-xl font-semibold text-lg shadow-lg hover:shadow-xl transition-all"
              >
                Send Message →
              </Button>
            </form>
          </div>

          {/* Contact Information */}
          <div className="space-y-8">
            <div className="bg-card p-8 rounded-3xl shadow-lg border border-border/50">
              <h3 className="font-display text-3xl font-bold bg-gradient-to-r from-accent to-primary bg-clip-text text-transparent mb-8">
                Contact Information
              </h3>
              <div className="space-y-6">
                {contactInfo.map((info, index) => (
                  <div key={index} className="flex items-start gap-5 group">
                    <div className="w-14 h-14 bg-gradient-to-br from-primary to-secondary rounded-2xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300 shadow-md">
                      <info.icon className="w-7 h-7 text-white" />
                    </div>
                    <div>
                      <div className="font-bold text-foreground mb-2 text-lg">{info.label}</div>
                      {info.link ? (
                        <a
                          href={info.link}
                          className="text-muted-foreground hover:text-primary transition-colors text-lg"
                        >
                          {info.value}
                        </a>
                      ) : (
                        <div className="text-muted-foreground text-lg">{info.value}</div>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-card p-8 rounded-3xl shadow-lg border border-border/50">
              <h3 className="font-display text-3xl font-bold bg-gradient-to-r from-secondary to-accent bg-clip-text text-transparent mb-8">
                Follow Us
              </h3>
              <div className="flex gap-4">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-16 h-16 bg-gradient-to-br from-primary to-secondary rounded-2xl flex items-center justify-center hover:scale-110 hover:rotate-6 transition-all duration-300 group shadow-lg"
                    aria-label={social.label}
                  >
                    <social.icon className="w-8 h-8 text-white" />
                  </a>
                ))}
              </div>
            </div>

            <div className="bg-gradient-to-br from-accent via-primary to-secondary p-8 rounded-3xl shadow-2xl">
              <h4 className="font-display text-2xl font-bold text-white mb-4">
                Make a Donation
              </h4>
              <p className="text-white/90 mb-6 text-lg leading-relaxed">
                Your generous contribution helps us provide shelter, meals, and support services to
                those in need.
              </p>
              <Button className="w-full bg-white text-primary hover:bg-white/90 py-6 rounded-xl font-semibold text-lg shadow-lg hover:shadow-xl transition-all">
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
