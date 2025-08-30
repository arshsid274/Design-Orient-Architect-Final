# Design Orient Architect - Portfolio Website

A modern, responsive architecture portfolio website built with React and Vite, featuring designs directly converted from Figma to showcase architectural projects and services.

## 🎨 Design Source

This website's design was **directly created from Figma**, ensuring pixel-perfect implementation and maintaining design consistency across all components and pages.

## 🚀 Features

- **Responsive Design**: Optimized for all device sizes
- **Modern UI**: Clean, professional interface with smooth animations
- **Portfolio Showcase**: Multiple project categories including:
  - Interior Design
  - Commercial Building Design
  - Hospitality Design
  - Residential Projects
  - Landscaping Projects
  - Restaurant Design
- **Interactive Components**: Carousels, galleries, and contact forms
- **Fast Performance**: Built with Vite for optimal loading speeds

## 🛠️ Tech Stack

- **Frontend**: React 19.0.0
- **Build Tool**: Vite 6.2.0
- **Styling**: Tailwind CSS 4.1.3 + DaisyUI 5.0.23
- **Routing**: React Router DOM 7.5.0
- **Icons**: FontAwesome + Lucide React
- **Carousel**: React Responsive Carousel
- **Gallery**: React Responsive Masonry

## 📋 Prerequisites

Before running this project, make sure you have the following installed:

- **Node.js** (version 16.0 or higher)
- **npm** (comes with Node.js)

## 🚀 Getting Started

### 1. Clone the Repository

```bash
git clone <repository-url>
cd Design-Orient-Architect-Final
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Start Development Server

```bash
npm run dev
```

The application will start on `http://localhost:5173` (or another available port).

### 4. Build for Production

```bash
npm run build
```

### 5. Preview Production Build

```bash
npm run preview
```

## 📁 Project Structure

```
src/
├── Components/          # Reusable UI components
│   ├── BaseLayout.jsx   # Main layout wrapper
│   ├── Navbar.jsx       # Navigation component
│   ├── Footer.jsx       # Footer component
│   ├── Gallery.jsx      # Image gallery
│   ├── ContactForm.jsx  # Contact form
│   └── ...             # Other components
├── Pages/              # Page components
│   ├── Home.jsx        # Homepage
│   ├── About.jsx       # About page
│   ├── Project.jsx     # Projects overview
│   ├── Services.jsx    # Services page
│   ├── Contact.jsx     # Contact page
│   └── ...            # Category-specific pages
├── assets/            # Static assets
│   ├── HOSPITALITY/   # Hotel project images
│   ├── INTERIOR DESIGN/ # Interior project images
│   ├── ROOF TOP CAFE/ # Cafe project images
│   └── ...           # Other project assets
├── App.jsx           # Main app component
└── main.jsx         # Entry point
```

## 🎯 Available Pages

- **Home** (`/`) - Landing page with hero section and overview
- **About** (`/about`) - Company information and team
- **Projects** (`/project`) - Portfolio overview
- **Services** (`/services`) - Service offerings
- **Contact** (`/contact`) - Contact information and form

### Project Categories:
- **Interior Design** (`/interior-design`)
- **Commercial Design** (`/commercial-design`)
- **Hospitality Design** (`/hospitality-design`)
- **Restaurants** (`/resturants`)
- **Landscaping** (`/landscaping-design`)
- **Residential** (`/residential-design`)

## 🎨 Design Implementation

The entire website design was meticulously crafted in **Figma** and then directly implemented into React components, ensuring:

- **Pixel-perfect accuracy** between design and implementation
- **Consistent spacing and typography** throughout the site
- **Responsive breakpoints** matching the Figma design system
- **Color schemes and brand guidelines** maintained across all pages

## 📱 Responsive Design

The website is fully responsive and optimized for:
- **Desktop** (1200px+)
- **Tablet** (768px - 1199px)
- **Mobile** (320px - 767px)

## 🔧 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint for code quality

## 🌐 Deployment

The project is configured for deployment on Vercel with the included `vercel.json` configuration file.

## 📞 Support

For any questions or support regarding this project, please contact the development team.

---

**Note**: This project showcases architectural work and maintains high design standards through direct Figma-to-code implementation, ensuring the final product matches the original design vision perfectly.