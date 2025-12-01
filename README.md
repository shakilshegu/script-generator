# Content Automation Agent 🤖

AI-powered content research, topic discovery, and script generation platform built with Next.js and Tailwind CSS.

![Next.js](https://img.shields.io/badge/Next.js-16.0-black)
![React](https://img.shields.io/badge/React-19.2-blue)
![TypeScript](https://img.shields.io/badge/TypeScript-5.9-blue)
![Tailwind CSS](https://img.shields.io/badge/Tailwind-4.1-38bdf8)

## ✨ Features

- 🔍 **AI Research Tool** - Get comprehensive insights, statistics, quotes, and hooks on any topic
- 📊 **Topic Discovery** - Find trending topics with analytics and engagement metrics for any niche
- 📝 **Script Generator** - Generate platform-optimized content scripts with visual suggestions
- 📋 **Easy Copy** - One-click copy functionality for all generated content
- 🎨 **Modern UI** - Beautiful, responsive design with gradient backgrounds and smooth animations
- ⚡ **Fast & Efficient** - Built with Next.js for optimal performance

## 🚀 Quick Start

### Prerequisites

- Node.js 18+ installed
- npm or yarn package manager

### Installation

1. Clone the repository:
```bash
git clone https://github.com/shakilshegu/script-generator.git
cd script-generator
```

2. Install dependencies:
```bash
npm install
```

3. Run the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser

## 📁 Project Structure

```
script-generator/
├── app/
│   ├── api/              # API proxy routes
│   │   ├── research/     # Research API endpoint
│   │   ├── topics/       # Topics API endpoint
│   │   └── script/       # Script generation endpoint
│   ├── research/         # Research page
│   ├── topics/           # Topics discovery page
│   ├── script-generator/ # Script generator page
│   ├── globals.css       # Global styles
│   ├── layout.tsx        # Root layout
│   └── page.tsx          # Home page
├── components/
│   ├── Navigation.tsx    # Navigation component
│   └── CopyButton.tsx    # Copy to clipboard button
├── public/               # Static assets
├── .gitignore
├── next.config.js
├── package.json
├── postcss.config.js
├── tailwind.config.js
└── tsconfig.json
```

## 🎯 Usage

### Research Tool

1. Navigate to the Research page
2. Enter your research topic
3. Click "Research" to get AI-powered insights including:
   - Key points
   - Statistics
   - Quotes
   - Content hooks
   - Audience pain points
   - Sources

### Topics Discovery

1. Go to the Topics page
2. Enter a niche (e.g., "Food and Travel", "Tech", "Fitness")
3. Click "Get Topics" to discover:
   - Trending topics with analytics
   - Engagement metrics
   - Competition levels
   - Key angles and strategies

### Script Generator

1. Visit the Script Generator page
2. Fill in:
   - Niche (e.g., "AI and Machine Learning")
   - Topic (e.g., "Neural Networks")
   - Platform (YouTube, TikTok, Instagram, Twitter)
3. Click "Generate Script" to get:
   - Complete content script
   - Platform-specific guidelines
   - Visual suggestions
   - Thumbnail ideas
   - Formatting notes

## 🛠️ Built With

- **[Next.js 16](https://nextjs.org/)** - React framework
- **[React 19](https://react.dev/)** - UI library
- **[TypeScript](https://www.typescriptlang.org/)** - Type safety
- **[Tailwind CSS 4](https://tailwindcss.com/)** - Utility-first CSS
- **[PostCSS](https://postcss.org/)** - CSS processing

## 📦 Scripts

```bash
# Development
npm run dev          # Start development server

# Production
npm run build        # Build for production
npm start           # Start production server

# Linting
npm run lint        # Run ESLint
```

## 🌐 Deployment

### Deploy to Vercel (Recommended)

1. Push your code to GitHub
2. Import your repository on [Vercel](https://vercel.com)
3. Vercel will auto-detect Next.js and configure settings
4. Click "Deploy"

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/shakilshegu/script-generator)

### Environment Variables

No environment variables required! The app uses API proxy routes to handle backend communication.

## 🎨 Design Features

- Gradient backgrounds with smooth transitions
- Card-based layouts with hover effects
- Responsive design (mobile, tablet, desktop)
- Loading states with spinners
- Error handling with user-friendly messages
- Copy-to-clipboard functionality on all content
- Clean typography with Inter font

## 🔧 API Integration

The app uses Next.js API routes as a proxy layer to communicate with the backend:

- `/api/research` - Research endpoint
- `/api/topics` - Topics discovery endpoint
- `/api/script` - Script generation endpoint

This architecture solves CORS and mixed content issues when deploying to production.

## 📝 License

ISC License - see the [LICENSE](LICENSE) file for details

## 👥 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1. Fork the project
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 🐛 Bug Reports

Found a bug? Please open an issue on [GitHub Issues](https://github.com/shakilshegu/script-generator/issues)

## 📧 Contact

Project Link: [https://github.com/shakilshegu/script-generator](https://github.com/shakilshegu/script-generator)

---

**Made with ❤️ using Next.js and Tailwind CSS**
