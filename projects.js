
// ==========================================
// SKILLS DATA
// ==========================================

const skills = {
    programming: [
        { name: "JavaScript (ES6+)", level: 85 },
        { name: "TypeScript", level: 80 },
        { name: "C++", level: 75 }
    ],

    frontend: [
        { name: "HTML5 & CSS3", level: 90 }
    ],

    backend: [],

    database: [],

    soft: []
};

const skillsList = document.getElementById("skillsList");
const skillTabs = document.querySelectorAll("[data-category]");

// Display skills
function displaySkills(category) {
    const selectedSkills = skills[category] || [];

    if (selectedSkills.length === 0) {
        skillsList.innerHTML = `
            <p class="no-projects">
                Skills in this category will be added soon.
            </p>
        `;
        return;
    }

    skillsList.innerHTML = selectedSkills.map(skill => `
        <div class="skill-item">
            <div class="skill-info">
                <span>${skill.name}</span>
                <span>${skill.level}%</span>
            </div>

            <div class="skill-track">
                <div class="skill-progress"
                     style="width: ${skill.level}%">
                </div>
            </div>
        </div>
    `).join("");
}

// Skill category buttons
skillTabs.forEach(tab => {
    tab.addEventListener("click", () => {
        skillTabs.forEach(button => button.classList.remove("active"));

        tab.classList.add("active");

        displaySkills(tab.dataset.category);
    });
});

// Show programming skills initially
displaySkills("programming");


// ==========================================
// PROJECTS DATA
// ==========================================

const projects = [
    {
        name: "DAFFGLE",
        category: "fullstack",
        type: "Full Stack Development",
        year: "2026",
        description:
            "An anonymous campus communication platform designed for students of Daffodil International University.",
        technologies: [
            "Next.js",
            "React",
            "TypeScript",
            "Tailwind CSS",
            "Node.js",
            "WebSockets"
        ],
        github: "",
        live: ""
    },

    {
        name: "QBITX",
        category: "ai",
        type: "AI-Powered Learning Platform",
        year: "2026",
        description:
            "An AI-powered project-based learning platform designed for mobile and web experiences.",
        technologies: [
            "Next.js",
            "TypeScript",
            "AI Integration",
            "Tailwind CSS",
            "PostgreSQL"
        ],
        github: "",
        live: ""
    }
];

const projectsGrid = document.getElementById("projectsGrid");
const projectSearch = document.getElementById("projectSearch");
const filterButtons = document.querySelectorAll("[data-filter]");

let activeFilter = "all";
let searchQuery = "";

// Display project cards
function displayProjects() {
    const filteredProjects = projects.filter(project => {
        const matchesCategory =
            activeFilter === "all" ||
            project.category === activeFilter ||
            (activeFilter === "mobile" && project.name === "QBITX") ||
            (activeFilter === "systems" && project.name === "DAFFGLE");

        const searchableText = `
            ${project.name}
            ${project.description}
            ${project.type}
            ${project.technologies.join(" ")}
        `.toLowerCase();

        const matchesSearch = searchableText.includes(searchQuery);

        return matchesCategory && matchesSearch;
    });

    if (filteredProjects.length === 0) {
        projectsGrid.innerHTML = `
            <p class="no-projects">
                No projects found. Try another search.
            </p>
        `;
        return;
    }

    projectsGrid.innerHTML = filteredProjects.map(project => `
        <article class="project-card">

            <div class="project-image">
                <span>${project.name}</span>
                <small>${project.year}</small>
            </div>

            <div class="project-details">
                <span class="project-category">${project.type}</span>

                <h3>${project.name}</h3>

                <p>${project.description}</p>

                <div class="project-technologies">
                    ${project.technologies.map(tech =>
                        `<span>${tech}</span>`
                    ).join("")}
                </div>

                <div class="project-links">
                    ${project.github
                        ? `<a href="${project.github}" target="_blank" rel="noopener noreferrer">GitHub ↗</a>`
                        : ""
                    }

                    ${project.live
                        ? `<a href="${project.live}" target="_blank" rel="noopener noreferrer">Live Demo ↗</a>`
                        : ""
                    }
                </div>
            </div>

        </article>
    `).join("");
}

// Project category filters
filterButtons.forEach(button => {
    button.addEventListener("click", () => {
        filterButtons.forEach(item => item.classList.remove("active"));

        button.classList.add("active");

        activeFilter = button.dataset.filter;

        displayProjects();
    });
});

// Project search
projectSearch.addEventListener("input", event => {
    searchQuery = event.target.value.toLowerCase().trim();

    displayProjects();
});

// Display all projects initially
displayProjects();
