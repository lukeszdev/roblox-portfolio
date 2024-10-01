const projects = [
    {
        title: "Lobby System",
        description: "Lobby system for a betting game, where a specific number of players join to start a timer and begin the match.",
        image: "assets/images/projcets-thumb/lobbythumb.png",
        tags: ["#script", "#uidesign"]
    },
    {
        title: "Creature AI",
        description: "Creature AI for an RPG game, featuring a simple combat system (with combos).",
        image: "assets/images/projcets-thumb/creatureaithumb.png",
        tags: ["#script", "#uidesign", "#vfx", "#animation"]
    },
    {
        title: "Tutorial System",
        description: "A tutorial system with an arrow indicating a place for you to go and a list of objectives.",
        image: "assets/images/projcets-thumb/tutorialsystem.png",
        tags: ["#script", "#uidesign"]
    },
    {
        title: "Inventory System",
        description: "A inventory system for a RPG game with unequip/equip weapon function.",
        image: "assets/images/projcets-thumb/inventorysystem.png",
        tags: ["#script", "#uidesign"]
    },
]

function generateProjectBoxes() {
    const container = document.querySelector('.projects-full-cards');

    projects.forEach(project => {
        const projectBox = document.createElement('div');
        projectBox.className = 'project-box';

        projectBox.innerHTML = `
            <div class="project-content">
                <div class="thumb">
                    <img src="${project.image}" alt="${project.title}">
                </div>
                <h1 class="project-title">${project.title}</h1>
                <p class="project-description">${project.description}</p>
            </div>
            <div class="project-tags">
                ${project.tags.map(tag => `<span class="${tag.replace('#', '')}-tag">${tag}</span>`).join('')}
            </div>
        `;

        container.appendChild(projectBox);
    });
}

document.addEventListener('DOMContentLoaded', generateProjectBoxes);