document.addEventListener('DOMContentLoaded', (event) => {
    gsap.registerPlugin(ScrollTrigger)

    gsap.fromTo(".introduction-illustration", {
        x: 500,
        opacity: 0,
    }, {
        x: 0,
        opacity: 1,
        duration: 1
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