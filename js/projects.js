const projects = [
    {
        title: "Lobby System",
        description: "Lobby system for a betting game, where a specific number of players join to start a timer and begin the match.",
        image: "assets/images/projects-thumb/lobbythumb.png",
        tags: ["#script", "#uidesign"]
    },
    {
        title: "Creature AI",
        description: "Creature AI for an RPG game, featuring a simple combat system (with combos).",
        image: "assets/images/projects-thumb/creatureaithumb.png",
        tags: ["#script", "#uidesign", "#vfx", "#animation"]
    },
    {
        title: "Tutorial System",
        description: "A tutorial system with an arrow indicating a place for you to go and a list of objectives.",
        image: "assets/images/projects-thumb/tutorialsystem.png",
        tags: ["#script", "#uidesign"]
    },
    {
        title: "Inventory System RPG",
        description: "A inventory system for a RPG game with unequip/equip weapon function.",
        image: "assets/images/projects-thumb/inventorysystem.png",
        tags: ["#script", "#uidesign"]
    },
    {
        title: "Combat System",
        description: "Very simple combat system, created to test some modules.",
        image: "assets/images/projects-thumb/combatsystem.png",
        tags: ["#script", "#uidesign", "#vfx", "#animation"]
    },
    {
        title: "Simulator UI",
        description: "Interfaces for a simulator game, with shop and inventory UIs.",
        image: "assets/images/projects-thumb/simulatorui.png",
        tags: ["#uidesign"]
    },
    {
        title: "Katana Skills",
        description: "A set of fire skills for a katana",
        image: "assets/images/projects-thumb/katanaskills.png",
        tags: ["#script", "#uidesign", "#vfx", "#animation"]
    },
    {
        title: "Inventory System Simulator",
        description: "Another inventory system for a Simulator game. Btw the sidebar ui was made by me too",
        image: "assets/images/projects-thumb/inventorysystem2.png",
        tags: ["#script", "#uidesign"]
    },
]

function generateProjectBoxes() {
    const container = document.querySelector('.projects-full-cards');
    projects.forEach(project => {
        const boxWrapper = document.createElement('a');
        boxWrapper.className = 'box-wrapper';

        boxWrapper.innerHTML = `
        <div class="project-box">
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
        </div>
        `;

        container.appendChild(boxWrapper);
    });
}

document.addEventListener('DOMContentLoaded', (event) => {
    generateProjectBoxes()
});