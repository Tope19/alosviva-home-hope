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
    <section id="work" className="py-20 bg-muted">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-6">
            Our Impact
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Through the generous support of our donors, we've been able to transform countless lives
            and create lasting change in communities across Nigeria.
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto mb-16">
          {stats.map((stat, index) => (
            <div key={index} className="bg-card p-6 rounded-xl text-center shadow-sm">
              <div className="font-display text-3xl md:text-4xl font-bold text-primary mb-2">
                {stat.number}
              </div>
              <div className="text-sm md:text-base text-muted-foreground">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Image Showcase */}
        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          <div className="group overflow-hidden rounded-xl shadow-md hover:shadow-xl transition-all">
            <img
              src={shelterImage}
              alt="Clean shelter interior with beds"
              className="w-full h-80 object-cover group-hover:scale-105 transition-transform duration-500"
            />
            <div className="bg-card p-6">
              <h3 className="font-display text-xl font-semibold text-foreground mb-2">
                Safe Shelter Spaces
              </h3>
              <p className="text-muted-foreground">
                Clean, dignified accommodation where individuals can rest and begin their journey to
                independence.
              </p>
            </div>
          </div>

          <div className="group overflow-hidden rounded-xl shadow-md hover:shadow-xl transition-all">
            <img
              src={communityImage}
              alt="Community members sharing a meal"
              className="w-full h-80 object-cover group-hover:scale-105 transition-transform duration-500"
            />
            <div className="bg-card p-6">
              <h3 className="font-display text-xl font-semibold text-foreground mb-2">
                Building Community
              </h3>
              <p className="text-muted-foreground">
                Creating connections and support networks that help individuals thrive and succeed
                together.
              </p>
            </div>
          </div>
        </div>

        <div className="mt-12 max-w-3xl mx-auto text-center">
          <p className="text-lg text-muted-foreground leading-relaxed">
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
