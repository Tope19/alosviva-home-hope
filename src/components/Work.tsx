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
    <section id="work" className="py-24 bg-secondary">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-sm font-semibold text-primary uppercase tracking-wider mb-4">
            Making A Difference
          </h2>
          <h3 className="text-4xl sm:text-5xl font-bold text-foreground mb-6">
            Our Impact
          </h3>
          <p className="text-xl text-muted-foreground leading-relaxed">
            Through the generous support of our donors, we've been able to transform countless lives
            and create lasting change in communities across Nigeria.
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto mb-16">
          {stats.map((stat, index) => (
            <div 
              key={index} 
              className="bg-card p-8 rounded-lg text-center shadow-md hover:shadow-lg transition-shadow border border-border"
            >
              <div className="text-4xl md:text-5xl font-bold text-primary mb-3">
                {stat.number}
              </div>
              <div className="text-sm md:text-base font-semibold text-muted-foreground">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Image Showcase */}
        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          <div className="overflow-hidden rounded-lg shadow-lg">
            <img
              src={shelterImage}
              alt="Clean shelter interior with beds"
              className="w-full h-96 object-cover"
            />
            <div className="bg-card p-8 border border-border border-t-0">
              <h3 className="text-2xl font-bold text-foreground mb-3">
                Safe Shelter Spaces
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                Clean, dignified accommodation where individuals can rest and begin their journey to
                independence.
              </p>
            </div>
          </div>

          <div className="overflow-hidden rounded-lg shadow-lg">
            <img
              src={communityImage}
              alt="Community members sharing a meal"
              className="w-full h-96 object-cover"
            />
            <div className="bg-card p-8 border border-border border-t-0">
              <h3 className="text-2xl font-bold text-foreground mb-3">
                Building Community
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                Creating connections and support networks that help individuals thrive and succeed
                together.
              </p>
            </div>
          </div>
        </div>

        <div className="mt-16 max-w-4xl mx-auto text-center bg-card p-10 rounded-lg border border-border">
          <p className="text-xl text-foreground leading-relaxed">
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
