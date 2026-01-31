# 🚀 Abhijit Gore - Premium 3D Interactive Portfolio

An ultra-modern, cinematic 3D portfolio website showcasing software development expertise through an immersive 3D experience.

## ✨ Features

### 🎨 Visual Excellence
- **3D Environment**: Fully interactive Three.js scene with floating geometric objects
- **Glassmorphism UI**: Premium glass effects with backdrop blur
- **Neon Accents**: Vibrant blue, purple, and pink neon highlights
- **Dark Theme**: Professional dark mode with cinematic lighting
- **Custom Cursor**: Interactive cursor with smooth following effect
- **Particle System**: 3000+ animated particles creating a starfield effect

### 🎬 Cinematic Experience
- **Scroll-Based Camera Movement**: Camera moves through 3D space as you scroll
- **Smooth Transitions**: GSAP-powered animations with cubic-bezier easing
- **Section-by-Section Navigation**: Each section feels like a different 3D room
- **Parallax Effect**: Mouse movement creates subtle parallax on camera
- **Floating Objects**: Dynamic geometric shapes that react to scroll position

### 📱 Sections

1. **Hero Section** - 3D intro space with glowing name and call-to-action
2. **About Me** - Holographic profile card with statistics
3. **Skills & Tech Stack** - Floating 3D icons with skill bars
4. **Certifications** - 3D gallery wall displaying achievements
5. **Projects** - Floating project cards with overlay effects
6. **Resume** - 3D document viewer with download option
7. **Social Profiles** - Orbiting social media icons
8. **Contact Me** - Terminal-style contact form

### 🛠️ Technologies Used

- **Three.js** - 3D scene rendering and WebGL
- **GSAP (GreenSock)** - Professional-grade animations
- **ScrollTrigger** - Scroll-based animation control
- **Vanilla JavaScript** - No framework overhead
- **Modern CSS** - Custom properties, Grid, Flexbox
- **Font Awesome** - Icon library
- **Google Fonts** - Inter & JetBrains Mono

## 🎯 Design Inspiration

Inspired by premium tech websites:
- Apple - Clean, minimalist aesthetics
- Tesla - Futuristic, bold design
- Stripe - Professional, modern UI
- Vercel - Dark theme expertise
- Nvidia - 3D graphics excellence

## 🚀 Quick Start

### Option 1: Simple HTTP Server (Recommended)

```bash
# Using Python 3
python3 -m http.server 8000

# Using Python 2
python -m SimpleHTTPServer 8000

# Using Node.js
npx serve

# Using PHP
php -S localhost:8000
```

Then open: `http://localhost:8000`

### Option 2: Open Directly

Simply open `index.html` in a modern browser (Chrome, Firefox, Safari, Edge).

## 🎮 Interactive Features

### Custom Cursor
- Move your mouse to see the custom cursor with follower effect
- Hover over interactive elements to see cursor expand

### 3D Object Interaction
- Click on floating 3D objects to trigger animations
- Objects pulse and change color on interaction

### Easter Egg
- Try entering the Konami Code: ↑ ↑ ↓ ↓ ← → ← → B A
- Activates "Party Mode" with randomized animations

### Console Access
Open browser console and type:
```javascript
portfolio.activatePartyMode() // Trigger party mode
portfolio.scene // Access Three.js scene
portfolio.camera // Access camera object
```

## 📊 Performance Optimizations

- **Adaptive Particle Count**: Reduced particles on mobile devices
- **Lazy Loading**: Sections animate when scrolled into view
- **Debounced Resize**: Optimized window resize handling
- **Intersection Observer**: Efficient visibility detection
- **GPU Acceleration**: Hardware-accelerated CSS transforms
- **Asset Optimization**: Minimized external dependencies

## 📱 Responsive Design

- **Desktop**: Full 3D experience with all effects
- **Tablet**: Optimized particle count and animations
- **Mobile**: Touch-friendly with simplified effects
- **Custom Cursor**: Disabled on touch devices

## 🎨 Color Palette

```css
Primary Purple:   #8b5cf6
Secondary Cyan:   #06b6d4
Accent Pink:      #ec4899
Neon Blue:        #00d4ff
Neon Purple:      #b24bf3
Neon Pink:        #ff0080
Background Dark:  #0a0a0f
Background Darker:#050508
```

## 🔧 Customization

### Update Personal Information

Edit the following in `index.html`:

1. **Name**: Change "ABHIJIT GORE" in the hero section
2. **Social Links**: Update href attributes in social section
3. **Projects**: Modify project cards with your work
4. **Email**: Change contact email in multiple places
5. **About Text**: Update biography in about section

### Modify Colors

Edit CSS variables in `styles.css`:

```css
:root {
    --color-primary: #8b5cf6;
    --color-secondary: #06b6d4;
    --color-accent: #ec4899;
    /* ... more variables */
}
```

### Adjust 3D Scene

Edit `script.js`:

```javascript
// Change particle count
const particleCount = 3000; // Line ~73

// Modify camera position
camera.position.z = 50; // Line ~58

// Adjust floating object count
// Add/remove geometries array items (Line ~105)
```

## 🌟 Browser Support

- ✅ Chrome 90+
- ✅ Firefox 88+
- ✅ Safari 14+
- ✅ Edge 90+
- ⚠️  Opera 76+
- ❌ IE 11 (Not supported - requires modern WebGL)

## 📝 SEO Features

- Semantic HTML5 structure
- Proper meta tags and descriptions
- Optimized heading hierarchy
- Alt tags for images
- Unique IDs for all sections
- Clean, crawlable URLs

## 🐛 Known Issues & Future Enhancements

### Potential Improvements
- [ ] Add dark/light theme toggle
- [ ] Implement actual form backend integration
- [ ] Add more Easter eggs and interactions
- [ ] Create loading screen animation
- [ ] Add sound effects (optional)
- [ ] Implement blog section
- [ ] Add testimonials carousel
- [ ] Create case study pages

### Browser Quirks
- Safari may have slight WebGL performance differences
- Firefox might show different font rendering
- Mobile Safari has reduced particle count for performance

## 📧 Contact Form

The contact form currently logs to console. To integrate with a backend:

1. **Email Services**: Use EmailJS, FormSpree, or Netlify Forms
2. **Custom Backend**: Connect to your Node.js/PHP server
3. **Serverless**: Use AWS Lambda, Vercel Functions, or Netlify Functions

Example with EmailJS:
```javascript
emailjs.send('service_id', 'template_id', data)
    .then(() => console.log('Email sent!'));
```

## 🙏 Credits

- **Three.js**: https://threejs.org/
- **GSAP**: https://greensock.com/gsap/
- **Font Awesome**: https://fontawesome.com/
- **Google Fonts**: https://fonts.google.com/

## 📄 License

MIT License - Feel free to use this template for your own portfolio!

## 🤝 Contributing

Feel free to fork, modify, and use this template. If you create something cool, let me know!

---

**Made with ❤️ by Abhijit Gore**

*A premium 3D portfolio experience that showcases serious software development expertise.*
