// Preloader
// window.addEventListener('load', function() {
//     setTimeout(function() {
//         const preloader = document.getElementById('preloader');
//         preloader.style.opacity = '0';
//         preloader.style.visibility = 'hidden';
//     }, 2000);
// });

// Generate code background
function generateCodeBackground(containerId) {
    const container = document.getElementById(containerId);
    if (!container) return;
    
    const codeLines = [
        "function createPortfolio() {",
        "  const developer = new Developer('John Doe');",
        "  developer.addSkill('JavaScript');",
        "  developer.addSkill('React');",
        "  developer.addSkill('Node.js');",
        "  return developer.buildPortfolio();",
        "}",
        "class Project {",
        "  constructor(name, tech) {",
        "    this.name = name;",
        "    this.tech = tech;",
        "  }",
        "  display() {",
        "    console.log(`${this.name} built with ${this.tech}`);",
        "  }",
        "}",
        "const portfolio = createPortfolio();",
        "portfolio.show();",
        "// Modern, responsive design",
        "// Clean code architecture",
        "// Interactive UI components",
        "const api = new RESTfulAPI();",
        "api.get('/projects').then(data => {",
        "  renderProjects(data);",
        "});",
        "function animateElements() {",
        "  document.querySelectorAll('.card').forEach(card => {",
        "    card.classList.add('animated');",
        "  });",
        "}",
        "window.addEventListener('scroll', () => {",
        "  checkVisibility();",
        "});",
        "// Optimized performance",
        "// Cross-browser compatibility",
        "// Mobile-first approach"
    ];
    
    codeLines.forEach((line, index) => {
        const codeLine = document.createElement('div');
        codeLine.className = 'code-line';
        codeLine.textContent = line;
        codeLine.style.top = `${index * 30}px`;
        codeLine.style.animationDelay = `${Math.random() * 5}s`;
        codeLine.style.left = `${Math.random() * 20}%`;
        container.appendChild(codeLine);
    });
}

// Initialize code backgrounds
window.addEventListener('load', function() {
    generateCodeBackground('hero-code-bg');
    generateCodeBackground('about-code-bg');
    generateCodeBackground('skills-code-bg');
    generateCodeBackground('projects-code-bg');
    generateCodeBackground('contact-code-bg');
    
    // Hide preloader AFTER everything is done
    setTimeout(function () {
        const preloader = document.getElementById('preloader');
        if (preloader) {
            preloader.style.opacity = '0';
            preloader.style.visibility = 'hidden';
        }
    }, 500);
});

// Navbar scroll effect
window.addEventListener('scroll', function() {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});

// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            window.scrollTo({
                top: target.offsetTop - 70,
                behavior: 'smooth'
            });
            
            // Update active nav link
            document.querySelectorAll('.nav-link').forEach(link => {
                link.classList.remove('active');
            });
            this.classList.add('active');
        }
    });
});

// Scroll animation
function checkScroll() {
    const elements = document.querySelectorAll('.animate-on-scroll');
    elements.forEach(element => {
        const elementPosition = element.getBoundingClientRect().top;
        const screenPosition = window.innerHeight / 1.3;
        
        if (elementPosition < screenPosition) {
            element.classList.add('visible');
        }
    });
}

window.addEventListener('scroll', checkScroll);
window.addEventListener('load', checkScroll);

// Initialize animations on page load
document.addEventListener('DOMContentLoaded', function() {
    checkScroll();
});