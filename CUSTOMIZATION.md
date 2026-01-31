# 🎨 Quick Customization Guide

This guide helps you personalize the portfolio with your own information.

## 📝 Essential Updates

### 1. Personal Information (index.html)

**Line 49-56: Hero Section - Your Name**
```html
<h1 class="hero-name" data-text="ABHIJIT GORE">ABHIJIT GORE</h1>
<p class="hero-subtitle">Software Developer & Tech Architect</p>
```
Change to your name and title.

**Line 56-60: Your Specializations**
```html
<span class="tag">Full Stack</span>
<span class="tag">Cloud Solutions</span>
<span class="tag">DevOps</span>
```
Update with your tech specialties.

### 2. About Section (index.html, Lines 72-110)

**Update Stats:**
```html
<div class="stat-number">5+</div>
<div class="stat-label">Years Experience</div>
```
Change to your actual experience.

**Update Bio:**
```html
<p>I'm a passionate software developer with expertise in...</p>
```
Write your own story.

### 3. Skills Section (index.html, Lines 116-180)

Add or remove skill cards. Template:
```html
<div class="skill-card glass-card">
    <div class="skill-icon">
        <i class="fab fa-python"></i> <!-- Change icon -->
    </div>
    <h3>Python</h3> <!-- Change name -->
    <div class="skill-bar">
        <div class="skill-progress" style="width: 85%"></div> <!-- Change % -->
    </div>
</div>
```

**Icon Reference:** https://fontawesome.com/icons

### 4. Certifications (Lines 185-225)

Update certification cards:
```html
<div class="cert-card glass-card">
    <div class="cert-icon">
        <i class="fab fa-aws"></i>
    </div>
    <h3>Your Certification Name</h3>
    <p>Issuing Organization</p>
    <span class="cert-year">2024</span>
</div>
```

### 5. Projects (Lines 230-330)

Update each project card:
```html
<div class="project-card glass-card">
    <div class="project-image">
        <div class="project-overlay">
            <div class="project-links">
                <a href="https://yourproject.com" class="project-link">
                    <i class="fas fa-external-link-alt"></i> Live
                </a>
                <a href="https://github.com/yourusername/repo" class="project-link">
                    <i class="fab fa-github"></i> Code
                </a>
            </div>
        </div>
    </div>
    <div class="project-content">
        <h3>Your Project Name</h3>
        <p>Your project description here...</p>
        <div class="project-tech">
            <span class="tech-tag">React</span>
            <span class="tech-tag">Node.js</span>
        </div>
    </div>
</div>
```

### 6. Resume Download (Line 350)

**Update resume link:**
```html
<a href="path/to/your-resume.pdf" class="download-btn" download>
    <i class="fas fa-download"></i> Download PDF
</a>
```

Put your PDF in the same folder and link it.

### 7. Social Links (Lines 379-410)

**Update ALL social URLs:**
```html
<a href="https://github.com/YOUR-USERNAME" target="_blank" class="social-card glass-card">
    ...
</a>

<a href="https://linkedin.com/in/YOUR-USERNAME" target="_blank" class="social-card glass-card">
    ...
</a>

<a href="https://hackerrank.com/YOUR-USERNAME" target="_blank" class="social-card glass-card">
    ...
</a>
```

**Update handles:**
```html
<span class="social-handle">@yourusername</span>
```

### 8. Contact Information (Lines 470-480)

**Update email and location:**
```html
<div class="info-item">
    <i class="fas fa-envelope"></i>
    <span>your.email@example.com</span>
</div>
<div class="info-item">
    <i class="fas fa-map-marker-alt"></i>
    <span>Your City, Country</span>
</div>
```

## 🎨 Color Customization (styles.css)

### Change Color Scheme (Lines 8-20)

```css
:root {
    --color-primary: #8b5cf6;      /* Purple - your brand color */
    --color-secondary: #06b6d4;    /* Cyan - accent color */
    --color-accent: #ec4899;       /* Pink - highlight color */
    --color-neon-blue: #00d4ff;    /* Neon blue glow */
    --color-neon-purple: #b24bf3;  /* Neon purple glow */
    --color-neon-pink: #ff0080;    /* Neon pink glow */
}
```

### Popular Color Schemes:

**Green Tech:**
```css
--color-primary: #10b981;
--color-secondary: #34d399;
--color-accent: #6ee7b7;
```

**Blue Professional:**
```css
--color-primary: #3b82f6;
--color-secondary: #60a5fa;
--color-accent: #93c5fd;
```

**Red Energy:**
```css
--color-primary: #ef4444;
--color-secondary: #f87171;
--color-accent: #fca5a5;
```

## 🖼️ Adding Your Photo

Replace the astronaut icon with your photo:

**In index.html (Line 76-80):**
```html
<!-- Replace this: -->
<div class="profile-placeholder">
    <i class="fas fa-user-astronaut"></i>
</div>

<!-- With this: -->
<div class="profile-placeholder">
    <img src="your-photo.jpg" alt="Abhijit Gore" style="width: 100%; height: 100%; object-fit: cover; border-radius: 50%;">
</div>
```

## 📧 Contact Form Integration

### Option 1: EmailJS (Free)

1. Sign up at https://www.emailjs.com/
2. Get your Service ID and Template ID
3. Add to `script.js` (Line 504):

```javascript
form.addEventListener('submit', (e) => {
    e.preventDefault();
    
    emailjs.send('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', {
        from_name: formData.get('name'),
        from_email: formData.get('email'),
        message: formData.get('message')
    }).then(() => {
        successMessage.style.display = 'flex';
        form.reset();
    });
});
```

### Option 2: Formspree (Free)

Replace form tag:
```html
<form class="contact-form" id="contact-form" action="https://formspree.io/f/YOUR_FORM_ID" method="POST">
```

### Option 3: Netlify Forms

Add `data-netlify="true"` to form:
```html
<form class="contact-form" id="contact-form" data-netlify="true">
```

## 🚀 Deployment

### GitHub Pages

1. Create a GitHub repository
2. Push your code
3. Go to Settings > Pages
4. Select main branch
5. Your site will be at: `https://yourusername.github.io/repo-name`

### Netlify (Drag & Drop)

1. Go to https://netlify.com
2. Drag your folder
3. Done! Free hosting with HTTPS

### Vercel

```bash
npm install -g vercel
vercel
```

## 🎯 Performance Tips

1. **Optimize Images**: Use WebP format, max 200KB
2. **Minify CSS/JS**: Use online minifiers before deployment
3. **Enable Caching**: Add `.htaccess` for Apache servers
4. **CDN**: Use Cloudflare for faster global loading

## 🐛 Common Issues

**Three.js not loading?**
- Check browser console for errors
- Ensure internet connection (CDN links)
- Try different CDN (unpkg.com vs cdnjs)

**Animations not smooth?**
- Reduce particle count in `script.js` (Line 73)
- Disable some floating objects
- Test on Chrome/Firefox (better WebGL)

**Contact form not working?**
- Check browser console
- Add form integration (see above)
- Test with simple alert first

## 📱 Adding Sections

Want to add a new section? Use this template:

```html
<section id="your-section" class="section your-section">
    <div class="section-content">
        <h2 class="section-title">Your Title</h2>
        <div class="glass-card">
            <!-- Your content here -->
        </div>
    </div>
</section>
```

And add to navigation:
```html
<a href="#your-section" class="nav-link">Your Section</a>
```

## 💡 Pro Tips

1. **Test on Multiple Browsers**: Chrome, Firefox, Safari, Edge
2. **Mobile First**: Always check mobile responsiveness
3. **Use Real Content**: Replace all placeholder text
4. **Compress Assets**: Optimize all images and fonts
5. **SEO**: Update meta tags, titles, descriptions
6. **Analytics**: Add Google Analytics tracking code
7. **Performance**: Test with Lighthouse in Chrome DevTools

## 🎉 You're All Set!

Your portfolio should now be fully personalized. Remember:
- Keep content concise and impactful
- Update projects regularly
- Test all links before deploying
- Ask for feedback from peers

Need help? Check the README.md for more details!

---

**Happy Coding! 🚀**
