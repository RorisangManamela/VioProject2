gsap.registerPlugin(ScrollTrigger),
gsap.registerPlugin(MotionPathPlugin),

console.log("ScrollTrigger", ScrollTrigger)

///////////////////////////////////////VIVIAN ANIMATIONS HERE//////////////////////////////////////////////////////

/////////////////////////////////// Main container /////////////////////////////////////

const vivMainPath = [
  { left: 0, top: 0 },
  { left: 0, top: 100 },
]

const vivMainTL = gsap.timeline({
	scrollTrigger: {
    trigger: ".main-container",
		scrub: 2,
	},
})

vivMainTL.to(".vivian", {
	motionPath: {
		path: vivMainPath,
		autoRotate: false,
	},
	duration: 10,
  ease: Power1.easeInOut,
});

/////////////////////////////////// Bio container /////////////////////////////////////


const vivBioPath = [
  { left: 0, top: 100 },
  { left: 0, top: 50 },
  { left: 0, top: 0 },
]

const vivBioTL = gsap.timeline({
	scrollTrigger: {
    trigger: ".bio-container",
		scrub: 2,
	},
})

vivBioTL.to(".vivian", {
	motionPath: {
		path: vivBioPath,
		autoRotate: false,
	},
	duration: 10,
  ease: Power1.easeInOut,
});

/////////////////////////////////// Abilities container /////////////////////////////////////

const vivAbilitiesPath = [
  { left: 0, top: 0 },
  { left: 450, top: 100 },
]

const vivAbilitiesTL = gsap.timeline({
	scrollTrigger: {
    trigger: ".weaknesses",
		scrub: 2,
		start: 1500,
	},
})

vivAbilitiesTL.to(".vivian", {
	motionPath: {
		path: vivAbilitiesPath,
		autoRotate: false,
	},
	duration: 1,
  
});






///////////////////////////////////////PAGE ANIMATIONS HERE//////////////////////////////////////////////////////

/////////////////////////////////// Main container /////////////////////////////////////

const mainTitlePath = [
	{ opacity: 0},
  ]
  
  const mainTitleTL = gsap.timeline({
	  scrollTrigger: {
	  trigger: ".main-container",
		  scrub: 2,
		  start: 90,
	  },
  })
  
  mainTitleTL.to(".main-container", {
	  motionPath: {
		  path: mainTitlePath,
		  autoRotate: false,
	  },
	  duration: 10,
	ease: Power1.easeInOut,
  });

