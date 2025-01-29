document.body.style.overflow = "hidden"; 

setTimeout(() => {
    document.body.style.overflow = ""; 
}, 8000);

window.addEventListener('load', function() {

  


 

gsap.registerPlugin(ScrollTrigger);
gsap.registerPlugin(MotionPathPlugin);
gsap.registerPlugin(TextPlugin);
ScrollTrigger.clearScrollMemory("manual");
window.scrollTo("0vmax", "0vmax");
splitDiv("dotnet-text", "split1")
splitDiv("linux-text", "split2")
splitDiv("docker-text", "split3")
splitDiv("sql-text", "split4")
splitDiv("azure-text", "split5")

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



 tl = gsap.timeline({
  scrollTrigger: {
    trigger: "body",
    
    start: "0%",
    end: "bottom 100%",
    scrub: 1,
    toggleActions: "play reverse play reverse"
  }
});



gsap.to("#steve", {
  opacity: 1,
  duration: 1
});



gsap.to(introSteve, {
  duration: 2,
  text: "\"The only way to do great work is to love what you do\"",
  ease: "none",
  opacity: 1
});


gsap.to("#intro, #steve", {
  delay: 2,
  duration: 2,
  ease: "none",
  opacity: 0
})

gsap.to("#sdown,#sdown-text", {
  opacity: 0.5,
  delay:6,
  duration: 1
}
  )

 
    

  
 

tl
.to("#sdown-text", {
  opacity: 0,
  duration: 0.3,
  ease: "power2 in"
}
  )
.to("#sdown, #particles-js", {
  y:"-17vmax",
  rotation:360,
  x:"43vmax",
  opacity:0.8,
  duration: 1
}
  )
  .to("#glow-point0", {
    scale: 0.2,
    duration: 1
  })
  
  .to(ss, { opacity: 0.6, duration: 0.5,ease: "power2 in" })
  .to(ss, { rotation: 360, duration: 0.5, ease: "power2 in" })

  .to(sp1, {
    y: '9.5vmax',
    opacity: 1,
    stagger: { each: 0.5, from: "random" },
    duration: 1
  })
  .to(".wel-text", {
    y: 100,
    opacity: 1,
    stagger: { each: 0.4 },
    duration: 1
  })
  .to("#map", {
    opacity: 1,
    duration: 1
  })
  .to(ss, { rotation: 450, duration: 0.3, ease: "none" })
  .to(welTextSp1, {
    y: -80,
    opacity: 0,
    stagger: { each: 0.05, from: "random" },
    duration: 0.5
  })
  .to(ss, { rotation: 540, duration: 0.5, ease: "none" })
  .to("#first-word1", {
    duration: 1,
    y: -40,
    opacity: 1,
    onStart:function(){
      tl
    },

    ease: "none"
  })
  .to("#second-word1", {
    duration: 0.5,
    delay:-0.5,
    y: 40,
    opacity: 1,
    ease: "none"
  })
  .to("#first-word1,#second-word1", {
    duration: 0.5,
    // delay:0.05,
    y: -20,
    opacity: 0,
    ease: "none"
  })



  .to("#first-word2", {
    duration: 1,
    y: -40,
    opacity: 1,
    onStart:function(){
      tl
    },

    ease: "none"
  })
  .to("#second-word2", {
    duration: 0.5,
    delay:-0.5,
    y: 40,
    opacity: 1,
    ease: "none"
  })
  .to("#first-word2,#second-word2", {
    duration: 0.5,
    // delay:0.05,
    y: -20,
    opacity: 0,
    ease: "none"
  })
  
  .to("#first-word3", {
    duration: 1,
    y: -40,
    opacity: 1,
    onStart:function(){
      tl
    },

    ease: "none"
  })
  .to("#second-word3", {
    duration: 0.5,
    delay:-0.5,
    y: 40,
    opacity: 1,
    ease: "none"
  })
  .to("#first-word3,#second-word3", {
    duration: 0.7,
    // delay:0.05,
    y: -20,
    opacity: 0,
    ease: "none"
  })
  
  .to(".small", {
    x: "10vmax",
    opacity: 1,
    stagger: { each: 0.3, from: "end" },
    duration: 1,
  }).to(".big", {
    x: "10vmax",
    scale: 5,
    opacity: 1,
    stagger: { each: 0.3, from: "end" },
    duration: 0.3,
  })
  .to("#map", {
    x: "20vmax",
    y: "vmax",
    scale: 0.7,
    opacity: 1,
    // ease: "elastic.out",
    duration: 2,
  })

  .to("#dotnet-img", { rotation: 360, duration: 1, opacity: 1, x: "-20vmax", ease: "none" })
  .to("#dotnet-text", { duration: 1, opacity: 1, ease: "power2 in" })
  .to(".split1", {
    y: 80,
    delay:2,
    opacity: 0,
    stagger: { each: 0.01, from: "random" },
    duration: 0.5
  })
  .to("#dotnet-img", {
    y: -80,
    opacity: 0,
    stagger: { each: 0.2, from: "random" },
    duration: 1
  })
  .to("#linux-img", { duration: 1, opacity: 1, x: "-20vmax", ease: "elastic.out" })
  .to("#linux-text", { duration: 1, opacity: 1, ease: "power2 in" })
  .to(".split2", {
    y: 80,
    delay:2,
    opacity: 0,
    stagger: { each: 0.01, from: "random" },
    duration: 0.5
  })
  .to("#linux-img", {
    y: -80,
    opacity: 0,
    duration: 1
  })
  .to("#docker-img", { duration: 1, opacity: 1, x: "-20vmax", ease: "steps(14)" })
  .to("#docker-text", { duration: 1, opacity: 1, ease: "power2 in" })
  .to(".split3", {
    y: 80,
    delay:2,
    opacity: 0,
    stagger: { each: 0.01, from: "random" },
    duration: 0.5
  })
  .to("#docker-img", {
    x: "-40vmax",
    opacity: 0,
    duration: 1, ease: "steps(14)"
  })
  .to("#sql-img", { rotation: 720, duration: 1, opacity: 1, x: "-20vmax", ease: "bounce.out" })
  .to("#sql-text", { duration: 0.5, opacity: 1, ease: "power2 in" })
  .to(".split4", {
    y: 80,
    delay:2,
    opacity: 0,
    stagger: { each: 0.01, from: "random" },
    duration: 0.5
  })
  .to("#sql-img", {
    x: "-40vmax",
    opacity: 0,
    duration: 1,
    rotation: -720,
     ease: "bounce.out"
  })
  .to("#azure-img", { duration: 1, opacity: 1, x: "-20vmax", ease: "back.inOut(1.7)" })
  .to("#azure-text", { duration: 0.05, opacity: 1, ease: "power2 in" })
  .to(".split5", {
    y: 80,
    delay:2,
    opacity: 0,
    stagger: { each: 0.01, from: "random" },
    duration: 0.5
  })
  .to("#azure-img", {
    y: -80,
    opacity: 0,
    duration: 1
  })
  .to("#bigS", {
    // scale: 2,
    y: "2vmax",
    // opacity: 0.6,
    duration: 1
  })
  .to(".sp3:not(littleS)", {
    y: "-15vmax",
    opacity: 0,
    stagger: { each: 0.2, from: "random" },
    duration: 1
  })
  .to("#map", {
    opacity: 0,
    duration: 1
  })
  .to(ss, {
    scale: 3,

    rotation: 810,
    duration: 1
  })
  .to(".sp4", {
    stagger: { each: 0.4 },
    opacity: 0.6,
    x: "15vmax",
    // rotation: -26,
    y: "25vmax",
    duration: 1
  })
  .to("#s2", {
    opacity: 0.9,
    x: "-100%"
    , duration: 1
  })
  .to("#arch1-img,#project-title1, #title-tails, #project-description, #smarthome-description", {
    opacity: 1,
    stagger: { each: 0.8, ease: "elastic.out" },
    duration: 2
  })
  .to("#arch1-img,#project-title1, #title-tails, #project-description, #smarthome-description,#pdf", {
    opacity: 0,
    delay:2,
    stagger: { each: 0.5 },
    duration: 1
  })
  .to("#ved-div,#project-title2, #title-tails, #project-description, #ai-description", {
    opacity: 1,
    stagger: { each: 0.8, ease: "elastic.in" },
    duration: 2
  })
  .to("#ved-div,#project-title2, #title-tails, #project-description, #ai-description", {
    opacity: 0,
    delay:2,
    stagger: { each: 0.5 },
    duration: 1
  })
  .to("#data-sec,#project-title3, #title-tails, #project-description, #datasec-description", {
    opacity: 1,
    stagger: { each: 0.8, ease: "elastic.in" },
    duration: 2
  })
  .to("#data-sec,#project-title3, #title-tails, #project-description, #datasec-description", {
    opacity: 0,
    delay:2,
    stagger: { each: 0.5 },
    duration: 1
  })
  .to("#dicomhawk,#project-title4, #title-tails, #project-description, #dicomhawk-description", {
    opacity: 1,
    stagger: { each: 0.8, ease: "elastic.in" },
    duration: 2
  })
  .to("#dicomhawk,#project-title4, #title-tails, #project-description, #dicomhawk-description, #s2", {
    opacity: 0,
    delay:2,
    stagger: { each: 0.5 },
    duration: 1
  })
  .to(".sp4", {
    stagger: { each: 0.4 },
    opacity: 0,
    x: "15vmax",
    delay:0.3,
    // rotation: -26,
    y: "25vmax",
    duration: 0.7
  })
  .to(ss, {
    scale: 1,
    rotation: 720,
    duration: 1
  })
  .to("#map", {
    opacity: 1,
    scale: 1,
    duration: 1
  }).to("#last, #footer", {

    opacity: 1
  })








function nextWord() {
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
    y: -30, 
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


function splitDiv(id, classname) {
  const element = document.getElementById(id);

  // Split the text content of the element by spaces
  const words = element.textContent.split(' ');

  // Clear the original content
  element.textContent = '';

  // Create a new div for each word, assign class 'split1', and append to the original element
  words.forEach(word => {
    const div = document.createElement('div');
    div.className = classname;
    div.textContent = " " + word;
    element.appendChild(div);
  });
}




document.getElementById('introduction_map').addEventListener('click', function () {
  window.scrollTo(0, document.body.scrollHeight * 0.1);
});

document.getElementById('skills_map').addEventListener('click', function () {
  window.scrollTo(0, document.body.scrollHeight * 0.22);
});

document.getElementById('demos_map').addEventListener('click', function () {
  window.scrollTo(0, document.body.scrollHeight * 0.59);
});

// Event listener for email icon
document.getElementById('email').addEventListener('click', function () {
  window.location.href = 'https://mail.google.com/mail/?view=cm&fs=1&to=nawras.moula3@gmail.com';
});

// Event listener for location icon
document.getElementById('location').addEventListener('click', function () {
  window.location.href = 'https://www.google.com/maps/place/Vedbæk/';
});

// Event listener for mobile icon
document.getElementById('mobile').addEventListener('click', function () {
  gsap.to("#number", {

    opacity: 1,

  })
});

// Event listener for LinkedIn icon
document.getElementById('linkedin_img').addEventListener('click', function () {
  window.location.href = 'https://www.linkedin.com/in/nawrasmouala';
});

document.getElementById('pdf').addEventListener('click', function () {
  window.location.href = '/static/Report.pdf'; // This will start downloading the PDF file
});

// Event listener for GitHub icon
document.getElementById('github').addEventListener('click', function () {
  window.location.href = 'https://github.com/portfolio-projects2?tab=repositories'; // This will redirect to your GitHub repository
});



function saveData() {
  var name = document.getElementById('nameInput').value;
  var subject = document.getElementById('subjectInput').value;
  var mobile = document.getElementById('mobileInput').value;

  if (name && subject && mobile) {

    fetch('https://n-mo.dk/submit', { // Ensure the URL matches your Flask server's address
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ name: name, subject: subject, mobile: mobile })
    })
      .then(response => 

response.json())
      .then(data =>
        console.log('Success:', data))
      .catch(error => console.error('Error:', error));
    name.value = ""
    subject.value = ""
    mobile.value = ""
    gsap.to("#number", {
      opacity: 0
    })

  } else {
    alert('Please fill in all fields.');
  }
}

function cancel() {
  gsap.to("#number", {
    opacity: 0
  })
}


});




