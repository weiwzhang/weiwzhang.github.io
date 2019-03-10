window.onload = function() {
    typeWriter();
    // $('footer').fadeIn(1000);
    // $('profile').fadeIn(1000);
};


// add typing effect to name on home page
var i = 0;
var txt = "Hi there, I'm Weiwei!"; /* The text */
var speed = 60; /* The speed/duration of the effect in milliseconds */

function typeWriter() {
  if (i < txt.length) {
    document.getElementById("home_title").innerHTML += txt.charAt(i);
    i++;
    setTimeout(typeWriter, speed);
  }
}

// change profile picture on click
function changeProfileImg() {
	if (document.getElementById("profile_img").src.endsWith("img/caricature.jpg")) {
        document.getElementById("profile_img").src = "./img/linkedin_pic.jpg";
        document.getElementById("profile_img").style = "width: 21vw; height: 28vh"
    } else {
    	document.getElementById("profile_img").src = "./img/caricature.jpg";
        document.getElementById("profile_img").style = "width: 14vw; height: 28vh"
    }
}



// https://github.com/lmgonzalves/brushstroke