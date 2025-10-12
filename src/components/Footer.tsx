const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-secondary text-secondary-foreground py-8">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h3 className="font-display text-2xl font-bold mb-3">Alosviva</h3>
          <p className="text-secondary-foreground/80 mb-4 max-w-md mx-auto">
            Providing hope and shelter for homeless individuals in Nigeria
          </p>
          <div className="text-sm text-secondary-foreground/70">
            © {currentYear} Alosviva. All rights reserved. | Registered Non-Profit Organization
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
