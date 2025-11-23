Shery.makeMagnet(".magnet");

// Initialize Lenis
const lenis = new Lenis({
  autoRaf: true,
});

function circleskqews() {
  var xscale = 1;
  var yscale = 1;

  var xprev = 0;
  var yprev = 0;

  window.addEventListener("mousemove", function (dets) {
    xscale = gsap.utils.clamp(0.8, 1.2, dets.clientX - xprev);
    yscale = gsap.utils.clamp(0.8, 1.2, dets.clientY - yprev);

    xprev = dets.clientX;
    yprev = dets.clientY;

    circleMouseMove(xscale, yscale);
  });
}

circleskqews();

function circleMouseMove(xscale, yscale) {
  window.addEventListener("mousemove", function (dets) {
    document.querySelector(
      ".minicircle"
    ).style.transform = `translate(${dets.clientX}px, ${dets.clientY}px) scale(${xscale}, ${yscale})`;
  });
}

circleMouseMove();

// project hover effect
document.querySelectorAll(".elem").forEach((elem) => {
  let rotate = 0;
  let diffrot = 0;

  const img = elem.querySelector("img");
  const heading = elem.querySelector("h1");

  // When mouse enters the section
  elem.addEventListener("mouseenter", () => {
    // Image fade in
    gsap.to(img, {
      opacity: 1,
      duration: 0.3,
      ease: "power1.out",
    });

    // Heading move slightly right + reduce opacity
    gsap.to(heading, {
      x: 30, // move right
      opacity: 0.6, // fade a bit
      duration: 0.5,
      ease: "power3.out",
    });
  });

  // When mouse leaves the section
  elem.addEventListener("mouseleave", () => {
    // Image fade out
    gsap.to(img, {
      opacity: 0,
      duration: 0.3,
      ease: "power1.out",
    });

    // Heading back to original position + full opacity
    gsap.to(heading, {
      x: 0,
      opacity: 1,
      duration: 0.5,
      ease: "power3.out",
    });
  });

  // Mouse move effect for image
  elem.addEventListener("mousemove", (dets) => {
    const bounds = elem.getBoundingClientRect();
    const x = dets.clientX - bounds.left;
    const y = dets.clientY - bounds.top;

    diffrot = dets.movementX;

    gsap.to(img, {
      top: y,
      left: x,
      rotate: gsap.utils.clamp(-20, 20, diffrot),
      ease: "power1.out",
      duration: 0.2,
    });
  });
});

gsap.registerPlugin(ScrollTrigger);

gsap.from("#moving1", {
  opacity: 0,
  x: -300,
  duration: 1.5,
  stagger: 0.2,
  scrollTrigger: {
    trigger: "#moving1",
    start: "top 80%", // jab element screen ke 80% par aaye tab animation start
    end: "top 30%", // optional
    scrub: true, // smooth scroll ke sath chalana ho to true karo
    // animation sirf ek baar chale
  },
});

gsap.from("#moving2", {
  opacity: 0,
  x: -300,
  duration: 1.5,
  stagger: 0.2,
  scrollTrigger: {
    trigger: "#moving2",
    start: "top 80%", // jab element screen ke 80% par aaye tab animation start
    end: "top 30%", // optional
    scrub: true, // smooth scroll ke sath chalana ho to true karo
    // animation sirf ek baar chale
  },
});
gsap.from("#moving3", {
  opacity: 0,
  x: -300,
  duration: 1.5,
  stagger: 0.2,
  scrollTrigger: {
    trigger: "#moving3",
    start: "top 80%", // jab element screen ke 80% par aaye tab animation start
    end: "top 30%", // optional
    scrub: true, // smooth scroll ke sath chalana ho to true karo
    // animation sirf ek baar chale
  },
});
gsap.from("#moving4", {
  opacity: 0,
  x: -300,
  duration: 1.5,
  stagger: 0.2,
  scrollTrigger: {
    trigger: "#moving4",
    start: "top 80%", // jab element screen ke 80% par aaye tab animation start
    end: "top 30%", // optional
    scrub: true, // smooth scroll ke sath chalana ho to true karo
    // animation sirf ek baar chale
  },
});
gsap.from("#moving5", {
  opacity: 0,
  x: -300,
  duration: 1.5,
  stagger: 0.2,
  scrollTrigger: {
    trigger: "#moving5",
    start: "top 80%",
    end: "top 30%",
    scrub: true,
  },
});
