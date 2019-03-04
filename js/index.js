import Typed from 'typed.js';

// add typing effect to name on home page
var typed = new Typed('name', {
  strings: ["Weiwei", "蔚蔚"],
  typeSpeed: 30
});

document.getElementById('name').innerHTML = typed;


// change profile picture on click
function changeProfileImg() {
	if (document.getElementById("profile_img").src == "./img/caricature.jpg") {
        document.getElementById("profile_img").src == "./img/linkedin_pic.jpg"
    } else {
    	document.getElementById("profile_img").src == "./img/caricature.jpg"
    }
}