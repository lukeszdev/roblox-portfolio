const projects = [
    {
        title: "Lobby System",
        description: "Lobby system for a betting game, where a specific number of players join to start a timer and begin the match.",
        image: "assets/images/projects-thumb/lobbythumb.png",
        tags: ["#script", "#uidesign"],
        href: "https://www.youtube.com/watch?v=DZXp5t8t7V8"
    },
    {
        title: "Creature AI",
        description: "Creature AI for an RPG game, featuring a simple combat system (with combos).",
        image: "assets/images/projects-thumb/creatureaithumb.png",
        tags: ["#script", "#uidesign", "#vfx", "#animation"],
        href: "https://www.youtube.com/watch?v=6ZU3mlysSuQ&t"
    },
    {
        title: "Tutorial System",
        description: "A tutorial system with an arrow indicating a place for you to go and a list of objectives.",
        image: "assets/images/projects-thumb/tutorialsystem.png",
        tags: ["#script", "#uidesign"],
        href: "https://www.youtube.com/watch?v=7rhwD4Wwv5A"
    },
    {
        title: "Inventory System RPG",
        description: "A inventory system for a RPG game with unequip/equip weapon function.",
        image: "assets/images/projects-thumb/inventorysystem.png",
        tags: ["#script", "#uidesign"],
        href: "https://www.youtube.com/watch?v=vbLBgRf9kYQ"
    },
    {
        title: "Combat System",
        description: "Very simple combat system, created to test some modules.",
        image: "assets/images/projects-thumb/combatsystem.png",
        tags: ["#script", "#uidesign", "#vfx", "#animation"],
        href: "https://www.youtube.com/watch?v=PBoD1mg1mgY"
    },
    {
        title: "Simulator UI",
        description: "Interfaces for a simulator game, with shop and inventory UIs.",
        image: "assets/images/projects-thumb/simulatorui.png",
        tags: ["#uidesign"],
        href: "https://www.youtube.com/watch?v=qHUFsiiw_vU"
    },
    {
        title: "Katana Skills",
        description: "A set of fire skills for a katana",
        image: "assets/images/projects-thumb/katanaskills.png",
        tags: ["#script", "#uidesign", "#vfx", "#animation"],
        href: "https://www.youtube.com/watch?v=BEsrBS9c10s"
    },
    {
        title: "Inventory System Simulator",
        description: "Another inventory system for a Simulator game. Btw the sidebar ui was made by me too",
        image: "assets/images/projects-thumb/inventorysystem2.png",
        tags: ["#script", "#uidesign"],
        href: "https://www.youtube.com/watch?v=_1eLy3oX6T8"
    },
]

function generateProjectBoxes() {
    const container = document.querySelector('.projects-full-cards');
    projects.forEach(project => {
        const boxWrapper = document.createElement('a');
        boxWrapper.className = 'box-wrapper';
        boxWrapper.href = project.href;
        boxWrapper.target = "_blank"

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

    gsap.registerPlugin(ScrollTrigger)

    gsap.fromTo("header", {
        y: -100,
        opacity: 0
    }, {
        y: 0,
        opacity: 1,
        duration: 1,
        delay: 0.1
    })

    gsap.fromTo(".projects-text", {
        opacity: 0,
        y: -50,
    }, {
        opacity: 1,
        y: 0,
        duration: 1
    })

    gsap.fromTo(".project-box", {
        opacity: 0,
        y: -100,
    }, {
        opacity: 1,
        y: 0,
        duration: 1
    })
});

window.addEventListener('scroll', function () {
    const header = document.querySelector('header');
    if (window.scrollY > 0) {
        header.classList.add('header-fixed');
    } else {
        header.classList.remove('header-fixed');
    }
});