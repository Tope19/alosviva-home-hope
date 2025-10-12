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
    <section id="contact" className="py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-6">
            Get In Touch
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Have questions or want to support our mission? We'd love to hear from you. Reach out
            through any of the channels below.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          {/* Contact Information */}
          <div className="space-y-8">
            <div>
              <h3 className="font-display text-2xl font-semibold text-foreground mb-6">
                Contact Information
              </h3>
              <div className="space-y-5">
                {contactInfo.map((info, index) => (
                  <div key={index} className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <info.icon className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <div className="font-medium text-foreground mb-1">{info.label}</div>
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
                ))}
              </div>
            </div>

            <div>
              <h3 className="font-display text-2xl font-semibold text-foreground mb-6">
                Follow Us
              </h3>
              <div className="flex gap-4">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-all group"
                    aria-label={social.label}
                  >
                    <social.icon className="w-6 h-6 text-primary group-hover:text-primary-foreground transition-colors" />
                  </a>
                ))}
              </div>
            </div>

            <div className="bg-accent/10 p-6 rounded-xl border border-accent/20">
              <h4 className="font-display text-xl font-semibold text-foreground mb-3">
                Make a Donation
              </h4>
              <p className="text-muted-foreground mb-4">
                Your generous contribution helps us provide shelter, meals, and support services to
                those in need.
              </p>
              <Button className="w-full bg-accent hover:bg-accent/90 text-accent-foreground">
                Donate Now
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
