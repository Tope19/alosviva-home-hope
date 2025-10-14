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
    <section id="services" className="py-24 bg-white relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-secondary/5" />
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-3xl mx-auto text-center mb-20">
          <div className="inline-block mb-4 px-5 py-2 bg-gradient-to-r from-primary/10 to-secondary/10 rounded-full">
            <span className="text-primary text-sm font-semibold uppercase tracking-wider">What We Offer</span>
          </div>
          <h2 className="font-display text-5xl md:text-6xl font-bold bg-gradient-to-r from-secondary via-primary to-accent bg-clip-text text-transparent mb-6">
            Our Services
          </h2>
          <p className="text-xl text-foreground/80 leading-relaxed">
            We provide comprehensive support services designed to help homeless individuals rebuild
            their lives and achieve lasting independence.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {services.map((service, index) => (
            <div
              key={index}
              className="group relative bg-white border-2 border-border/50 p-8 rounded-3xl hover:border-transparent hover:shadow-2xl transition-all duration-500 overflow-hidden"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Gradient background on hover */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-secondary/5 to-accent/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              <div className="relative z-10">
                <div className="w-16 h-16 bg-gradient-to-br from-primary to-secondary rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 shadow-lg group-hover:shadow-xl">
                  <service.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="font-display text-2xl font-bold text-foreground mb-4 group-hover:text-primary transition-colors">
                  {service.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed text-base">{service.description}</p>
              </div>
              
              {/* Hover accent line */}
              <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-primary via-secondary to-accent transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
