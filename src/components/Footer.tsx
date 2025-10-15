const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-foreground text-white py-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h3 className="text-4xl font-bold mb-4">
            Alosviva
          </h3>
          <p className="text-white/80 text-lg mb-6 max-w-2xl mx-auto leading-relaxed">
            Providing hope and shelter for homeless individuals in Nigeria. Together, we're building a brighter future, one life at a time.
          </p>
          <div className="text-sm text-white/60 mt-8 pt-8 border-t border-white/20">
            © {currentYear} Alosviva. All rights reserved. | Registered Non-Profit Organization
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
