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
      {/* Gradient Background with Image */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-br from-primary via-secondary to-primary opacity-95" />
        <img
          src={heroImage}
          alt="Community support and unity"
          className="w-full h-full object-cover mix-blend-overlay opacity-30"
        />
        {/* Animated gradient orbs */}
        <div className="absolute top-20 left-20 w-96 h-96 bg-accent/30 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-secondary/20 rounded-full blur-3xl animate-float" style={{ animationDelay: "1s" }} />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="inline-block mb-6 px-6 py-2 bg-white/10 backdrop-blur-sm rounded-full border border-white/20 animate-fade-in">
          <span className="text-white/90 text-sm font-medium">🏠 Building Better Futures Together</span>
        </div>
        <h1 className="font-display text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold text-white mb-8 animate-fade-in-up leading-tight">
          Building Hope,
          <br />
          <span className="bg-gradient-to-r from-accent to-white bg-clip-text text-transparent">
            One Shelter at a Time
          </span>
        </h1>
        <p className="text-xl sm:text-2xl md:text-3xl text-white/90 max-w-4xl mx-auto mb-12 leading-relaxed animate-fade-in" style={{ animationDelay: "0.2s" }}>
          Providing affordable accommodation and a supportive environment where homeless individuals
          in Nigeria can rebuild their lives with dignity and hope.
        </p>
        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center animate-scale-in" style={{ animationDelay: "0.4s" }}>
          <Button
            onClick={() => scrollToSection("contact")}
            size="lg"
            className="group bg-white text-primary hover:bg-white/90 text-lg px-10 py-7 shadow-2xl hover:shadow-[0_20px_60px_rgba(255,255,255,0.3)] transition-all font-semibold rounded-full"
          >
            <span className="relative z-10">Support Our Mission</span>
            <span className="ml-2 group-hover:translate-x-1 transition-transform inline-block">→</span>
          </Button>
          <Button
            onClick={() => scrollToSection("about")}
            size="lg"
            className="bg-white/10 backdrop-blur-sm border-2 border-white/30 text-white hover:bg-white/20 text-lg px-10 py-7 shadow-lg hover:shadow-xl transition-all font-semibold rounded-full"
          >
            Learn More
          </Button>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-12 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-12 border-2 border-white/40 rounded-full flex justify-center p-2 backdrop-blur-sm">
          <div className="w-1.5 h-4 bg-white/60 rounded-full animate-pulse" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
