// navbar
$(window).scroll(function() {
  if ($(document).scrollTop() > 50) {
      $('.nav').addClass('affix');
      console.log("OK");
  } else {
      $('.nav').removeClass('affix');
  }
});
$('.navTrigger').click(function () {
$(this).toggleClass('active');
console.log("Clicked menu");
$("#mainListDiv").toggleClass("show_list");
$("#mainListDiv").fadeIn();

});


var slideIndex = 0;
var slideIndex2 = 0;
var slideIndex3 = 0;

showSlides();
showSlides2();
showSlides3();

function showSlides() {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}    
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " active";
  setTimeout(showSlides, 2000); // Change image every 2 seconds
}

function showSlides2() {
    var i;
    var slides = document.getElementsByClassName("mySlides2");
    var dots = document.getElementsByClassName("dot2");
    for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";  
    }
    slideIndex2++;
    if (slideIndex2 > slides.length) {slideIndex2 = 1}    
    for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex2-1].style.display = "block";  
    dots[slideIndex2-1].className += " active";
    setTimeout(showSlides2, 2000); // Change image every 2 seconds
  }

  function showSlides3() {
    var i;
    var slides = document.getElementsByClassName("mySlides3");
    var dots = document.getElementsByClassName("dot3");
    for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";  
    }
    slideIndex3++;
    if (slideIndex3 > slides.length) {slideIndex3 = 1}    
    for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex3-1].style.display = "block";  
    dots[slideIndex3-1].className += " active";
    setTimeout(showSlides3, 2000); // Change image every 2 seconds
  }
//faq
const toggles = document.querySelectorAll('.faq-toggle');

toggles.forEach(toggle => {
toggle.addEventListener('click', () => {
  toggle.parentNode.classList.toggle('active');
});
});

//timer
function updateTimer() {
  future  = Date.parse("June 05, 2020 10:00:00");
  now     = new Date();
  diff    = future - now;

  days  = Math.floor( diff / (1000*60*60*24) );
  hours = Math.floor( diff / (1000*60*60) );
  mins  = Math.floor( diff / (1000*60) );
  secs  = Math.floor( diff / 1000 );

  d = days;
  h = hours - days  * 24;
  m = mins  - hours * 60;
  s = secs  - mins  * 60;
  if (s<10) {
    s="0"+s;
  }
  if (m<10) {
    m="0"+m;
  }
  if (h<10) {
    h="0"+h;
  }
  if (d<10) {
    d="0"+d;
  }

  document.getElementById("timer")
    .innerHTML =
      '<p>HACK ENDS IN</p>'+
      '<div>' + 0 + '<span>days</span></div>' +
      '<div>' + 0 + '<span>hours</span></div>' +
      '<div>' + 0 + '<span>minutes</span></div>' +
      '<div>' + 0 + '<span>seconds</span></div>' ;
     
}
setInterval('updateTimer()', 1000 );

//button
function myFunction() {
  alert("Coming Soon!");
}
//particles config

particlesJS("particles-js", {
  "particles": {
  "number": {
    "value": 40,
    "density": {
      "enable": true,
      "value_area": 800
    }
  },
  "color": {
    "value": "#ffffff"
  },
  "shape": {
    "type": "circle",
    "stroke": {
      "width": 0,
      "color": "#000000"
    },
    "polygon": {
      "nb_sides": 7
    },
    "image": {
      "src": "img/github.svg",
      "width": 100,
      "height": 100
    }
  },
  "opacity": {
    "value": 0.5,
    "random": false,
    "anim": {
      "enable": false,
      "speed": 1,
      "opacity_min": 0.1,
      "sync": false
    }
  },
  "size": {
    "value": 3,
    "random": true,
    "anim": {
      "enable": false,
      "speed": 40,
      "size_min": 0.1,
      "sync": false
    }
  },
  "line_linked": {
    "enable": true,
    "distance": 150,
    "color": "#ffffff",
    "opacity": 0.4,
    "width": 1
  },
  "move": {
    "enable": true,
    "speed": 3,
    "direction": "none",
    "random": false,
    "straight": false,
    "out_mode": "out",
    "bounce": false,
    "attract": {
      "enable": false,
      "rotateX": 600,
      "rotateY": 1200
    }
  }
  },
  "interactivity": {
  "detect_on": "canvas",
  "events": {
    "onhover": {
      "enable": true,
      "mode": "grab"
    },
    "onclick": {
      "enable": true,
      "mode": "push"
    },
    "resize": true
  },
  "modes": {
    "grab": {
      "distance": 140,
      "line_linked": {
        "opacity": 1
      }
    },
    "bubble": {
      "distance": 400,
      "size": 40,
      "duration": 2,
      "opacity": 8,
      "speed": 3
    },
    "repulse": {
      "distance": 200,
      "duration": 0.4
    },
    "push": {
      "particles_nb": 4
    },
    "remove": {
      "particles_nb": 2
    }
  }
  },
  "retina_detect": true
  });
/*devfolio registration button
document.addEventListener('DOMContentLoaded', function () {
  let devfolioOptions = {
      buttonSelector: '#devfolio-apply-now',
      key: 'vortex360',
  }

  let script = document.createElement('script');
  script.src = "https://apply.devfolio.co";
  document.head.append(script);

  script.onload = function () {
      new Devfolio(devfolioOptions);
  }

  script.onerror = function () {
      document.querySelector(devfolioOptions.buttonSelector).addEventListener('click', function () {
          window.location.href = 'https://devfolio.co/external-apply/' + devfolioOptions.key;
      });
  }
});*/
//pop-up
var modal = document.getElementById("myModal");

// Get the image and insert it inside the modal - use its "alt" text as a caption
var img = document.getElementById("myImg");
var modalImg = document.getElementById("img01");
var captionText = document.getElementById("caption");
img.onclick = function(){
  modal.style.display = "block";
  img.style.display= "none";
  modalImg.src = this.src;
  captionText.innerHTML = this.alt;
}

// Get the <span> element that closes the modal
var span1 = document.getElementsByClassName("close")[0];

// When the user clicks on <span> (x), close the modal
span1.onclick = function() { 
  modal.style.display = "none";
  img.style.display="block";
}


var modal1 = document.getElementById("myModal1");
var captionText1 = document.getElementById("caption1");
var win = document.querySelector('#winners-popup')

win.onclick = function(){
  modal1.style.display = "block";
  captionText.innerHTML = this.alt;
}

var span11 = document.querySelector(".closew");

span11.onclick = function() { 
  modal1.style.display = "none";
  console.log("sds")
}


