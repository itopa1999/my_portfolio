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
    "# Django developer setup",
    "from developer.models import Developer",
    "from developer.skills import add_skill",
    "",
    "def create_portfolio():",
    "    dev = Developer(name='Salawu Lucky')",
    "    add_skill(dev, 'Python')",
    "    add_skill(dev, 'Django')",
    "    add_skill(dev, 'Celery & Redis')",
    "    add_skill(dev, 'PostgreSQL')",
    "    dev.save()",
    "    return dev.build_portfolio()",
    "",
    "# .NET Core developer setup",
    "public class Developer",
    "{",
    "    public string Name { get; set; }",
    "    public List<string> Skills { get; set; } = new();",
    "",
    "    public void AddSkill(string skill) => Skills.Add(skill);",
    "    public string BuildPortfolio() => $\"Portfolio of {Name} with {Skills.Count} skills.\";",
    "}",
    "",
    "var dev = new Developer { Name = \"Salawu Lucky\" };",
    "dev.AddSkill(\"C#\");",
    "dev.AddSkill(\"ASP.NET Core\");",
    "dev.AddSkill(\"Entity Framework Core\");",
    "dev.AddSkill(\"LINQ & REST APIs\");",
    "Console.WriteLine(dev.BuildPortfolio());",
    "",
    "# Django project structure",
    "class Project(models.Model):",
    "    name = models.CharField(max_length=100)",
    "    tech_stack = models.CharField(max_length=255)",
    "",
    "    def display(self):",
    "        return f\"{self.name} built with {self.tech_stack}\"",
    "",
    "# REST API in .NET",
    "[ApiController]",
    "[Route(\"api/[controller]\")]",
    "public class ProjectsController : ControllerBase",
    "{",
    "    [HttpGet]",
    "    public IActionResult GetProjects() => Ok(_context.Projects.ToList());",
    "}",
    "",
    "// Client-side fetch",
    "fetch('/api/projects')",
    "  .then(response => response.json())",
    "  .then(projects => renderProjects(projects));",
    "",
    "# Django Signal for user tracking",
    "@receiver(post_save, sender=User)",
    "def create_user_profile(sender, instance, created, **kwargs):",
    "    if created:",
    "        Profile.objects.create(user=instance)",
    "",
    "// JWT Authentication in .NET",
    "services.AddAuthentication(JwtBearerDefaults.AuthenticationScheme)",
    "    .AddJwtBearer(options => {",
    "        options.TokenValidationParameters = new TokenValidationParameters",
    "        {",
    "            ValidateIssuer = true,",
    "            ValidateAudience = true,",
    "            ValidateLifetime = true,",
    "        };",
    "    });",
    "",
    "# Clean code principles",
    "# Reusable components",
    "# Async views and background workers (Celery)",
    "// Dependency Injection in ASP.NET Core",
    "// Robust error handling and logging",
    "// Dockerized and deployed apps",
    "// CI/CD pipeline integration (GitHub Actions)"
    ];

    
    codeLines.forEach((line, index) => {
        const codeLine = document.createElement('div');
        codeLine.className = 'code-line';
        codeLine.textContent = line;
        codeLine.style.top = `${index * 30}px`;
        // codeLine.style.animationDelay = `${Math.random() * 5}s`;
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


(function () {
    emailjs.init("eIRYUoP-qLtXs66Oe");
})();


document.getElementById("contact-form").addEventListener("submit", function (e) {
    e.preventDefault();

    const submitBtn = document.getElementById("submitBtn");
    const submitBtnText = document.getElementById("submitBtnText");
    const submitSpinner = document.getElementById("submitSpinner");

    submitBtn.disabled = true;
    submitSpinner.classList.remove("d-none");
    submitBtnText.textContent = "Sending...";

    emailjs.sendForm("service_i1iez4k", "template_6u63wz7", this)
        .then(function () {
            showModal("Message sent successfully!", "success");
        }, function (error) {
            showModal("Failed to send message. Please try again later.", "error");
            console.log(error);
        }).finally(() => {
            // Hide spinner and re-enable button
            submitSpinner.classList.add("d-none");
            submitBtnText.textContent = "Send Message";
            submitBtn.disabled = false;
        });
});


function showModal(message, type) {
    const alertModal = new bootstrap.Modal(document.getElementById("formAlertModal"));
    const alertMessage = document.getElementById("formAlertMessage");

    alertMessage.textContent = message;
    alertMessage.className = `modal-body py-2 ${type === "success" ? "text-success" : "text-danger"}`;

    alertModal.show();
}