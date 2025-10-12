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
    <section id="services" className="py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-6">
            Our Services
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            We provide comprehensive support services designed to help homeless individuals rebuild
            their lives and achieve lasting independence.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {services.map((service, index) => (
            <div
              key={index}
              className="group bg-card border border-border p-6 rounded-xl hover:border-primary/50 hover:shadow-lg transition-all"
            >
              <div className="w-14 h-14 bg-primary/10 rounded-lg flex items-center justify-center mb-5 group-hover:bg-primary group-hover:scale-110 transition-all">
                <service.icon className="w-7 h-7 text-primary group-hover:text-primary-foreground transition-colors" />
              </div>
              <h3 className="font-display text-xl font-semibold text-foreground mb-3">
                {service.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
