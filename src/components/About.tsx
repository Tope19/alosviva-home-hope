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
    <section id="about" className="py-20 bg-muted">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-6">
            About Alosviva
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Alosviva is a non-profit organization based in Nigeria, dedicated to breaking the cycle
            of homelessness by providing affordable accommodation and comprehensive support services.
            Our mission is to create safe, supportive environments where individuals can rebuild
            their lives with dignity and hope.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {values.map((value, index) => (
            <div
              key={index}
              className="bg-card p-8 rounded-xl shadow-sm hover:shadow-md transition-all group"
            >
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors">
                <value.icon className="w-8 h-8 text-primary" />
              </div>
              <h3 className="font-display text-2xl font-semibold text-foreground mb-3">
                {value.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">{value.description}</p>
            </div>
          ))}
        </div>

        <div className="mt-16 max-w-3xl mx-auto text-center">
          <p className="text-lg text-muted-foreground leading-relaxed">
            We rely on the generosity of philanthropists and donors to fund our work. Every
            contribution helps us provide shelter, meals, counseling, and job training to those who
            need it most. Together, we can make a lasting difference in the lives of homeless
            individuals across Nigeria.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
