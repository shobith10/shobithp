# Shobith P - Portfolio Website

A modern, responsive portfolio website for Shobith P, a Flutter developer with 4+ years of cross-platform development experience. Built with React, Vite, and Tailwind CSS.

## 🎯 Features

- **Single-Page Scroll Layout** - Smooth scrolling through all sections with sticky navigation
- **Sticky Navigation Header** - Always accessible navigation that sticks to the top
- **Fully Responsive Design** - Optimized for mobile (375px), tablet (768px), and desktop (1024px+)
- **Modern Tech Stack** - React 18 + Vite + Tailwind CSS
- **Clean Code Architecture** - Component-based structure with reusable components
- **Color Scheme** - White background with indigo blue (#4F46E5) accent color
- **No Contact Form** - Simplified contact section with direct contact links

## 📁 Project Structure

```
portfolio-react/
├── src/
│   ├── components/
│   │   ├── Navbar.jsx              # Sticky header with navigation
│   │   ├── Hero.jsx                # Home/intro section
│   │   ├── About.jsx               # About section with bio
│   │   ├── Experience.jsx          # Timeline layout for work experience
│   │   ├── Projects.jsx            # Featured projects grid
│   │   ├── Skills.jsx              # Technical & soft skills
│   │   ├── Achievements.jsx        # Achievements, certifications, education
│   │   ├── Contact.jsx             # Contact info & social links (NO FORM)
│   │   └── common/
│   │       ├── TechBadge.jsx       # Reusable badge component
│   │       ├── SkillBar.jsx        # Reusable skill bar with percentage
│   │       └── SocialLinks.jsx     # Reusable social links component
│   ├── pages/
│   ├── data/
│   │   └── portfolio.js            # All portfolio content data
│   ├── App.jsx                     # Root component
│   ├── main.jsx                    # Entry point
│   └── index.css                   # Global styles
├── public/                         # Static assets
├── index.html                      # HTML template
├── vite.config.js                  # Vite configuration
├── tailwind.config.js              # Tailwind CSS configuration
├── postcss.config.js               # PostCSS configuration
├── package.json                    # Dependencies and scripts
└── README.md                       # This file
```

## 🚀 Getting Started

### Prerequisites
- Node.js 16+ and npm

### Installation

1. Navigate to the project directory:
```bash
cd /Users/shobithp/Documents/claude/portfolio-react
```

2. Dependencies are already installed. If needed, run:
```bash
npm install
```

### Development

Start the development server:
```bash
npm run dev
```

The server will start at `http://localhost:5173/`

### Build

Create a production build:
```bash
npm run build
```

The optimized build will be in the `dist/` directory.

### Preview Build

Preview the production build locally:
```bash
npm run preview
```

## 📄 Customization

### Update Portfolio Content

Edit `/src/data/portfolio.js` to update:
- Personal information (name, email, location)
- Work experience and responsibilities
- Featured projects
- Skills and proficiencies
- Achievements and certifications
- Education details
- Social media links

### Update Colors

Modify `/tailwind.config.js` to change the color palette:

```javascript
colors: {
  primary: {
    500: '#4F46E5', // Main accent color
    // ... other shades
  },
}
```

Current color scheme:
- **Primary (Blue)**: #4F46E5
- **Background**: #FFFFFF (white)
- **Text (Dark)**: #1F2937

### Update Styles

Global styles are in `/src/index.css` with Tailwind CSS directives.

Component-specific styles use Tailwind classes in JSX files.

## 📱 Responsive Design

The portfolio is fully responsive with breakpoints:
- **Mobile**: < 768px
- **Tablet**: 768px - 1024px
- **Desktop**: > 1024px

Key responsive features:
- Mobile hamburger menu in navigation
- Stacked layouts on mobile
- Hidden avatar image on small screens
- Optimized touch targets for mobile
- Flexible typography and spacing

## 🎨 Color Palette

```
Primary Blue:  #4F46E5
Light Blue:    #f0f4ff
Background:    #FFFFFF
Text Dark:     #1f2937
Text Light:    #6b7280
Borders:       #E5E7EB
Gray-50:       #f9fafb
Gray-100:      #f3f4f6
```

## 📦 Dependencies

- **React** 18.2.0 - UI library
- **Vite** 5.0.8 - Build tool
- **Tailwind CSS** 3.3.6 - Utility CSS framework
- **PostCSS** 8.4.32 - CSS transformer
- **Autoprefixer** 10.4.17 - CSS vendor prefixes

## 🔗 Navigation

The navigation works by smooth scrolling to sections:
- Home
- About
- Experience
- Projects
- Skills
- Achievements
- Contact

Click any nav link to smoothly scroll to that section.

## 💡 Key Features Explained

### Sticky Navigation
The navbar stays fixed at the top of the page when scrolling, ensuring easy access to navigation at all times.

### Timeline Layout (Experience)
Work experience is displayed in an alternating timeline format on desktop, with a vertical line and positioned dots.

### Responsive Grid (Projects)
Projects display in a 2-column grid on desktop, automatically stacking to 1 column on mobile.

### Skill Bars
Technical skills show animated progress bars with percentages for visual representation of proficiency levels.

### Contact Section Features
- No message form (removed as per request)
- Direct contact information cards
- Social media link buttons with hover effects
- Encouragement message below

## 🚀 Deployment

The portfolio can be deployed to:
- **Netlify** - Connect GitHub repo, auto-deploy
- **Vercel** - Drop-in deployment for Vite projects
- **GitHub Pages** - Static hosting
- **Any static web host** - Just deploy the `dist/` folder

## 📝 License

This project is open source and available under the MIT License.

## ✉️ Contact

For questions or inquiries, reach out through the contact section on the website.

---

**Built with ❤️ using React, Vite, and Tailwind CSS**
