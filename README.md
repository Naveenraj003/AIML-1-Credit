# Student Developer Portfolio

A bold, animation-rich personal portfolio built with **Next.js App Router** and **Tailwind CSS**. Designed to showcase projects, achievements, travel experiences, and provide an interactive contact interface.

## 🌟 Features

- **Responsive Design** – Fully mobile-optimized interface
- **Smooth Animations** – Page transitions and scroll-reveal effects
- **Dark Mode Ready** – Custom CSS animations and backdrop effects
- **Static Content** – No backend required; all data in `siteData.js`
- **SEO Optimized** – Proper meta tags and structure
- **Custom 404 Page** – User-friendly error handling
- **Interactive Components** – Contact form, animated titles, and kinetic text

## 🛠️ Technology Stack

- **Next.js 14+** (App Router)
- **Tailwind CSS** – Utility-first styling
- **JavaScript** – Client and server components
- **PostCSS** – CSS processing
- **ESLint** – Code quality

## 📂 Project Structure

```
portfolio/
├── public/               # Static assets
├── src/
│   ├── app/
│   │   ├── layout.js     # Root layout
│   │   ├── page.js       # Home page
│   │   ├── globals.css   # Global styles
│   │   └── [routes]/     # Page routes
│   ├── components/       # Reusable UI components
│   │   ├── Navbar.js
│   │   ├── Footer.js
│   │   ├── ContactForm.js
│   │   └── [animations]/ # Animation utilities
│   └── data/
│       └── siteData.js   # Portfolio content
├── package.json
└── README.md
```

## 🚀 Getting Started

### Prerequisites
- Node.js 18+
- npm or yarn

### Installation

```bash
# Clone the repository
git clone <repository-url>
cd portfolio

# Install dependencies
npm install

# Start development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Build for Production

```bash
npm run build
npm start
```

## 📄 Available Routes

| Route | Purpose |
|-------|---------|
| `/` | Home page – Hero section with introduction |
| `/projects` | Portfolio projects showcase |
| `/achievements` | Awards, certifications, and accomplishments |
| `/travel` | Travel experiences and memories |
| `/contact` | Contact form for inquiries |
| `*` | Custom 404 page |

## 🎨 Key Components

- **Navbar** – Navigation with responsive menu
- **Footer** – Social links and copyright
- **KineticTitle** – Animated title text
- **TypingRoles** – Typewriter effect for dynamic text
- **ContactForm** – Email inquiry form
- **RevealOnScroll** – Scroll-triggered animations
- **PixelJoinImage** – Pixelated image effect
- **AnimatedBackdrop** – Background animations
- **CustomCursor** – Interactive cursor styling

## 📝 Customization

Edit `src/data/siteData.js` to update:
- Personal information
- Project details
- Achievement entries
- Travel experiences
- Contact information

## 🔍 Performance

- Static pre-rendering for all pages (generates at build time)
- Optimized images and assets
- Minimal JavaScript bundle
- Lighthouse-friendly accessibility

## 📱 Browser Support

- Chrome/Edge 90+
- Firefox 88+
- Safari 14+
- Mobile browsers (iOS Safari, Chrome Mobile)

## 📄 License

This project is open source and available under the MIT License.

## 💬 Contact

For questions or feedback, please use the contact form on the portfolio or reach out directly.

---

**Note:** This portfolio is built as a static Next.js application and can be deployed to GitHub Pages, Vercel, Netlify, or any static hosting service.
