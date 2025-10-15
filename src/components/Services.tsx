import { Bed, Utensils, Briefcase, Heart, Users, GraduationCap } from "lucide-react";

const Services = () => {
  const services = [
    {
      icon: Bed,
      title: "Emergency Shelter",
      description:
        "Safe, clean accommodation for individuals in immediate need, providing a secure place to rest and recover.",
    },
    {
      icon: Utensils,
      title: "Nutritious Meals",
      description:
        "Daily meals prepared with care, ensuring everyone has access to healthy, wholesome food.",
    },
    {
      icon: Briefcase,
      title: "Job Training",
      description:
        "Skills development programs that help individuals gain employment and achieve financial independence.",
    },
    {
      icon: Heart,
      title: "Healthcare Support",
      description:
        "Access to basic medical care, mental health services, and wellness programs for overall well-being.",
    },
    {
      icon: Users,
      title: "Counseling Services",
      description:
        "Professional guidance and emotional support to help individuals overcome challenges and rebuild confidence.",
    },
    {
      icon: GraduationCap,
      title: "Life Skills Education",
      description:
        "Practical training in budgeting, communication, and daily living skills for long-term success.",
    },
  ];

  return (
    <section id="services" className="py-24 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-sm font-semibold text-primary uppercase tracking-wider mb-4">
            What We Offer
          </h2>
          <h3 className="text-4xl sm:text-5xl font-bold text-foreground mb-6">
            Our Services
          </h3>
          <p className="text-xl text-muted-foreground leading-relaxed">
            We provide comprehensive support services designed to help homeless individuals rebuild
            their lives and achieve lasting independence.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <div
                key={index}
                className="bg-card border border-border p-8 rounded-lg hover:shadow-lg transition-shadow"
              >
                <div className="w-14 h-14 bg-primary rounded-lg flex items-center justify-center mb-6">
                  <Icon className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-foreground mb-4">
                  {service.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">{service.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;
