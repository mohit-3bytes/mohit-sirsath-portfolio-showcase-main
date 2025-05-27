
# Mohit Sirsath - Portfolio Website

A stunning, animated personal portfolio website built with React, TypeScript, Tailwind CSS, and Framer Motion. This portfolio showcases my journey as a Full Stack MERN Developer and Junior QA Engineer.

## 🌟 Features

- **Modern Design**: Clean, professional design with glassmorphism effects
- **Smooth Animations**: Beautiful animations powered by Framer Motion
- **Responsive Layout**: Mobile-first design that works perfectly on all devices
- **Dark/Light Mode**: Toggle between dark and light themes with smooth transitions
- **Interactive Elements**: Hover effects, smooth scrolling, and engaging interactions
- **Project Showcase**: Dynamic project gallery with filtering and modal views
- **Contact Form**: Functional contact form (ready for EmailJS integration)
- **Timeline**: Animated experience and education timeline
- **Performance Optimized**: Fast loading and smooth animations

## 🛠️ Tech Stack

- **Frontend**: React 18, TypeScript
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Build Tool**: Vite
- **Deployment**: Ready for Vercel, Netlify, or GitHub Pages

## 📱 Sections

1. **Hero Section** - Animated introduction with typewriter effect
2. **About Me** - Education, current role, and aspirations
3. **Skills** - Animated skill badges organized by category
4. **Projects** - Interactive project showcase with filtering
5. **Experience** - Timeline of education and work experience
6. **Contact** - Contact form and social links
7. **Footer** - Additional links and information

## 🚀 Getting Started

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone https://github.com/mohitsirsath/portfolio.git
cd portfolio
```

2. Install dependencies:
```bash
npm install
# or
yarn install
```

3. Start the development server:
```bash
npm run dev
# or
yarn dev
```

4. Open [http://localhost:5173](http://localhost:5173) in your browser.

### Building for Production

```bash
npm run build
# or
yarn build
```

The built files will be in the `dist` directory.

## 🎨 Customization

### Personal Information

Update the following files with your personal information:

- `src/components/Hero.tsx` - Name, title, and tagline
- `src/components/About.tsx` - Education and background
- `src/components/Contact.tsx` - Contact information
- `src/components/Projects.tsx` - Your projects
- `src/components/Experience.tsx` - Work experience and education

### Colors and Styling

The color scheme uses CSS custom properties defined in `src/index.css`. You can easily customize:

- Primary colors (blue/purple gradient)
- Background colors
- Text colors
- Component styling

### Contact Form Integration

To make the contact form functional:

1. Sign up for [EmailJS](https://www.emailjs.com/)
2. Get your service ID, template ID, and public key
3. Install EmailJS: `npm install @emailjs/browser`
4. Update the form submission logic in `src/components/Contact.tsx`

## 📦 Deployment

### Vercel

1. Push your code to GitHub
2. Connect your repository to Vercel
3. Deploy with default settings

### Netlify

1. Build the project: `npm run build`
2. Drag and drop the `dist` folder to Netlify
3. Or connect your GitHub repository

### GitHub Pages

1. Install gh-pages: `npm install --save-dev gh-pages`
2. Add to package.json:
```json
{
  "homepage": "https://yourusername.github.io/portfolio",
  "scripts": {
    "predeploy": "npm run build",
    "deploy": "gh-pages -d dist"
  }
}
```
3. Deploy: `npm run deploy`

## 🎯 Performance

- **Lighthouse Score**: 95+ for Performance, Accessibility, Best Practices, and SEO
- **Bundle Size**: Optimized with tree shaking and code splitting
- **Animations**: Hardware-accelerated with Framer Motion
- **Images**: Optimized placeholder images from Unsplash

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🤝 Contributing

Contributions, issues, and feature requests are welcome! Feel free to check the [issues page](https://github.com/mohitsirsath/portfolio/issues).

## 📞 Contact

- **Email**: mohitsirsath@example.com
- **LinkedIn**: [linkedin.com/in/mohitsirsath](https://linkedin.com/in/mohitsirsath)
- **GitHub**: [github.com/mohitsirsath](https://github.com/mohitsirsath)

---

⭐ If you like this portfolio, please give it a star on GitHub!
