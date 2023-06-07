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


/////////////////////////////////// Abilities2 container /////////////////////////////////////

const vivStatsPath = [
	{ left: 550, top: 100 },
	{ left: 750, top: 100 },
  ]
  
  const vivStatsTL = gsap.timeline({
	  scrollTrigger: {
	  trigger: ".stats-wrapper",
		  scrub: 2,
		  start: 1500,
	  },
  })
  
  vivStatsTL.to(".vivian", {
	  motionPath: {
		  path: vivStatsPath,
		  autoRotate: false,
	  },
	  duration: 1,
	
  });
  


/////////////////////////////////// deimos container /////////////////////////////////////

const vivDeimosPath = [
	{ opacity: 1},
	{ opacity: 0},
  ]
  
  const vivDeimosTL = gsap.timeline({
	  scrollTrigger: {
	  trigger: ".deimos-wrapper",
		  scrub: 2,
		  start: 3400,
	  },
  })
  
  vivDeimosTL.to(".vivian", {
	  motionPath: {
		  path: vivDeimosPath,
		  autoRotate: false,
	  },
	  duration: 1,
	
  });
  

  
/////////////////////////////////// author container /////////////////////////////////////

const vivAuthorPath = [
	{ opacity: 0},
	{ opacity: 1},
  ]
  
  const vivAuthorTL = gsap.timeline({
	  scrollTrigger: {
	  trigger: ".author-title",
		  scrub: 2,
		  start: 6500,
	  },
  })
  
  vivAuthorTL.to(".vivian", {
	  motionPath: {
		  path: vivAuthorPath,
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

/////////////////////////////////// stats container /////////////////////////////////////

  /*function strenghtToAgility() {
	if (document.getElementById('strength')) {

		if (document.getElementById('strength').style.display == 'none') {
			document.getElementById('strength').style.display = 'block';
			document.getElementById('agility').style.display = 'none';
		}
		else {
			document.getElementById('strength').style.display = 'none';
			document.getElementById('agility').style.display = 'block';
		}
	}
}*/

function strenghtToAgility() {
	if (document.getElementById('strength')) {

		if (document.getElementById('strength').style.display == 'block') {
			document.getElementById('strength').style.display = 'block';
			document.getElementById('agility').style.display = 'none';
		}
		else {
			document.getElementById('strength').style.display = 'none';
			document.getElementById('agility').style.display = 'block';
		}
	}
}

function agilityToIntelligence() {
	if (document.getElementById('agility')) {

		if (document.getElementById('agility').style.display == 'none') {
			document.getElementById('agility').style.display = 'block';
			document.getElementById('intelligence').style.display = 'none';
		}
		else {
			document.getElementById('agility').style.display = 'none';
			document.getElementById('intelligence').style.display = 'block';
		}
	}
}

function intelligenceToCharm() {
	if (document.getElementById('intelligence')) {

		if (document.getElementById('intelligence').style.display == 'none') {
			document.getElementById('intelligence').style.display = 'block';
			document.getElementById('charm').style.display = 'none';
		}
		else {
			document.getElementById('intelligence').style.display = 'none';
			document.getElementById('charm').style.display = 'block';
		}
	}
}

function charmToStealth() {
	if (document.getElementById('charm')) {

		if (document.getElementById('charm').style.display == 'none') {
			document.getElementById('charm').style.display = 'block';
			document.getElementById('stealth').style.display = 'none';
		}
		else {
			document.getElementById('charm').style.display = 'none';
			document.getElementById('stealth').style.display = 'block';
		}
	}
}

function stealthToSpeed() {
	if (document.getElementById('charm')) {

		if (document.getElementById('stealth').style.display == 'none') {
			document.getElementById('stealth').style.display = 'block';
			document.getElementById('speed').style.display = 'none';
		}
		else {
			document.getElementById('stealth').style.display = 'none';
			document.getElementById('speed').style.display = 'block';
		}
	}
}

function speedToStealth() {
	if (document.getElementById('charm')) {

		if (document.getElementById('speed').style.display == 'none') {
			document.getElementById('speed').style.display = 'block';
			document.getElementById('stealth').style.display = 'none';
		}
		else {
			document.getElementById('speed').style.display = 'none';
			document.getElementById('stealth').style.display = 'block';
		}
	}
}

function stealthToCharm() {
	if (document.getElementById('charm')) {

		if (document.getElementById('stealth').style.display == 'none') {
			document.getElementById('stealth').style.display = 'block';
			document.getElementById('charm').style.display = 'none';
		}
		else {
			document.getElementById('stealth').style.display = 'none';
			document.getElementById('charm').style.display = 'block';
		}
	}
}

function charmToIntelligence() {
	if (document.getElementById('charm')) {

		if (document.getElementById('charm').style.display == 'none') {
			document.getElementById('charm').style.display = 'block';
			document.getElementById('intelligence').style.display = 'none';
		}
		else {
			document.getElementById('charm').style.display = 'none';
			document.getElementById('intelligence').style.display = 'block';
		}
	}
}

function intelligenceToAgility() {
	if (document.getElementById('charm')) {

		if (document.getElementById('intelligence').style.display == 'none') {
			document.getElementById('intelligence').style.display = 'block';
			document.getElementById('agility').style.display = 'none';
		}
		else {
			document.getElementById('intelligence').style.display = 'none';
			document.getElementById('agility').style.display = 'block';
		}
	}
}

function agilityToStrength() {
	if (document.getElementById('charm')) {

		if (document.getElementById('agility').style.display == 'none') {
			document.getElementById('agility').style.display = 'block';
			document.getElementById('strength').style.display = 'none';
		}
		else {
			document.getElementById('agility').style.display = 'none';
			document.getElementById('strength').style.display = 'block';
		}
	}
}