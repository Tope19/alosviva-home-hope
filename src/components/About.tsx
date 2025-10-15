import { Heart, Users, Home } from "lucide-react";

const About = () => {
  const values = [
    {
      icon: Heart,
      title: "Compassion",
      description: "We treat every individual with dignity, respect, and kindness.",
    },
    {
      icon: Users,
      title: "Community",
      description: "Building strong support networks to help people thrive together.",
    },
    {
      icon: Home,
      title: "Safety",
      description: "Creating secure, welcoming spaces where lives can be rebuilt.",
    },
  ];

  return (
    <section id="about" className="py-24 bg-gradient-to-br from-background via-muted to-background relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-secondary/5 rounded-full blur-3xl" />
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-3xl mx-auto text-center mb-20">
          <div className="inline-block mb-4 px-5 py-2 bg-primary/10 rounded-full">
            <span className="text-primary text-sm font-semibold uppercase tracking-wider">Our Story</span>
          </div>
          <h2 className="font-display text-5xl md:text-6xl font-bold bg-gradient-to-r from-primary via-secondary to-primary bg-clip-text text-transparent mb-6">
            About Alosviva
          </h2>
          <p className="text-xl text-foreground/80 leading-relaxed">
            Alosviva is a non-profit organization based in Nigeria, dedicated to breaking the cycle
            of homelessness by providing affordable accommodation and comprehensive support services.
            Our mission is to create safe, supportive environments where individuals can rebuild
            their lives with dignity and hope.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {values.map((value, index) => (
            <div
              key={index}
              className="relative bg-card p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 group border border-border/50 hover:border-primary/30"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="relative z-10">
                <div className="w-20 h-20 bg-gradient-to-br from-primary to-secondary rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-500 shadow-lg">
                  <value.icon className="w-10 h-10 text-white" />
                </div>
                <h3 className="font-display text-2xl font-bold text-foreground mb-4 group-hover:text-primary transition-colors">
                  {value.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed text-lg">{value.description}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-20 max-w-4xl mx-auto text-center bg-gradient-to-r from-accent/10 via-primary/10 to-secondary/10 p-10 rounded-3xl border border-accent/20">
          <p className="text-xl text-foreground/90 leading-relaxed mb-6">
            We rely on the generosity of philanthropists and donors to fund our work. Every
            contribution helps us provide shelter, meals, counseling, and job training to those who
            need it most.
          </p>
          <p className="text-2xl font-display font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
            Together, we can make a lasting difference in the lives of homeless individuals across Nigeria.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
