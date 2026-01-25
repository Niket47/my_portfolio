'use client';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="py-6 sm:py-8 px-4 sm:px-6 border-t border-black/10">
      <div className="container mx-auto max-w-6xl">
        <nav className="flex flex-col md:flex-row items-center justify-between gap-4 mb-4 sm:mb-6">
          <ul className="flex flex-wrap justify-center gap-4 sm:gap-6">
            {['About', 'Experience', 'Projects', 'Contact'].map((item) => (
              <li key={item}>
                <button
                  onClick={() => scrollToSection(`#${item.toLowerCase()}`)}
                  className="text-black/60 hover:text-black transition-colors text-sm sm:text-base"
                >
                  {item}
                </button>
              </li>
            ))}
          </ul>
        </nav>
        <p className="text-center text-black/60 text-xs sm:text-sm">
          Copyright © {currentYear} Rushant Golakiya. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
}
