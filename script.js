// ============================================
// PREMIUM 3D PORTFOLIO - ABHIJIT GORE
// Three.js Scene | Camera Animations | Interactions
// ============================================

// === INITIALIZATION ===
let scene, camera, renderer, particles, particleSystem;
let mouseX = 0, mouseY = 0;
let windowHalfX = window.innerWidth / 2;
let windowHalfY = window.innerHeight / 2;

// Floating objects for different sections
let floatingObjects = [];
let currentSection = 0;

// === GSAP SETUP ===
gsap.registerPlugin(ScrollTrigger);

// === INIT THREE.JS SCENE ===
function initThreeJS() {
    const canvas = document.getElementById('webgl-canvas');

    // Scene setup
    scene = new THREE.Scene();
    scene.fog = new THREE.FogExp2(0x0a0a0f, 0.0008);

    // Camera setup
    camera = new THREE.PerspectiveCamera(
        75,
        window.innerWidth / window.innerHeight,
        0.1,
        1000
    );
    camera.position.z = 50;

    // Renderer setup
    renderer = new THREE.WebGLRenderer({
        canvas: canvas,
        antialias: true,
        alpha: true
    });
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.setClearColor(0x0a0a0f, 1);

    // Lights
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.3);
    scene.add(ambientLight);

    const pointLight1 = new THREE.PointLight(0x8b5cf6, 2, 100);
    pointLight1.position.set(20, 20, 20);
    scene.add(pointLight1);

    const pointLight2 = new THREE.PointLight(0x06b6d4, 2, 100);
    pointLight2.position.set(-20, -20, -20);
    scene.add(pointLight2);

    const pointLight3 = new THREE.PointLight(0xec4899, 1.5, 100);
    pointLight3.position.set(0, 30, -30);
    scene.add(pointLight3);

    // Particle system for background stars
    createParticleSystem();

    // Create floating geometric objects
    createFloatingObjects();

    // Start animation loop
    animate();
}

// === PARTICLE SYSTEM ===
function createParticleSystem() {
    const particleCount = 3000;
    const particles = new THREE.BufferGeometry();
    const positions = new Float32Array(particleCount * 3);
    const colors = new Float32Array(particleCount * 3);

    const colorPalette = [
        new THREE.Color(0x8b5cf6),
        new THREE.Color(0x06b6d4),
        new THREE.Color(0xec4899),
        new THREE.Color(0xffffff)
    ];

    for (let i = 0; i < particleCount * 3; i += 3) {
        positions[i] = (Math.random() - 0.5) * 200;
        positions[i + 1] = (Math.random() - 0.5) * 200;
        positions[i + 2] = (Math.random() - 0.5) * 200;

        const color = colorPalette[Math.floor(Math.random() * colorPalette.length)];
        colors[i] = color.r;
        colors[i + 1] = color.g;
        colors[i + 2] = color.b;
    }

    particles.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    particles.setAttribute('color', new THREE.BufferAttribute(colors, 3));

    const particleMaterial = new THREE.PointsMaterial({
        size: 0.3,
        vertexColors: true,
        transparent: true,
        opacity: 0.8,
        blending: THREE.AdditiveBlending
    });

    particleSystem = new THREE.Points(particles, particleMaterial);
    scene.add(particleSystem);
}

// === FLOATING GEOMETRIC OBJECTS ===
function createFloatingObjects() {
    // Geometries for different sections
    const geometries = [
        new THREE.TorusGeometry(3, 0.5, 16, 100),
        new THREE.IcosahedronGeometry(2, 0),
        new THREE.OctahedronGeometry(2.5),
        new THREE.TorusKnotGeometry(2, 0.5, 100, 16),
        new THREE.DodecahedronGeometry(2),
        new THREE.TetrahedronGeometry(3),
        new THREE.BoxGeometry(3, 3, 3),
        new THREE.SphereGeometry(2, 32, 32)
    ];

    geometries.forEach((geometry, index) => {
        const material = new THREE.MeshPhysicalMaterial({
            color: 0x8b5cf6,
            emissive: 0x8b5cf6,
            emissiveIntensity: 0.3,
            metalness: 0.8,
            roughness: 0.2,
            transparent: true,
            opacity: 0.6,
            wireframe: true
        });

        const mesh = new THREE.Mesh(geometry, material);
        mesh.position.set(
            (Math.random() - 0.5) * 30,
            (Math.random() - 0.5) * 30,
            -index * 70 - 20
        );

        mesh.userData = {
            rotationSpeed: {
                x: (Math.random() - 0.5) * 0.01,
                y: (Math.random() - 0.5) * 0.01,
                z: (Math.random() - 0.5) * 0.01
            },
            floatSpeed: Math.random() * 0.02 + 0.01,
            floatRange: Math.random() * 2 + 1
        };

        floatingObjects.push(mesh);
        scene.add(mesh);
    });
}

// === ANIMATION LOOP ===
function animate() {
    requestAnimationFrame(animate);

    const time = Date.now() * 0.0005;

    // Rotate particle system
    if (particleSystem) {
        particleSystem.rotation.y += 0.0002;
        particleSystem.rotation.x += 0.0001;
    }

    // Animate floating objects
    floatingObjects.forEach((obj, index) => {
        obj.rotation.x += obj.userData.rotationSpeed.x;
        obj.rotation.y += obj.userData.rotationSpeed.y;
        obj.rotation.z += obj.userData.rotationSpeed.z;

        obj.position.y += Math.sin(time + index) * obj.userData.floatSpeed;
    });

    // Camera parallax based on mouse
    camera.position.x += (mouseX * 0.05 - camera.position.x) * 0.05;
    camera.position.y += (-mouseY * 0.05 - camera.position.y) * 0.05;
    camera.lookAt(scene.position);

    renderer.render(scene, camera);
}

// === SCROLL-BASED CAMERA ANIMATION ===
function setupScrollAnimations() {
    const sections = document.querySelectorAll('.section');

    sections.forEach((section, index) => {
        gsap.to(camera.position, {
            z: 50 - (index * 8),
            scrollTrigger: {
                trigger: section,
                start: 'top center',
                end: 'bottom center',
                scrub: 1,
                onEnter: () => updateActiveSection(index),
                onEnterBack: () => updateActiveSection(index)
            }
        });

        // Animate section content
        gsap.from(section.querySelector('.section-content'), {
            opacity: 0,
            y: 100,
            duration: 1,
            ease: 'power3.out',
            scrollTrigger: {
                trigger: section,
                start: 'top 80%',
                toggleActions: 'play none none reverse'
            }
        });
    });

    // Hero glitch effect
    const heroName = document.querySelector('.hero-name');
    if (heroName) {
        gsap.to(heroName, {
            textShadow: '0 0 100px rgba(139, 92, 246, 0.8)',
            duration: 2,
            repeat: -1,
        });
    }

    // Skill cards stagger animation - DISABLED to ensure visibility
    // Cards are now always visible with CSS opacity: 1 !important
    /*
    const skillCards = document.querySelectorAll('.skill-card');
    gsap.from(skillCards, {
        opacity: 0,
        y: 50,
        stagger: 0.1,
        duration: 0.8,
        ease: 'back.out(1.7)',
        scrollTrigger: {
            trigger: '.skills-section',
            start: 'top 80%',
            toggleActions: 'play none none none'
        }
    });
    */

    // Project cards stagger - DISABLED to ensure visibility
    // Cards are now always visible with CSS opacity: 1 !important
    /*
    const projectCards = document.querySelectorAll('.project-card');
    gsap.from(projectCards, {
        opacity: 0,
        scale: 0.8,
        stagger: 0.15,
        duration: 1,
        ease: 'power3.out',
        scrollTrigger: {
            trigger: '.projects-section',
            start: 'top 80%',
            toggleActions: 'play none none none'
        }
    });
    */

    // Social icons orbital animation
    const socialIcons = document.querySelectorAll('.social-icon');
    socialIcons.forEach((icon, index) => {
        gsap.to(icon, {
            rotation: 360,
            duration: 20 + index * 5,
            repeat: -1,
            ease: 'none'
        });
    });
}

function updateActiveSection(index) {
    currentSection = index;

    // Update navigation active state
    const navLinks = document.querySelectorAll('.nav-link');
    navLinks.forEach((link, i) => {
        link.classList.toggle('active', i === index);
    });

    // Update floating object visibility and colors
    floatingObjects.forEach((obj, i) => {
        const isVisible = i === index;
        gsap.to(obj.material, {
            opacity: isVisible ? 0.8 : 0.2,
            duration: 1
        });

        if (isVisible) {
            const colors = [0x8b5cf6, 0x06b6d4, 0xec4899];
            obj.material.color.setHex(colors[index % colors.length]);
            obj.material.emissive.setHex(colors[index % colors.length]);
        }
    });
}

// === CUSTOM CURSOR ===
function setupCustomCursor() {
    const cursor = document.querySelector('.cursor');
    const follower = document.querySelector('.cursor-follower');

    let cursorX = 0, cursorY = 0;
    let followerX = 0, followerY = 0;

    document.addEventListener('mousemove', (e) => {
        cursorX = e.clientX;
        cursorY = e.clientY;

        mouseX = (e.clientX - windowHalfX) / windowHalfX;
        mouseY = (e.clientY - windowHalfY) / windowHalfY;
    });

    function animateCursor() {
        const distX = cursorX - followerX;
        const distY = cursorY - followerY;

        followerX += distX * 0.1;
        followerY += distY * 0.1;

        cursor.style.transform = `translate(${cursorX}px, ${cursorY}px)`;
        follower.style.transform = `translate(${followerX}px, ${followerY}px)`;

        requestAnimationFrame(animateCursor);
    }

    animateCursor();

    // Cursor interactions
    const interactiveElements = document.querySelectorAll('a, button, .glass-card');
    interactiveElements.forEach(el => {
        el.addEventListener('mouseenter', () => {
            cursor.style.transform += ' scale(1.5)';
            follower.style.transform += ' scale(1.5)';
        });

        el.addEventListener('mouseleave', () => {
            cursor.style.transform = cursor.style.transform.replace(' scale(1.5)', '');
            follower.style.transform = follower.style.transform.replace(' scale(1.5)', '');
        });
    });
}

// === SCROLL PROGRESS ===
function setupScrollProgress() {
    const progressBar = document.getElementById('progress-bar');

    window.addEventListener('scroll', () => {
        const scrollHeight = document.documentElement.scrollHeight - window.innerHeight;
        const scrolled = window.scrollY;
        const progress = (scrolled / scrollHeight) * 100;

        progressBar.style.width = progress + '%';
    });
}

// === NAVIGATION ===
function setupNavigation() {
    const navLinks = document.querySelectorAll('.nav-link');

    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const targetId = link.getAttribute('href').substring(1);
            const targetSection = document.getElementById(targetId);

            if (targetSection) {
                targetSection.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
}

// === CONTACT FORM ===
function setupContactForm() {
    const form = document.getElementById('contact-form');
    const successMessage = document.getElementById('success-message');

    // Initialize EmailJS with your public key
    // You'll need to replace this with your actual EmailJS public key
    emailjs.init("YOUR_PUBLIC_KEY"); // Replace with your EmailJS public key

    form.addEventListener('submit', async (e) => {
        e.preventDefault();

        const submitBtn = form.querySelector('.submit-btn');
        const originalBtnText = submitBtn.innerHTML;

        // Show loading state
        submitBtn.innerHTML = '<span class="prompt">$</span> sending...';
        submitBtn.disabled = true;

        try {
            // Get form data
            const formData = {
                from_name: form.querySelector('#name').value,
                from_email: form.querySelector('#email').value,
                message: form.querySelector('#message').value,
                to_email: 'abhijitagore2000@gmail.com'
            };

            // Send email using EmailJS
            // You'll need to replace 'YOUR_SERVICE_ID' and 'YOUR_TEMPLATE_ID' with actual values
            const response = await emailjs.send(
                'YOUR_SERVICE_ID',    // Replace with your EmailJS service ID
                'YOUR_TEMPLATE_ID',   // Replace with your EmailJS template ID
                formData
            );

            console.log('✅ Email sent successfully:', response);

            // Show success message
            successMessage.style.display = 'flex';
            form.reset();

            // Reset button
            submitBtn.innerHTML = '<span class="prompt">$</span> message sent ✓';

            // Hide success message and reset button after 5 seconds
            setTimeout(() => {
                successMessage.style.display = 'none';
                submitBtn.innerHTML = originalBtnText;
                submitBtn.disabled = false;
            }, 5000);

        } catch (error) {
            console.error('❌ Failed to send email:', error);

            // Show error message
            alert('Sorry, there was an error sending your message. Please email me directly at abhijitagore2000@gmail.com');

            // Reset button
            submitBtn.innerHTML = originalBtnText;
            submitBtn.disabled = false;
        }
    });
}


// === RESUME DOWNLOAD ===
// Disabled - using direct Google Drive link instead
/*
function setupResumeDownload() {
    const downloadBtn = document.getElementById('download-resume-btn');

    if (downloadBtn) {
        downloadBtn.addEventListener('click', (e) => {
            // Google Drive link opens in new tab, show visual feedback
            console.log('📄 Opening resume from Google Drive...');

            // Add visual feedback
            const originalText = downloadBtn.innerHTML;
            downloadBtn.innerHTML = '<i class="fas fa-check"></i> Opening...';
            downloadBtn.style.pointerEvents = 'none';

            setTimeout(() => {
                downloadBtn.innerHTML = originalText;
                downloadBtn.style.pointerEvents = 'auto';
            }, 2000);
        });
    }
}
*/
function setupResumeDownload() {
    // No-op function - direct Google Drive link handles download
    console.log('📄 Resume download uses direct Google Drive link');
}


// === PARTICLE INTERACTIONS ===
function setupParticleInteractions() {
    const raycaster = new THREE.Raycaster();
    const mouse = new THREE.Vector2();

    window.addEventListener('click', (event) => {
        mouse.x = (event.clientX / window.innerWidth) * 2 - 1;
        mouse.y = -(event.clientY / window.innerHeight) * 2 + 1;

        raycaster.setFromCamera(mouse, camera);

        const intersects = raycaster.intersectObjects(floatingObjects);

        if (intersects.length > 0) {
            const object = intersects[0].object;

            // Pulse animation on click
            gsap.to(object.scale, {
                x: 1.5,
                y: 1.5,
                z: 1.5,
                duration: 0.3,
                yoyo: true,
                repeat: 1,
                ease: 'power2.inOut'
            });

            // Color change
            gsap.to(object.material.color, {
                r: Math.random(),
                g: Math.random(),
                b: Math.random(),
                duration: 0.5
            });
        }
    });
}

// === WINDOW RESIZE ===
function handleResize() {
    windowHalfX = window.innerWidth / 2;
    windowHalfY = window.innerHeight / 2;

    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();

    renderer.setSize(window.innerWidth, window.innerHeight);
}

window.addEventListener('resize', handleResize);

// === PERFORMANCE OPTIMIZATION ===
function optimizePerformance() {
    // Reduce particle count on mobile
    if (window.innerWidth < 768) {
        const positions = particleSystem.geometry.attributes.position.array;
        const newPositions = new Float32Array(positions.length / 2);

        for (let i = 0; i < newPositions.length; i += 3) {
            newPositions[i] = positions[i * 2];
            newPositions[i + 1] = positions[i * 2 + 1];
            newPositions[i + 2] = positions[i * 2 + 2];
        }

        particleSystem.geometry.setAttribute(
            'position',
            new THREE.BufferAttribute(newPositions, 3)
        );
    }
}

// === ANIMATED TEXT EFFECTS ===
function setupTextAnimations() {
    // Typing effect for terminal-style elements
    const terminalLines = document.querySelectorAll('.terminal-line');

    terminalLines.forEach((line, index) => {
        const text = line.textContent;
        line.textContent = '';

        gsap.to(line, {
            scrollTrigger: {
                trigger: line,
                start: 'top 80%'
            },
            onStart: () => {
                let i = 0;
                const interval = setInterval(() => {
                    if (i < text.length) {
                        line.textContent += text.charAt(i);
                        i++;
                    } else {
                        clearInterval(interval);
                    }
                }, 30);
            }
        });
    });
}

// === SKILL BAR ANIMATIONS ===
function setupSkillBarAnimations() {
    const skillBars = document.querySelectorAll('.skill-progress');

    skillBars.forEach(bar => {
        const targetWidth = bar.style.width;
        bar.style.width = '0%';

        gsap.to(bar, {
            width: targetWidth,
            duration: 2,
            ease: 'power3.out',
            scrollTrigger: {
                trigger: bar,
                start: 'top 80%'
            }
        });
    });
}

// === INTERSECTION OBSERVER FOR PERFORMANCE ===
function setupIntersectionObserver() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -100px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('is-visible');
            }
        });
    }, observerOptions);

    const sections = document.querySelectorAll('.section');
    sections.forEach(section => observer.observe(section));
}

// === EASTER EGGS ===
function setupEasterEggs() {
    let konamiCode = [];
    const pattern = ['ArrowUp', 'ArrowUp', 'ArrowDown', 'ArrowDown', 'ArrowLeft', 'ArrowRight', 'ArrowLeft', 'ArrowRight', 'b', 'a'];

    document.addEventListener('keydown', (e) => {
        konamiCode.push(e.key);
        konamiCode = konamiCode.slice(-pattern.length);

        if (konamiCode.join(',') === pattern.join(',')) {
            // Activate party mode!
            activatePartyMode();
        }
    });
}

function activatePartyMode() {
    floatingObjects.forEach(obj => {
        gsap.to(obj.rotation, {
            x: Math.random() * Math.PI * 2,
            y: Math.random() * Math.PI * 2,
            z: Math.random() * Math.PI * 2,
            duration: 2,
            ease: 'elastic.out(1, 0.3)'
        });

        gsap.to(obj.material.color, {
            r: Math.random(),
            g: Math.random(),
            b: Math.random(),
            duration: 0.5,
            repeat: 5,
            yoyo: true
        });
    });

    console.log('🎉 Party Mode Activated! 🎉');
}

// === LOADING ANIMATION ===
function setupLoadingAnimation() {
    window.addEventListener('load', () => {
        gsap.to('.section-content', {
            opacity: 1,
            y: 0,
            duration: 1,
            stagger: 0.2,
            ease: 'power3.out'
        });
    });
}

// === INITIALIZE EVERYTHING ===
function init() {
    console.log('🚀 Initializing Abhijit Gore Portfolio...');

    initThreeJS();
    setupScrollAnimations();
    setupCustomCursor();
    setupScrollProgress();
    setupNavigation();
    setupContactForm();
    setupResumeDownload();
    setupParticleInteractions();
    setupTextAnimations();
    setupSkillBarAnimations();
    setupIntersectionObserver();
    setupEasterEggs();
    setupLoadingAnimation();
    optimizePerformance();

    console.log('✨ Portfolio initialized successfully!');
}

// Start when DOM is loaded
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
} else {
    init();
}

// === EXPORT FOR CONSOLE ACCESS ===
window.portfolio = {
    scene,
    camera,
    renderer,
    floatingObjects,
    activatePartyMode,
    version: '1.0.0'
};
