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


//faq
const toggles = document.querySelectorAll('.faq-toggle');

toggles.forEach(toggle => {
toggle.addEventListener('click', () => {
  toggle.parentNode.classList.toggle('active');
});
});

//timer
function updateTimer() {
  future  = Date.parse("May 05, 2020 11:30:00");
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

  document.getElementById("timer")
    .innerHTML =
      '<div>' + d + '<span>days</span></div>' +
      '<div>' + h + '<span>hours</span></div>' +
      '<div>' + m + '<span>minutes</span></div>' +
      '<div>' + s + '<span>seconds</span></div>' ;
     
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
/*devfolio registration button*/
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
});
