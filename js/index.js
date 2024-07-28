//Navbar Acruive Link.js
const navlink = document.querySelectorAll('.nav_link');
const windowpath = window.location.pathname;

navlink.forEach(navli => {
	const navlinkspath = new URL(navli.href).pathname;
	console.log(navlinkspath);
	if ((windowpath === navlinkspath) || (windowpath === '/index.html' && navlinkspath === '/')) {
		navli.classList.add('active1');
	}
});

// Fixed navabar hide/show
var prevScrollpos = window.pageYOffset;
window.onscroll = function() {
var currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos) {
    document.getElementById("navbar").style.top = "0";
  } else {
    document.getElementById("navbar").style.top = "-100px";
  }
  prevScrollpos = currentScrollPos;
}


// Search Icon Toggle
const body = document.querySelector("body"),
nav = document.querySelector("nav"),
searchToggle = document.querySelector(".searchToggle"),
sidebarOpen = document.querySelector(".sidebarOpen"),
siderbarClose = document.querySelector(".siderbarClose");
// js code to toggle search box
searchToggle.addEventListener("click", () => {
searchToggle.classList.toggle("active");
});

//   js code to toggle sidebar
sidebarOpen.addEventListener("click", () => {
nav.classList.add("active");
});
body.addEventListener("click", (e) => {
let clickedElm = e.target;
if (
  !clickedElm.classList.contains("sidebarOpen") &&
  !clickedElm.classList.contains("menu")
) {
  nav.classList.remove("active");
}
});
//

// Counter Animation
const counters = document.querySelectorAll(".couterh span");
const container = document.querySelector(".couterh");
let activated = false;
const speed = 200;
window.addEventListener("scroll", () => {
	if (pageXOffset > container.offsetTop - container.offsetHeight - 200 && activated === false) {
		counters.forEach(counter => {
			
			function update() {
				const target = +counter.getAttribute('data-count');
				const count = +counter.innerText;
				const inc = target / speed;
				if (count < target) {
					counter.innerText = count + inc;
					setTimeout(update, 1);
				}
				else {
					counter.innerText = target;
				}
			}
			update();
			activated = true;
		})
	}
	else if (pageYOffset < container.offsetTop - container.offsetHeight - 500 || pageYOffset === 0 && activated === false) {
		counters.forEach(counter => {
			counter.innerText = 0;
		})
		activated = false;
	}
	
});


myID = document.getElementById("about2");

function showSmartMenu() {
    // current scroll position 
    var st = window.pageYOffset || document.documentElement.scrollTop;
    // scrolling up 
    if (st < lastScrollTop) {
        upCounter += 1;
        downCounter = 0;
        if (upCounter == 50) {
            myID.className = "abouts2 show"
        }
    } 
    lastScrollTop = st <= 0 ? 0 : st;
}
var lastScrollTop = 0;
var upCounter = 0
var downCounter = 0
window.addEventListener("scroll", showSmartMenu)


const options = {
	distance: '100px',
	origin: "bottom",
	duration:1000,
	interval: 500,
	viewFactor: 0.5,
	rest: true,
}

ScrollReveal().reveal('.reveal', {
	...options,
});
