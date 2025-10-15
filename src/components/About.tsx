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
    <section id="about" className="py-24 bg-secondary">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-sm font-semibold text-primary uppercase tracking-wider mb-4">
            Our Story
          </h2>
          <h3 className="text-4xl sm:text-5xl font-bold text-foreground mb-6">
            About Alosviva
          </h3>
          <p className="text-xl text-muted-foreground leading-relaxed">
            Alosviva is a non-profit organization based in Nigeria, dedicated to breaking the cycle
            of homelessness by providing affordable accommodation and comprehensive support services.
            Our mission is to create safe, supportive environments where individuals can rebuild
            their lives with dignity and hope.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {values.map((value, index) => {
            const Icon = value.icon;
            return (
              <div
                key={index}
                className="bg-card p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow border border-border"
              >
                <div className="w-16 h-16 bg-primary rounded-lg flex items-center justify-center mb-6">
                  <Icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-foreground mb-4">
                  {value.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">{value.description}</p>
              </div>
            );
          })}
        </div>

        <div className="mt-16 max-w-4xl mx-auto text-center bg-card p-10 rounded-lg border border-border">
          <p className="text-xl text-foreground leading-relaxed mb-6">
            We rely on the generosity of philanthropists and donors to fund our work. Every
            contribution helps us provide shelter, meals, counseling, and job training to those who
            need it most.
          </p>
          <p className="text-2xl font-bold text-primary">
            Together, we can make a lasting difference in the lives of homeless individuals across Nigeria.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
