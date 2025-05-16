// Project data
const projects = [
    {
        title: "Climate Change Data Visualizer",
        description: "Interactive dashboard showing global temperature trends and CO₂ emissions with filtering capabilities.",
        tech: ["HTML", "CSS", "JavaScript", "Chart.js", "Flask"],
        github: "https://github.com/LaplaceMkhabela/climate-visualizer",
        difficulty: "Advanced"
    },
    {
        title: "OCR Text Extraction App",
        description: "Extracts text from images/PDFs with support for multiple languages including Zulu and English.",
        tech: ["Python", "OpenCV", "Tesseract OCR", "Flask"],
        github: "#",
        difficulty: "Intermediate"
    },
    {
        title: "PNG to Vector Converter",
        description: "Converts raster images to scalable vector graphics (SVG) using computational geometry algorithms.",
        tech: ["Python", "OpenCV", "Potrace"],
        github: "#",
        difficulty: "Intermediate"
    },
    {
        title: "Task Management Tool",
        description: "Kanban-style productivity app with drag-and-drop functionality and user authentication.",
        tech: ["Flask", "SQLite", "JavaScript"],
        github: "#",
        difficulty: "Intermediate"
    },
    {
        title: "Image Classifier (CNN)",
        description: "Machine learning model that classifies African wildlife images with 94% accuracy.",
        tech: ["Python", "TensorFlow", "Keras"],
        github: "#",
        difficulty: "Advanced"
    },
    {
        title: "URL Shortener",
        description: "Bit.ly clone with click analytics and custom alias generation.",
        tech: ["Flask", "SQLAlchemy", "JavaScript"],
        github: "#",
        difficulty: "Easy"
    }
];

// Function to render projects
function renderProjects() {
    const projectsGrid = document.querySelector('.projects-grid');
    
    projects.forEach(project => {
        const projectCard = document.createElement('div');
        projectCard.className = 'project-card';
        
        projectCard.innerHTML = `
            <div class="project-image">
                <i class="fas fa-project-diagram"></i>
            </div>
            <div class="project-content">
                <h3>${project.title}</h3>
                <p>${project.description}</p>
                <div class="project-tech">
                    ${project.tech.map(tech => `<span>${tech}</span>`).join('')}
                </div>
                <div class="project-links">
                    <a href="${project.github}" target="_blank">
                        <i class="fab fa-github"></i> Code
                    </a>
                    <a href="#" class="demo-link">
                        <i class="fas fa-external-link-alt"></i> Demo
                    </a>
                </div>
                <p class="difficulty">Difficulty: ${project.difficulty}</p>
            </div>
        `;
        
        projectsGrid.appendChild(projectCard);
    });
}

// Initialize
document.addEventListener('DOMContentLoaded', () => {
    renderProjects();
    
    // Smooth scrolling for navigation
    document.querySelectorAll('nav a').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });
});