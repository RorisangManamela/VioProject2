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
  { left: 400, top: 0 },
]

const vivAbilitiesTL = gsap.timeline({
	scrollTrigger: {
    trigger: ".abilities-container",
		scrub: 2,
	},
})

vivAbilitiesTL.to(".vivian", {
	motionPath: {
		path: vivAbilitiesPath,
		autoRotate: false,
	},
	duration: 2,
  
});






///////////////////////////////////////PAGE ANIMATIONS HERE//////////////////////////////////////////////////////

/////////////////////////////////// Main container /////////////////////////////////////



