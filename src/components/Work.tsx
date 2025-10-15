import shelterImage from "@/assets/shelter-interior.jpg";
import communityImage from "@/assets/community-meal.jpg";

const Work = () => {
  const stats = [
    { number: "500+", label: "Lives Impacted" },
    { number: "50+", label: "Shelter Beds" },
    { number: "1000+", label: "Meals Served Monthly" },
    { number: "85%", label: "Employment Success Rate" },
  ];

  return (
    <section id="work" className="py-24 bg-gradient-to-br from-muted via-background to-muted relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-20 left-10 w-80 h-80 bg-accent/10 rounded-full blur-3xl" />
      <div className="absolute bottom-20 right-10 w-80 h-80 bg-primary/10 rounded-full blur-3xl" />
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-3xl mx-auto text-center mb-20">
          <div className="inline-block mb-4 px-5 py-2 bg-gradient-to-r from-secondary/10 to-primary/10 rounded-full">
            <span className="text-secondary text-sm font-semibold uppercase tracking-wider">Making A Difference</span>
          </div>
          <h2 className="font-display text-5xl md:text-6xl font-bold bg-gradient-to-r from-primary via-accent to-secondary bg-clip-text text-transparent mb-6">
            Our Impact
          </h2>
          <p className="text-xl text-foreground/80 leading-relaxed">
            Through the generous support of our donors, we've been able to transform countless lives
            and create lasting change in communities across Nigeria.
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto mb-20">
          {stats.map((stat, index) => (
            <div 
              key={index} 
              className="relative bg-card p-8 rounded-2xl text-center shadow-lg hover:shadow-2xl transition-all duration-500 border border-border/50 hover:border-primary/30 group"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-secondary/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="relative z-10">
                <div className="font-display text-4xl md:text-5xl font-bold bg-gradient-to-br from-primary to-secondary bg-clip-text text-transparent mb-3 group-hover:scale-110 transition-transform duration-500">
                  {stat.number}
                </div>
                <div className="text-sm md:text-base font-semibold text-foreground/70">{stat.label}</div>
              </div>
            </div>
          ))}
        </div>

        {/* Image Showcase */}
        <div className="grid md:grid-cols-2 gap-10 max-w-6xl mx-auto">
          <div className="group relative overflow-hidden rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-500">
            <div className="overflow-hidden">
              <img
                src={shelterImage}
                alt="Clean shelter interior with beds"
                className="w-full h-96 object-cover group-hover:scale-110 transition-transform duration-700"
              />
            </div>
            <div className="bg-card p-8 relative">
              <div className="absolute top-0 left-0 w-20 h-1 bg-gradient-to-r from-primary to-secondary" />
              <h3 className="font-display text-2xl font-bold text-foreground mb-3 mt-2 group-hover:text-primary transition-colors">
                Safe Shelter Spaces
              </h3>
              <p className="text-muted-foreground text-lg leading-relaxed">
                Clean, dignified accommodation where individuals can rest and begin their journey to
                independence.
              </p>
            </div>
          </div>

          <div className="group relative overflow-hidden rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-500">
            <div className="overflow-hidden">
              <img
                src={communityImage}
                alt="Community members sharing a meal"
                className="w-full h-96 object-cover group-hover:scale-110 transition-transform duration-700"
              />
            </div>
            <div className="bg-card p-8 relative">
              <div className="absolute top-0 left-0 w-20 h-1 bg-gradient-to-r from-accent to-primary" />
              <h3 className="font-display text-2xl font-bold text-foreground mb-3 mt-2 group-hover:text-accent transition-colors">
                Building Community
              </h3>
              <p className="text-muted-foreground text-lg leading-relaxed">
                Creating connections and support networks that help individuals thrive and succeed
                together.
              </p>
            </div>
          </div>
        </div>

        <div className="mt-20 max-w-4xl mx-auto text-center bg-gradient-to-r from-primary/10 via-accent/10 to-secondary/10 p-10 rounded-3xl border border-primary/20">
          <p className="text-xl text-foreground/90 leading-relaxed">
            Every donation, no matter the size, brings us closer to our goal of ending homelessness
            in Nigeria. Your support directly funds shelter operations, meal programs, and training
            initiatives that change lives.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Work;
