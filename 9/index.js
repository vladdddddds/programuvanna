const elem = document.getElementById('prog');
elem.onclick = function () {
   animate({
      duration: 1000,
      timing: function (timeFraction) {
         return timeFraction;
      },
      draw: function (progress) {
         elem.style.width = progress * 100 + '%';
      }
   });
};

const brick = document.getElementById('box');
const brick2 = document.getElementById('box-2');
const brick3 = document.getElementById('box-3');
const brick4 = document.getElementById('box-4');
const brick5 = document.getElementById('box-5');
const brick6 = document.getElementById('box-6');

brick.onclick = function () {
   animate({
      duration: 3000,
      timing: function (timeFraction) {
         return Math.pow(timeFraction, 2);
      },
      draw: function (progress) {
         brick.style.left = progress * 90 + '%';
      }
   });
};

brick2.onclick = function () {
   animate({
      duration: 3000,
      timing: function (timeFraction) {
         return Math.pow(timeFraction, 5);
      },
      draw: function (progress) {
         brick2.style.left = progress * 90 + '%';
      }
   });
};

brick3.onclick = function () {
   animate({
      duration: 3000,
      timing: function circ(timeFraction) {
         return 1 - Math.sin(Math.acos(timeFraction))
      },
      draw: function (progress) {
         brick3.style.left = progress * 90 + '%';
      }
   });
};


brick4.onclick = function () {
   animate({
      duration: 3000,
      timing: function back(x, timeFraction) {
         return Math.pow(timeFraction, 2) * ((x + 1) * timeFraction - x)
      }.bind(null, 1.5),
      draw: function (progress) {
         brick4.style.left = progress * 90 + '%';
      }
   });
};


brick5.onclick = function () {
   animate({
      duration: 3000,
      timing: function bounce(timeFraction) {
         for (let a = 0, b = 1; 1; a += b, b /= 2) {
            if (timeFraction >= (7 - 4 * a) / 11) {
               return -Math.pow((11 - 6 * a - 11 * timeFraction) / 4, 2) + Math.pow(b, 2)
            }
         }
      },
      draw: function (progress) {
         brick5.style.left = progress * 90 + '%';
      }
   });
};


brick6.onclick = function () {
   animate({
      duration: 3000,
      timing: function elastic(x, timeFraction) {
         return Math.pow(2, 10 * (timeFraction - 1)) * Math.cos(20 * Math.PI * x / 3 * timeFraction)
      }.bind(null, 1.5),
      draw: function (progress) {
         brick6.style.left = progress * 90 + '%';
      }
   });
};

/********************ТЕКС***********************/

function animateText(textArea) {
   let text = textArea.value;
   let to = text.length,
      from = 0;

   animate({
      duration: 5000,
      timing: bounce,
      draw: function (progress) {
         let result = (to - from) * progress + from;
         textArea.value = text.slice(0, Math.ceil(result))
      }
   });
}


function bounce(timeFraction) {
   for (let a = 0, b = 1; 1; a += b, b /= 2) {
      if (timeFraction >= (7 - 4 * a) / 11) {
         return -Math.pow((11 - 6 * a - 11 * timeFraction) / 4, 2) + Math.pow(b, 2)
      }
   }
}