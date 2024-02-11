const heading = document.querySelector('.heading');
const letters = heading.textContent.split('');
heading.innerHTML = letters.map(letter => `<span class="letter">${letter}</span>`).join('');
const letterSpans = document.querySelectorAll('.letter');
letterSpans.forEach(span => {
    span.addEventListener('mouseover', () => {
        span.style.color = '#AAA'; 
    });
    span.addEventListener('mouseout', () => {
        span.style.color = ''; 
    });
});

gsap.registerPlugin(ScrollTrigger);
const locoScroll = new LocomotiveScroll({
    el: document.querySelector(".scroll-container"),
    smooth: true,
    multiplier: 1.0,
    getDirection: true,
    smartphone: {
        smooth: true,
    }
});

locoScroll.on("scroll", ScrollTrigger.update);
ScrollTrigger.scrollerProxy(".scroll-container", {
    scrollTop(value) {
        return arguments.length ? locoScroll.scrollTo(value, {duration: 0, disableLerp: true}) : locoScroll.scroll.instance.scroll.y;
    },
    getBoundingClientRect() {
        return {top: 0, left: 0, width: window.innerWidth, height: window.innerHeight};
    },
        pinType: document.querySelector(".scroll-container").style.transform ? "transform" : "fixed"
});
ScrollTrigger.addEventListener("refresh", () => locoScroll.update());
ScrollTrigger.defaults({ scroller: ".scroll-container" });

gsap.fromTo('.big-head-about', {
    scrollTrigger: {
        trigger: '.big-head-about',
        start: '+=100px top',
        scrub: true
    }, 
    opacity: 1,
    y: 0
}, {
    scrollTrigger: {
        trigger: '.sm-screen',
        start: '+=100px top',
        scrub: true
    }, 
    opacity: 0,
    y: -50,
    duration: 1
})

gsap.fromTo('.sm-screen', {
    scrollTrigger: {
        trigger: '.big-head-about',
        start: '+=100px top',
        scrub: true
    }, 
    opacity: 1,
    y: 0
}, {
    scrollTrigger: {
        trigger: '.big-head-about',
        start: '+=100px top',
        scrub: true
    }, 
    opacity: 0,
    y: -50,
    duration: 2
})

gsap.from(".line-right-one", {
    scrollTrigger: {
        trigger: ".line-right-one",
        start: "top bottom",
    },
    scaleX: 0,
    transformOrigin: "right center", 
    ease: "none"
})

gsap.from(".line-left-one", {
    scrollTrigger: {
        trigger: ".line-left-one",
        start: "top bottom",
    },
    scaleX: 0,
    transformOrigin: "left center", 
    ease: "none"
})

gsap.from(".line-right-two", {
    scrollTrigger: {
        trigger: ".line-right-two",
        start: "top bottom",
    },
    scaleX: 0,
    transformOrigin: "right center", 
    ease: "none",
})

gsap.from(".line-left-two", {
    scrollTrigger: {
        trigger: ".line-left-two",
        start: "top bottom",
    },
    scaleX: 0,
    transformOrigin: "left center", 
    ease: "none"
})

gsap.from(".line-right-three", {
    scrollTrigger: {
        trigger: ".line-right-three",
        start: "top bottom",
    },
    scaleX: 0,
    transformOrigin: "right center", 
    ease: "none",
})

gsap.from(".line-left-three", {
    scrollTrigger: {
        trigger: ".line-left-three",
        start: "top bottom",
    },
    scaleX: 0,
    transformOrigin: "left center", 
    ease: "none"
})

gsap.from(".line-right-four", {
    scrollTrigger: {
        trigger: ".line-right-four",
        start: "top bottom",
    },
    scaleX: 0,
    transformOrigin: "right center", 
    ease: "none",
})

gsap.from(".line-left-four", {
    scrollTrigger: {
        trigger: ".line-left-four",
        start: "top bottom",
    },
    scaleX: 0,
    transformOrigin: "left center", 
    ease: "none"
})

gsap.from(".line-right-five", {
    scrollTrigger: {
        trigger: ".line-right-five",
        start: "top bottom",
    },
    scaleX: 0,
    transformOrigin: "right center", 
    ease: "none",
})

gsap.from(".line-left-five", {
    scrollTrigger: {
        trigger: ".line-left-five",
        start: "top bottom",
    },
    scaleX: 0,
    transformOrigin: "left center", 
    ease: "none"
})

gsap.fromTo('.item-scroll-up-one', {
    scrollTrigger: {
        trigger: '.skills-container',
        start: '-=500px top'
    },
    opacity: 0,
    y: 50
}, {
    scrollTrigger: {
        trigger: '.skills-container',
        start: '-=500px top'
    },
    opacity: 1,
    y: 0,
    duration: 3
})

gsap.fromTo('.item-scroll-up-two', {
    scrollTrigger: {
        trigger: '.skills-container',
        start: '-=450px top'
    },
    opacity: 0,
    y: 50
}, {
    scrollTrigger: {
        trigger: '.skills-container',
        start: '-=450px top'
    },
    opacity: 1,
    y: 0,
    duration: 3
})

gsap.fromTo('.item-scroll-up-three', {
    scrollTrigger: {
        trigger: '.skills-container',
        start: '-=400px top'
    },
    opacity: 0,
    y: 50
}, {
    scrollTrigger: {
        trigger: '.skills-container',
        start: '-=400px top'
    },
    opacity: 1,
    y: 0,
    duration: 3
})

gsap.fromTo('.item-scroll-up-four', {
    scrollTrigger: {
        trigger: '.skills-container',
        start: '-=350px top'
    },
    opacity: 0,
    y: 50
}, {
    scrollTrigger: {
        trigger: '.skills-container',
        start: '-=350px top'
    },
    opacity: 1,
    y: 0,
    duration: 3
})

gsap.fromTo('.item-scroll-up-five', {
    scrollTrigger: {
        trigger: '.skills-container',
        start: '-=300px top'
    },
    opacity: 0,
    y: 50
}, {
    scrollTrigger: {
        trigger: '.skills-container',
        start: '-=300px top'
    },
    opacity: 1,
    y: 0,
    duration: 3
})

gsap.fromTo('.item-scroll-up-six', {
    scrollTrigger: {
        trigger: '.skills-container',
        start: '-=300px top'
    },
    opacity: 0,
    y: 50
}, {
    scrollTrigger: {
        trigger: '.skills-container',
        start: '-=300px top'
    },
    opacity: 1,
    y: 0,
    duration: 3
})

ScrollTrigger.refresh();

gsap.fromTo('.min-header, #contact', {
    y: -10,
    opacity: 0
}, {
    y: 0,
    opacity: 1,
    duration: 1,
    stagger: .3
})

gsap.fromTo('.heading', {
    y: 100, 
    opacity: 0,
}, {
    y: 0, 
    opacity: 1,
    delay: 0.8,
    duration: 2
})

gsap.fromTo('.sm-screen', {
    y: 100, 
    opacity: 0,
}, {
    y: 0, 
    opacity: 1,
    delay: 0.8,
    duration: 2
})

gsap.fromTo('.text-about', {
    y: 100, 
    opacity: 0,
}, {
    y: 0, 
    opacity: 1,
    duration: 2,
    delay: 1
})







