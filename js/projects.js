const projects = [
    {
        title: "Line Simulator Game",
        description: "Full Line Simulator Game that I did for a commission. All scripts and UI were made by me",
        image: "assets/images/projects-thumb/linesimulatorthumb.png",
        tags: ["#script", "#uidesign"],
        href: "https://streamable.com/df83gw"
    },
    {
        title: "Lobby System",
        description: "Lobby system for a betting game, where a specific number of players join to start a timer and begin the match.",
        image: "assets/images/projects-thumb/lobbythumb.png",
        tags: ["#script", "#uidesign"],
        href: "https://streamable.com/l44xbx"
    },
    {
        title: "Creature AI",
        description: "Creature AI for an RPG game, featuring a simple combat system (with combos).",
        image: "assets/images/projects-thumb/creatureaithumb.png",
        tags: ["#script", "#uidesign", "#vfx", "#animation"],
        href: "https://streamable.com/a9a4ap"
    },
    {
        title: "Line Simulator UI",
        description: "Complete UI for a line simulator game",
        image: "assets/images/projects-thumb/linesimulatorui.png",
        tags: ["#uidesign"],
        href: "https://x.com/lukeszdev/status/1852805058574033383"
    },
    {
        title: "Tutorial System",
        description: "A tutorial system with an arrow indicating a place for you to go and a list of objectives.",
        image: "assets/images/projects-thumb/tutorialsystem.png",
        tags: ["#script", "#uidesign"],
        href: "https://streamable.com/dpy7lt"
    },
    {
        title: "Inventory System RPG",
        description: "A inventory system for a RPG game with unequip/equip weapon function.",
        image: "assets/images/projects-thumb/inventorysystem.png",
        tags: ["#script", "#uidesign"],
        href: "https://streamable.com/yzxlbk"
    },
    {
        title: "Combat System",
        description: "Very simple combat system, created to test some modules.",
        image: "assets/images/projects-thumb/combatsystem.png",
        tags: ["#script", "#uidesign", "#vfx", "#animation"],
        href: "https://streamable.com/mkso54"
    },
    {
        title: "Katana Skills",
        description: "A set of fire skills for a katana",
        image: "assets/images/projects-thumb/katanaskills.png",
        tags: ["#script", "#uidesign", "#vfx", "#animation"],
        href: "https://streamable.com/ohkjf8"
    },
    {
        title: "Inventory System Simulator",
        description: "Another inventory system for a Simulator game. Btw the sidebar ui was made by me too",
        image: "assets/images/projects-thumb/inventorysystem2.png",
        tags: ["#script", "#uidesign"],
        href: "https://streamable.com/suu0wn"
    },
    {
        title: "Tree Farm System",
        description: "When the player breaks a tree he will receive a certain amount of wood, being able to sell this wood for money.",
        image: "assets/images/projects-thumb/treefarmsystem.png",
        tags: ["#script", "#vfx"],
        href: "https://streamable.com/86hqi4"
    },
]

function generateProjectBoxes() {//
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

function initMobileMenu() {
    const mobileMenu = document.querySelector("#mobile-menu")
    const navList = document.querySelector(".nav-list-mobile")

    const activeClass = "active"

    mobileMenu.addEventListener("click", () => {
        navList.classList.toggle(activeClass)
    })
}

document.addEventListener('DOMContentLoaded', (event) => {
    generateProjectBoxes()
    initMobileMenu()

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