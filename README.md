# Harshil Miyani Portfolio

A modern, responsive portfolio website built with Next.js 14, TypeScript, and Tailwind CSS. Inspired by modern portfolio designs with a clean, professional aesthetic.

## Features

- 🎨 Modern UI/UX design with glassmorphism effects
- 📱 Fully responsive design
- ⚡ Built with Next.js 14 and React 18
- 🎭 Smooth animations with Framer Motion
- 🎨 Tailwind CSS for styling
- 🔤 SUSE Mono font for a unique typographic style
- 🌙 Dark theme optimized

## Sections

- **Hero**: Introduction with profile, social links, and CTA buttons
- **About**: Personal information, experience, and education
- **Experience**: Skills breakdown and work experience timeline
- **Projects**: Showcase of featured projects with links
- **Contact**: Contact form and information

## Getting Started

### Prerequisites

- Node.js 18+ installed
- npm or yarn package manager

### Installation

1. Install dependencies:
```bash
npm install
```

2. Run the development server:
```bash
npm run dev
```

3. Open [http://localhost:3000](http://localhost:3000) in your browser

### Build for Production

```bash
npm run build
npm start
```

## Project Structure

```
harshilmiyani-portfolio/
├── app/
│   ├── globals.css       # Global styles and Tailwind imports
│   ├── layout.tsx        # Root layout
│   └── page.tsx          # Home page
├── components/
│   ├── Navigation.tsx    # Navigation bar
│   ├── Hero.tsx          # Hero section
│   ├── About.tsx         # About section
│   ├── Experience.tsx   # Experience and skills
│   ├── Projects.tsx      # Projects showcase
│   ├── Contact.tsx       # Contact form
│   └── Footer.tsx        # Footer
├── public/               # Static assets
└── package.json          # Dependencies
```

## Customization

### Update Personal Information

Edit the content in each component file:
- `components/Hero.tsx` - Name, title, social links
- `components/About.tsx` - About text, experience, education
- `components/Experience.tsx` - Skills and work experience
- `components/Projects.tsx` - Project details
- `components/Contact.tsx` - Contact information

### Styling

- Colors are defined in `tailwind.config.ts`
- Global styles are in `app/globals.css`
- Component-specific styles use Tailwind utility classes

## Technologies Used

- **Next.js 14** - React framework
- **TypeScript** - Type safety
- **Tailwind CSS** - Utility-first CSS
- **Framer Motion** - Animation library
- **Lucide React** - Icon library

## License

This project is private and proprietary.
