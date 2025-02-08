const featuredProjects = [
    {
        title: "Line Simulator Game",
        description: "Full Line Simulator Game that I did for a commission. All scripts and UI were made by me",
        image: "assets/images/projects-thumb/linesimulatorthumb.png",
        tags: ["#script", "#uidesign"],
        href: "https://streamable.com/df83gw"
    },
    {
        title: "Snake Game",
        description: "Full Snake Game that I did for a commission. All scripts were made by me.",
        image: "assets/images/projects-thumb/snakegamethumb.png",
        tags: ["#script"],
        href: "https://x.com/lukeszdev/status/1869221592909373479"
    },
    {
        title: "Creature AI",
        description: "Creature AI for an RPG game, featuring a simple combat system (with combos).",
        image: "assets/images/projects-thumb/creatureaithumb.png",
        tags: ["#script", "#uidesign", "#vfx", "#animation"],
        href: "https://streamable.com/a9a4ap"
    }
]

function generateProjectBoxes() {
    const container = document.querySelector('.projects-cards');
    featuredProjects.forEach(project => {
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
        delay: 0.5
    })

    gsap.fromTo(".intro-illustration", {
        x: 500,
        opacity: 0,
    }, {
        x: 0,
        opacity: 1,
        duration: 1.5
    })

    let introTween = gsap.fromTo(".myself-introduction", {
        x: -500,
        opacity: 0,
    }, {
        x: 0,
        opacity: 1,
        duration: 1
    })

    gsap.fromTo(".introduction-rectangle", {
        opacity: 0,
        x: 10
    }, {
        x: 0,
        opacity: 1,
        duration: 1,
        delay: introTween._end
    })

    gsap.fromTo(".projects-text", {
        opacity: 0,
        y: 200,
    }, {
        opacity: 1,
        y: 0,
        scrollTrigger: {
            trigger: ".projects-text",
            scrub: 3,
            start: "top 700px",
            end: "bottom 900px"
        }
    })

    gsap.fromTo(".project-box", {
        opacity: 0,
        y: 200,
    }, {
        opacity: 1,
        y: 0,
        scrollTrigger: {
            trigger: ".projects-cards",
            scrub: 2,
            start: "top 700px",
            end: "bottom 900px"
        }
    })

    gsap.fromTo(".projects-btn", {
        opacity: 0,
        y: 50,
    }, {
        opacity: 1,
        y: 0,
        scrollTrigger: {
            trigger: ".projects-btn",
            scrub: 2,
            start: "top 900px",
            end: "bottom 1100px"
        }
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