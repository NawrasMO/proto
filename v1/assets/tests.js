gsap.registerPlugin(ScrollTrigger);
gsap.registerPlugin(MotionPathPlugin);
gsap.registerPlugin(TextPlugin);
let words1 = ["DEVELOPE", "TEST", "ENGINEER"];
let words2 = ["APPLICATIONS", "FEATURES", "SYSTEMS"];
let wordSpan1 = document.getElementById("first-word");
let wordSpan2 = document.getElementById("second-word");
let currentWordIndex = 0;
const introSteve = "#intro, #steve";
const ss = "#ss";
const sp1 = ".sp1";
const welText = ".wel-text";
const welTextSp1 = ".wel-text, .sp1";
const lchc = "#lchc"
const ichLove = "#first-word"
const dev = '#dev';
const ichLoveDev = "#first-word, #dev";
const icons2 = ".contact-icons2"
const icons2Container = "#icons2-container"



const tl = gsap.timeline({
  scrollTrigger: {
    trigger: ss,
    start: "top 0%",
    end: "bottom -200%",
    scrub: 10,
    toggleActions: "play reverse play reverse"
  }
});

tl.to(introSteve, {
  duration: 800,
  text: "\"The only way to do great work is to love what you do.\"",
  ease: "none",
  opacity: 1
}).to(introSteve, {
  duration: 100,
  ease: "none",
  opacity: 0
}).to("#glow-point0", {
  scale: 0.3
})
  .to(ss, { opacity: 0.6, duration: 50 })
  .to(ss, { rotation: 360, duration: 50, ease: "none" })

  .to(sp1, {
    y: '9.5vmax',
    opacity: 1,
    stagger: { each: 26, from: "random" },
    duration: 100
  }).to(welText, {
    y: 100,
    opacity: 1,
    stagger: { each: 30 },
    duration: 100
  })
  .to(ss, { rotation: 450, duration: 100, ease: "none" })
  .to(welTextSp1, {
    y: -80,
    opacity: 0,
    stagger: { each: 20, from: "random" },
    duration: 100
  })
  .to(ss, { rotation: 540, duration: 100, ease: "none" })
  .to(lchc, {
    y: 200,
    opacity: 0.8,
    duration: 100,
    onComplete: animateWords
  })
  .to(lchc, { delay: 8, opacity: 0, duration: 100, ease: "none" })
  .to(".small", {
    x: "10vmax",
    opacity: 1,
    stagger: { each: 0.5, from: "end" },
    duration: 25,
  }).to(".big", {
    x: "10vmax",
    scale: 5,
    opacity: 1,
    stagger: { each: 0.5, from: "end" },
    duration: 25,
  })
  .to("#dotnet-img", { rotation: 360, duration: 40, opacity: 1, x: "-20vmax", ease: "none" })
  .to("#dotnet-text", { duration: 40, opacity: 1, ease: "power2 in" })
  .to("#dotnet-img, #dotnet-text", {
    y: -80,
    opacity: 0,
    stagger: { each: 20, from: "random" },
    duration: 100
  })
  .to("#linux-img", { duration: 40, opacity: 1, x: "-20vmax", ease: "elastic.out" })
  .to("#linux-text", { duration: 40, opacity: 1, ease: "power2 in" })
  .to("#linux-img, #linux-text", {
    y: -80,
    opacity: 0,
    stagger: { each: 20, from: "random" },
    duration: 100
  })
  .to("#docker-img", { duration: 40, opacity: 1, x: "-20vmax", ease: "steps(14)" })
  .to("#docker-text", { duration: 40, opacity: 1, ease: "power2 in" })
  .to("#docker-img, #docker-text", {
    y: -80,
    opacity: 0,
    stagger: { each: 20, from: "random" },
    duration: 100
  })
  .to("#sql-img", { rotation: 720, duration: 40, opacity: 1, x: "-20vmax", ease: "bounce.out" })
  .to("#sql-text", { duration: 40, opacity: 1, ease: "power2 in" })
  .to("#sql-img, #sql-text", {
    y: -80,
    opacity: 0,
    stagger: { each: 20, from: "random" },
    duration: 100
  })
  .to("#azure-img", { duration: 40, opacity: 1, x: "-20vmax", ease: "back.inOut(1.7)" })
  .to("#azure-text", { duration: 40, opacity: 1, ease: "power2 in" })
  .to("#azure-img, #azure-text", {
    y: -80,
    opacity: 0,
    stagger: { each: 20, from: "random" },
    duration: 100
  })
  .to("#bigS", {
    scale: 3,
    y: "5vmax",
    opacity: 0.6,
    duration: 25
  })
  .to(".sp3:not(littleS)", {
    y: "-15vmax",
    opacity: 0,
    stagger: { each: 20, from: "random" },
    duration: 100
  })
  .to(ss, {
    scale: 3,
    rotation: 810,
    duration: 100
  })
  .to(".sp4", {
    stagger: { each: 20 },
    opacity: 0.6,
    x: "15vmax",
    // rotation: -26,
    y: "25vmax",
    duration: 25
  })
  .to("#s2", {
    opacity: 0.9,
    x: "-100%"
    , duration: 25
  })
  .to("#arch1-img,#project-title1, #title-tails, #project-description, #smarthome-description", {
    opacity: 1,
    stagger: { each: 20 },
    duration: 25
  })
  .to("#arch1-img,#project-title1, #title-tails, #project-description, #smarthome-description", {
    opacity: 0,
    stagger: { each: 20 },
    duration: 25
  })
  .to("#ved-div,#project-title2, #title-tails, #project-description, #ai-description", {
    opacity: 1,
    stagger: { each: 20 },
    duration: 25
  })
  .to("#ved-div,#project-title2, #title-tails, #project-description, #ai-description", {
    opacity: 0,
    stagger: { each: 20 },
    duration: 25
  })
  .to("#data-sec,#project-title3, #title-tails, #project-description, #datasec-description", {
    opacity: 1,
    stagger: { each: 20 },
    duration: 25
  })
  .to("#data-sec,#project-title3, #title-tails, #project-description, #datasec-description", {
    opacity: 0,
    stagger: { each: 20 },
    duration: 25
  })
  .to("#dicomhawk,#project-title4, #title-tails, #project-description, #dicomhawk-description", {
    opacity: 1,
    stagger: { each: 20 },
    duration: 25
  })









function nextWord() {
  console.log("hghuihiuhuih")
  currentWordIndex = (currentWordIndex + 1) % words1.length;
  gsap.to(wordSpan1, {
    duration: 1,
    y: 30,
    opacity: 0,
    ease: "none",
    onComplete: () => {

      wordSpan1.textContent = words1[currentWordIndex];
      gsap.set(wordSpan1, { y: 30, opacity: 0 });
      gsap.to(wordSpan1, {
        duration: 1,
        y: 0,
        opacity: 1,
        ease: "none"
      });
    }
  });

  gsap.to(wordSpan2, {
    duration: 1,
    y: -30, // Move up
    opacity: 0,
    ease: "none",
    onComplete: () => {
      wordSpan2.textContent = words2[currentWordIndex];
      gsap.set(wordSpan2, { x: 30, opacity: 0 });
      gsap.to(wordSpan2, {
        duration: 1,
        y: 0,
        opacity: 1,
        ease: "none"
      });
    }
  });
}


function animateWords() {
  gsap.set(wordSpan1, { y: 0, opacity: 1 });
  gsap.set(wordSpan2, { y: 0, opacity: 1 });
  nextWord()

  setInterval(nextWord, 4000);
}


