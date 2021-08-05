let arr = [];
let len = 10;

function slider2len() {
  var slider = document.getElementById("slider");
  slider.oninput = function () {
    len = this.value;
    console.log(len);
  }
}
slider2len();

function myfun() {
  document.getElementById('arr').innerHTML = "";
  arr = [];
}

function randomArray() {
  myfun();
  while (arr.length < len) {
    let r = Math.floor(Math.random() * 300) + 5;
    if (arr.indexOf(r) === -1) arr.push(r);
  }

  let pag = document.getElementById("arr");
  let b = window.innerWidth;
  let wid = 0.7 * b / len;
  for (let i = 0; i < arr.length; i++) {
    pag.innerHTML += "<div class='elem' style='height:" + arr[i] * 2 + "px'>" + "</div>";
  }
  let x = document.getElementById("arr");
  let y = x.getElementsByClassName("elem");
  let i;
  for (i = 0; i < y.length; i++) {
    y[i].style.width = wid + "px";
  }
  if (y.length < 12) {
    for (i = 0; i < y.length; i++) {
      y[i].innerHTML = arr[i];
    }
  }
}

randomArray();
let generateButton = document.getElementById("genbtn");
let slideVal = document.getElementById("slider");
slideVal.addEventListener("change", randomArray);
let sortedArray = [];
console.log(sortedArray);

let arrayHTML = document.getElementById("arr");
arrayHTML.addEventListener("change", () => {
  console.log(sortedArray.length);
  console.log(sortedArray);
})


function selectionSort() {
  sortedArray = arr;
  let arrayHTML = document.getElementById("arr");
  let arrayElements = arrayHTML.getElementsByClassName("elem");
  let arrlenght = sortedArray.length;
  let originalColor = arrayElements[0].style.backgroundColor;

  for (let first = 0; first < arrlenght - 1; first++) {
    setTimeout(() => {
      // here first = red
      arrayElements[first].style.backgroundColor = "red";
      // setInterval(() => {
      //   arrayElements[first].style.backgroundColor = "red";
      // }, 200 * first);
      for (let second = first + 1; second < arrlenght; second++) {

        setTimeout(() => {
          // setInterval(() => {
          arrayElements[second].style.backgroundColor = "red";
          // }, 200 * second);
          if (sortedArray[second] < sortedArray[first]) {
            let temp = sortedArray[second];
            sortedArray[second] = sortedArray[first];

            arrayElements[second].style.height = sortedArray[first] * 2 + "px";
            if (arrlenght < 12) arrayElements[second].innerHTML = sortedArray[first];

            sortedArray[first] = temp;

            arrayElements[first].style.height = temp * 2 + "px";

            if (arrlenght < 12) arrayElements[first].innerHTML = temp;
            // setInterval(() => {
            arrayElements[second].style.backgroundColor = originalColor;
            // }, 200 * second);
          }

        }, 200 * second)
      }
      arrayElements[first].style.backgroundColor = originalColor;
      // setInterval(() => {
      //   arrayElements[first].style.backgroundColor = originalColor;
      // }, 200 * first);
    }, 200 * first);
  }
}

console.log("sorting done");
console.log(sortedArray);

