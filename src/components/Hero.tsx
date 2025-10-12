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
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroImage}
          alt="Community support and unity"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-secondary/95 via-secondary/90 to-secondary/85" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h1 className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 animate-fade-in">
          Building Hope,
          <br />
          One Shelter at a Time
        </h1>
        <p className="text-lg sm:text-xl md:text-2xl text-white/90 max-w-3xl mx-auto mb-10 leading-relaxed">
          Providing affordable accommodation and a supportive environment where homeless individuals
          in Nigeria can rebuild their lives with dignity and hope.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Button
            onClick={() => scrollToSection("contact")}
            size="lg"
            className="bg-primary hover:bg-primary/90 text-primary-foreground text-lg px-8 py-6 shadow-lg hover:shadow-xl transition-all"
          >
            Support Our Mission
          </Button>
          <Button
            onClick={() => scrollToSection("about")}
            size="lg"
            className="bg-primary hover:bg-primary/90 text-primary-foreground text-lg px-8 py-6 shadow-lg hover:shadow-xl transition-all"
          >
            Learn More
          </Button>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center p-2">
          <div className="w-1.5 h-3 bg-white/50 rounded-full" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
