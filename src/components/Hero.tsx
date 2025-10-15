import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-image.jpg";

const Hero = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-primary"
    >
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroImage}
          alt="Community support and unity"
          className="w-full h-full object-cover opacity-20"
        />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="inline-block mb-6 px-6 py-2 bg-white/10 backdrop-blur-sm rounded-full border border-white/20">
          <span className="text-white text-sm font-medium">🏠 Building Better Futures Together</span>
        </div>
        <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold text-white mb-8 leading-tight">
          Building Hope,
          <br />
          One Shelter at a Time
        </h1>
        <p className="text-xl sm:text-2xl text-white/90 max-w-3xl mx-auto mb-12 leading-relaxed">
          Providing affordable accommodation and a supportive environment where homeless individuals
          in Nigeria can rebuild their lives with dignity and hope.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Button
            onClick={() => scrollToSection("contact")}
            size="lg"
            className="bg-white text-primary hover:bg-white/90 text-lg px-10 py-6 font-semibold"
          >
            Support Our Mission
            <span className="ml-2">→</span>
          </Button>
          <Button
            onClick={() => scrollToSection("about")}
            size="lg"
            variant="outline"
            className="bg-transparent border-2 border-white text-white hover:bg-white/10 text-lg px-10 py-6 font-semibold"
          >
            Learn More
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
