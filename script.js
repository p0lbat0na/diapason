window.onload = function () {
   sizeCor();
   valueOne();
   valueTwo();
}

let minGap = 1;
let pointOne = document.getElementById("point-1");
let pointTwo = document.getElementById("point-2");
let displayValOne = document.getElementById("diapason1");
let displayValTwo = document.getElementById("diapason2");
let pointTrack = document.querySelector(".slider-track");
let pointMaxValue = document.getElementById("point-1").max;
const max = pointOne.dataset.max;
const min = pointOne.dataset.min;

pointOne.setAttribute('max', max);
pointTwo.setAttribute('max', max);
pointOne.setAttribute('min', min);
pointTwo.setAttribute('min', min);

function sizeCor() {
   displayValOne.style.width = displayValOne.value.length * 7 + 10;
   displayValTwo.style.width = displayValTwo.value.length * 7 + 10;
}

function valueOne() {
   if (parseInt(pointTwo.value) - parseInt(pointOne.value) <= minGap) {
      pointOne.value = parseInt(pointTwo.value) - minGap;
   }
   displayValOne.value = pointOne.value;
   fillColor();
   sizeCor();
}
function valueTwo() {
   if (parseInt(pointTwo.value) - parseInt(pointOne.value) <= minGap) {
      pointTwo.value = parseInt(pointOne.value) + minGap;
   }
   displayValTwo.value = pointTwo.value;
   fillColor();
   sizeCor();

}
function fillColor() {
   pointMaxValue = document.getElementById("point-1").max;
   percent1 = (pointOne.value / pointMaxValue) * 100;
   percent2 = (pointTwo.value / pointMaxValue) * 100;
   pointTrack.style.background = `linear-gradient(to right, #FFECBB ${percent1}% , #FDC840 ${percent1}% , #FDC840 ${percent2}%, #FFECBB ${percent2}%)`;
}

// displayValOne.addEventListener("change", event => {
function inpOne() {
   if (parseInt(displayValTwo.value) - parseInt(displayValOne.value) <= minGap) {
      pointOne.value = parseInt(pointTwo.value) - minGap;
   }
   else {
      pointOne.value = displayValOne.value;
   }
   fillColor();
   sizeCor();

}
function inpTwo() {

   if (parseInt(displayValTwo.value) - parseInt(displayValOne.value) <= minGap) {
      pointTwo.value = parseInt(pointOne.value) + minGap;
   }
   else {
      pointTwo.value = displayValTwo.value;
   }
   fillColor();
   sizeCor();

}

function changeOne() {
   displayValOne.value = pointOne.value;
   fillColor();
   sizeCor();

}

function changeTwo() {
   displayValTwo.value = pointTwo.value;
   fillColor();
   sizeCor();

}
//})

