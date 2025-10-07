# EST to IST Converter

A modern, real-time time zone converter that helps teams align Eastern Standard Time (EST) and Indian Standard Time (IST) for seamless cross-continental collaboration.

🌐 **Live Demo**: [https://esttoist.online](https://esttoist.online)

## ✨ Features

- **Real-time Conversion**: Live EST to IST time conversion with automatic updates
- **Interactive Time Picker**: Easy-to-use time input with instant conversion
- **Current Time Display**: Shows current time in both EST and IST timezones
- **Responsive Design**: Works perfectly on desktop, tablet, and mobile devices
- **Modern UI**: Built with Next.js 15, React 19, and Tailwind CSS
- **SEO Optimized**: Comprehensive meta tags and structured data
- **Accessibility**: WCAG compliant with keyboard navigation support

## 🚀 Quick Start

### Prerequisites

- Node.js 18+ 
- pnpm (recommended) or npm

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/est-to-ist-converter.git
   cd est-to-ist-converter
   ```

2. **Install dependencies**
   ```bash
   pnpm install
   ```

3. **Start development server**
   ```bash
   pnpm dev
   ```

4. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## 🛠️ Available Scripts

```bash
# Development
pnpm dev          # Start development server with hot reload

# Production
pnpm build        # Build for production
pnpm start        # Start production server

# Code Quality
pnpm lint         # Run ESLint
```

## 🏗️ Tech Stack

- **Framework**: [Next.js 15](https://nextjs.org/) with App Router
- **UI Library**: [React 19](https://react.dev/)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/) with custom design system
- **Components**: [Radix UI](https://www.radix-ui.com/) primitives
- **Icons**: [Lucide React](https://lucide.dev/)
- **Fonts**: [Geist](https://vercel.com/font) Sans & Mono
- **Analytics**: [Vercel Analytics](https://vercel.com/analytics)
- **TypeScript**: Full type safety
- **Package Manager**: pnpm

## 📁 Project Structure

```
est-to-ist-converter/
├── app/                    # Next.js App Router
│   ├── contact/           # Contact page
│   ├── privacy/           # Privacy policy page
│   ├── terms/             # Terms of use page
│   ├── globals.css        # Global styles
│   ├── layout.tsx         # Root layout with metadata
│   └── page.tsx           # Home page
├── components/            # React components
│   ├── ui/               # Reusable UI components (shadcn/ui)
│   ├── contact-form.tsx  # Contact form component
│   ├── footer.tsx        # Footer component
│   ├── header.tsx        # Header component
│   └── time-converter.tsx # Main time converter component
├── hooks/                # Custom React hooks
├── lib/                  # Utility functions and configurations
│   ├── i18n/            # Internationalization
│   └── utils.ts         # Utility functions
├── public/              # Static assets
│   ├── favicon.svg      # Favicon files
│   └── apple-touch-icon.svg
└── styles/              # Additional styles
```

## 🎨 Design System

The project uses a custom design system built on top of Tailwind CSS:

- **Colors**: Semantic color tokens for light/dark themes
- **Typography**: Geist font family with consistent sizing
- **Spacing**: Consistent spacing scale
- **Components**: Reusable UI components with variants
- **Icons**: Lucide React icon library

## 🌍 Internationalization

Currently supports English with a structured i18n system:

- **Configuration**: `lib/i18n/config.ts`
- **Translations**: `lib/i18n/locales/en.ts`
- **Usage**: `getTranslations()` function for type-safe translations

## 📱 Responsive Design

The converter is fully responsive with breakpoints:

- **Mobile**: < 768px
- **Tablet**: 768px - 1024px  
- **Desktop**: > 1024px

## 🔧 Configuration

### Environment Variables

Create a `.env.local` file for local development:

```env
# Analytics (optional)
NEXT_PUBLIC_VERCEL_ANALYTICS_ID=your_analytics_id
```

### Next.js Configuration

The project uses a custom `next.config.mjs` with:

- ESLint and TypeScript build optimizations
- Image optimization settings
- Custom build configurations

## 🚀 Deployment

### Vercel (Recommended)

1. **Connect your repository** to Vercel
2. **Configure environment variables** in Vercel dashboard
3. **Deploy** - automatic deployments on push to main branch

### Other Platforms

The project can be deployed to any platform that supports Next.js:

- **Netlify**: Use the Next.js build preset
- **Railway**: Connect your GitHub repository
- **Docker**: Use the included Dockerfile (if available)

## 🤝 Contributing

We welcome contributions! Please follow these steps:

1. **Fork the repository**
2. **Create a feature branch**
   ```bash
   git checkout -b feature/amazing-feature
   ```
3. **Make your changes**
4. **Run tests and linting**
   ```bash
   pnpm lint
   pnpm build
   ```
5. **Commit your changes**
   ```bash
   git commit -m "Add amazing feature"
   ```
6. **Push to your branch**
   ```bash
   git push origin feature/amazing-feature
   ```
7. **Open a Pull Request**

### Development Guidelines

- Follow the existing code style
- Use TypeScript for type safety
- Write meaningful commit messages
- Test your changes thoroughly
- Update documentation as needed

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🆘 Support

- **Documentation**: Check this README and inline code comments
- **Issues**: [GitHub Issues](https://github.com/yourusername/est-to-ist-converter/issues)
- **Contact**: [contact@esttoist.online](mailto:contact@esttoist.online)

## 🙏 Acknowledgments

- [Next.js](https://nextjs.org/) team for the amazing framework
- [Vercel](https://vercel.com/) for hosting and analytics
- [Tailwind CSS](https://tailwindcss.com/) for the utility-first CSS framework
- [Radix UI](https://www.radix-ui.com/) for accessible component primitives
- [Lucide](https://lucide.dev/) for beautiful icons

## 📊 Project Status

![GitHub last commit](https://img.shields.io/github/last-commit/yourusername/est-to-ist-converter)
![GitHub issues](https://img.shields.io/github/issues/yourusername/est-to-ist-converter)
![GitHub pull requests](https://img.shields.io/github/issues-pr/yourusername/est-to-ist-converter)
![GitHub stars](https://img.shields.io/github/stars/yourusername/est-to-ist-converter)

---

**Made with ❤️ for global teams working across time zones**
