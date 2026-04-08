# Ahsen's Portfolio 🚀

> AI Engineer building intelligent systems that automate the future.

A modern, animation-rich personal portfolio website showcasing expertise in AI Engineering, Full Stack Development, and Automation. Built with Next.js 16, React 19, and Tailwind CSS v4, featuring a premium dark cosmic theme with violet/teal/pink accents.

🌐 **Live Demo:** [https://ahsen.dev](https://ahsen.dev) *(placeholder)*

---

## ✨ Features

### 🎬 Interactive Loading Screen
- Animated circular + linear progress indicators
- Rotating gradient logo with typing terminal effect
- Smooth upward slide transition to main content

### 🏠 Hero Section
- Animated "Available for work" status badge
- **SparklesText** + **MorphingText** animated title
- Tech stack pills (AI/ML, Automation, Next.js, Python)
- Smooth scroll CTA buttons
- Interactive hover-reveal image with cursor tracking

### 💼 Experience Section
- **3D Interactive Icon Cloud** with 24+ tech logos
- Drag rotation and click-to-focus functionality
- Three expertise carousel cards:
  - AI Agents
  - AI & Automation
  - Full Stack Development
- Animated navigation with gradient progress bars

### 🛠️ Projects Showcase
- Full-screen project viewer with large preview images
- Video modal with LinkedIn embeds
- Numbered navigation (desktop) and dots (mobile)
- Smooth spring physics transitions

### 💬 Testimonials Marquee
- Infinite horizontal scrolling testimonial cards
- Star ratings and client info
- Glassmorphic cards with hover effects

### 🚀 Gateway Section
- Three unique navigation cards:
  - **Story Mode** - Complete journey and background
  - **Future Me** - Future vision and goals
  - **Why Hire Me?** - Value proposition
- Pattern backgrounds (diagonal/dots/grid)
- Animated stats and hover progress bars

### 📦 Bento Grid
Interactive 6-card bento grid featuring:
- **Wallpaper Gallery** - Horizontal auto-scroll
- **Intro Card** - Contact form with email API
- **Tools Marquee** - 30+ tech icons scrolling
- **Profile Card** - Grayscale-to-color hover effect
- **Video Card** - Autoplay video with mute toggle
- **Music Player** - Audio with visualizer bars
- GSAP ScrollTrigger staggered entry animations

### 📄 Narrative Pages
- **Story Mode** (`/story-mode`) - Timeline-style journey page
- **Future Me** (`/future-me`) - Vision and goals timeline
- **Why Hire Me?** (`/why-hire-me`) - Value proposition with final CTA
- Cross-navigation between all three pages

### 📧 Contact Form API
- Server-side email sending via Nodemailer
- SMTP configuration via environment variables
- Input validation and error handling
- Loading states and success feedback

---

## 🛠️ Tech Stack

### Core
| Technology | Version | Purpose |
|------------|---------|---------|
| **Next.js** | 16.2.1 | React framework (App Router) |
| **React** | 19.2.4 | UI library |
| **TypeScript** | 5.x | Type safety |

### Styling
| Technology | Version | Purpose |
|------------|---------|---------|
| **Tailwind CSS** | v4 | Utility-first CSS framework |
| **Framer Motion** | 12.38.0 | Component animations |
| **GSAP** | 3.14.2 | Scroll-triggered animations |

### Backend
| Technology | Version | Purpose |
|------------|---------|---------|
| **Nodemailer** | 8.0.5 | Email sending via SMTP |

### Utilities
- **clsx** + **tailwind-merge** - Conditional class merging
- **Inter** + **Sora** - Premium Google Fonts

---

## 📁 Project Structure

```
final_portfolio/
├── app/
│   ├── layout.tsx                      # Root layout + fonts + loading screen
│   ├── page.tsx                        # Main portfolio page
│   ├── globals.css                     # Global styles, animations, theme
│   │
│   ├── api/contact/route.ts            # Email API endpoint (POST)
│   │
│   ├── components/
│   │   ├── LoadingScreen.tsx           # Animated intro loader
│   │   ├── Navbar.tsx                  # Fixed glassmorphic navbar
│   │   ├── Hero.tsx                    # Hero with interactive image
│   │   ├── ExperienceSection.tsx       # 3D icon cloud + carousel
│   │   ├── ProjectsSection.tsx         # Project showcase with video modal
│   │   ├── TestimonialsSection.tsx     # Horizontal marquee
│   │   ├── GatewaySection.tsx          # Navigation cards
│   │   ├── BentoGrid.jsx               # Interactive bento grid
│   │   ├── Footer.tsx                  # Footer with social links
│   │   └── ParticlesBackground.tsx     # Twinkling particles
│   │
│   ├── registry/magicui/               # Custom Magic UI components
│   │   ├── icon-cloud.tsx              # 3D interactive icon cloud
│   │   ├── marquee.tsx                 # Infinite scrolling marquee
│   │   ├── morphing-text.tsx           # Text morphing animation
│   │   └── sparkles-text.tsx           # Sparkle particle text
│   │
│   ├── story-mode/page.tsx             # Journey timeline page
│   ├── future-me/page.tsx              # Vision/goals page
│   └── why-hire-me/page.tsx            # Value proposition page
│
├── public/                             # Static assets
│   ├── images/                         # Logos, photos, thumbnails
│   ├── wall1-7.webp                    # Wallpaper gallery
│   ├── carchase.mp4                    # Video for bento grid
│   └── *.mp3                           # Music for bento grid
│
├── constants/index.js                  # Static data (nav, projects, etc.)
├── .env.local                          # Environment variables (gitignored)
├── .env.local.example                  # Environment template
├── PORTFOLIO_INFO.txt                  # Complete portfolio information
└── README.md                           # This file
```

---

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ 
- npm or yarn

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/portfolio.git
   cd portfolio
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up environment variables**
   ```bash
   cp .env.local.example .env.local
   ```
   
   Edit `.env.local` with your email credentials:
   ```env
   EMAIL_ADDRESS=your_email@gmail.com
   EMAIL_PASSWORD=your_app_password
   SMTP_HOST=smtp.gmail.com
   SMTP_PORT=587
   ```

4. **Run the development server**
   ```bash
   npm run dev
   ```

5. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

---

## 📦 Available Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start development server with Turbopack |
| `npm run build` | Build for production |
| `npm run start` | Start production server |
| `npm run lint` | Run ESLint |

---

## 🎨 Design System

### Color Palette
| Color | Hex | Usage |
|-------|-----|-------|
| Deep Space Black | `#030014` | Primary background |
| Electric Violet | `#8B5CF6` | Primary accent |
| Cosmic Teal | `#14B8A6` | Secondary accent |
| Nebula Pink | `#EC4899` | Tertiary accent |

### Typography
| Font | Usage | Weights |
|------|-------|---------|
| **Inter** | Body text, UI elements | 300, 400, 500, 600, 700, 800 |
| **Sora** | Headings, titles | 300, 400, 500, 600, 700, 800 |

### Animations
- **Framer Motion** - Page transitions, component animations, AnimatePresence
- **GSAP ScrollTrigger** - BentoGrid staggered entry animations
- **Custom CSS** - Marquee, meteor, music bars, gradient animations

---

## 📧 Contact Form Setup

The contact form uses Nodemailer to send emails via SMTP. To enable it:

1. **Enable 2-Factor Authentication** in your Google Account
2. **Generate an App Password:**
   - Go to Google Account Settings → Security
   - Under "Signing in to Google", click "App Passwords"
   - Select "Mail" and your device
   - Copy the generated 16-character password
3. **Add to `.env.local`:**
   ```env
   EMAIL_ADDRESS=your_email@gmail.com
   EMAIL_PASSWORD=xxxx xxxx xxxx xxxx
   SMTP_HOST=smtp.gmail.com
   SMTP_PORT=587
   ```

---

## 🌐 Deployment

### Vercel (Recommended)
```bash
npm install -g vercel
vercel
```

Or connect your GitHub repo to Vercel for automatic deployments.

### Environment Variables on Vercel
Add these in your Vercel project settings:
- `EMAIL_ADDRESS`
- `EMAIL_PASSWORD`
- `SMTP_HOST`
- `SMTP_PORT`

---

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

---

## 🙏 Acknowledgments

- **Magic UI** - Custom UI components (Icon Cloud, Marquee, Morphing Text, Sparkles Text)
- **Simple Icons** - Tech stack icon CDN
- **Google Fonts** - Inter and Sora fonts
- **Next.js Team** - Amazing framework
- **Tailwind CSS** - Utility-first CSS framework

---

## 📞 Contact

**Ahsen Adil** - AI Engineer & Developer

- 📧 Email: hello@ahsen.dev
- 💼 LinkedIn: [linkedin.com/in/ahsenadil](https://linkedin.com)
- 🐙 GitHub: [github.com/ahsenadil](https://github.com)
- 🐦 Twitter: [twitter.com/ahsenadil](https://twitter.com)

---

<div align="center">

**Built with ❤️ using Next.js, React, and Tailwind CSS**

⭐ If you like this portfolio, give it a star!

</div>
