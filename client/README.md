# Modern Portfolio Website

A sleek and interactive portfolio website built with React 19, featuring smooth animations, a responsive design, and modern UI components.


## ✨ Features

### Dynamic Dashboard & Sidebar
- Animated collapsible sidebar with smooth transitions
- Interactive navigation buttons with hover effects
- Gradient accents and visual feedback
- Seamless section switching with fade animations

### Hero Section
- Custom animated background with interactive elements
- Responsive layout adapting to all screen sizes
- Dynamic text animations using Framer Motion
- Professional introduction with call-to-action buttons

### About Me Section
- Clean, modern layout showcasing professional journey
- Skill progress indicators with animated bars
- Timeline of experiences and achievements
- Downloadable resume option

### Bento Box Project Grid
- Modern bento grid layout for project showcase
- Hover animations and interactive cards
- Project filtering capabilities
- Detailed project modals with descriptions and links
- Responsive grid system adapting to screen sizes

### Contact Section
- Interactive contact form with validation
- Social media integration
- Location map integration
- Real-time form feedback

### Custom Cursor Effects
- Smooth cursor tracking animations
- Context-aware cursor states
- Interactive hover effects
- Custom cursor designs for different sections

## 🛠️ Tech Stack

- **React 19**
  - Latest features including automatic batching
  - Improved concurrent rendering
  - Enhanced hooks system

- **Tailwind CSS v4**
  - Advanced styling utilities
  - Custom design system
  - Responsive design framework
  - Dark mode support

- **Framer Motion**
  - Smooth page transitions
  - Gesture animations
  - Scroll-based animations
  - Interactive motion effects

## 🚀 Getting Started

### Prerequisites
```bash
node >= 18.0.0
npm >= 9.0.0
```

### Installation

1. Clone the repository
```bash
git clone https://github.com/yourusername/portfolio-website.git
```

2. Install dependencies
```bash
cd portfolio-website
npm install
```

3. Start the development server
```bash
npm run dev
```

4. Build for production
```bash
npm run build
```

## 📁 Project Structure

```
portfolio-website/
├── src/
│   ├── components/
│   │   ├── Dashboard/
│   │   ├── Hero/
│   │   ├── About/
│   │   ├── Projects/
│   │   ├── Contact/
│   │   └── shared/
│   ├── hooks/
│   ├── context/
│   ├── styles/
│   └── assets/
├── public/
└── config/
```

## 💎 Component Features

### Dashboard Component
- Responsive sidebar navigation
- Smooth state transitions
- Interactive UI elements
- Section management

### Hero Component
- Animated background elements
- Responsive text layout
- Call-to-action buttons
- Social media links

### Projects Component
- Bento grid layout system
- Project filtering
- Interactive cards
- Image optimization

### Contact Component
- Form validation
- API integration
- Success/error handling
- Social media integration

## 🎨 Customization

### Tailwind Configuration
```javascript
// tailwind.config.js
module.exports = {
  theme: {
    extend: {
      colors: {
        primary: {...},
        secondary: {...}
      },
      // Add custom configurations
    }
  }
}
```

### Motion Configuration
```javascript
// framer-motion configurations
const transition = {
  duration: 0.3,
  ease: [0.43, 0.13, 0.23, 0.96]
};

const variants = {
  // Add custom variants
};
```

## 📱 Responsive Design

- Mobile-first approach
- Breakpoint system:
  - sm: 640px
  - md: 768px
  - lg: 1024px
  - xl: 1280px
  - 2xl: 1536px

## 🔧 Development

### Running Tests
```bash
npm run test
```

### Linting
```bash
npm run lint
```

### Building for Production
```bash
npm run build
```

## 📄 License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details.

## 🤝 Contributing

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📞 Support

For support, email your-email@example.com or join our Slack channel.
