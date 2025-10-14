const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gradient-to-br from-foreground via-foreground to-primary/20 text-white py-16 relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-secondary/10 rounded-full blur-3xl" />
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center">
          <h3 className="font-display text-4xl font-bold mb-4 bg-gradient-to-r from-white via-accent to-white bg-clip-text text-transparent">
            Alosviva
          </h3>
          <p className="text-white/80 text-lg mb-6 max-w-2xl mx-auto leading-relaxed">
            Providing hope and shelter for homeless individuals in Nigeria. Together, we're building a brighter future, one life at a time.
          </p>
          <div className="text-sm text-white/60 mt-8 pt-8 border-t border-white/10">
            © {currentYear} Alosviva. All rights reserved. | Registered Non-Profit Organization
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
