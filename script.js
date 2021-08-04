let arr = [];
let len = 10;

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
    pag.innerHTML += "<div class='elem' style='height:" + arr[i] + "px'>" + arr[i] + "</div>";
  }
  let x = document.getElementById("arr");
  let y = x.getElementsByClassName("elem");
  let i;
  for (i = 0; i < y.length; i++) {
    y[i].style.width = wid + "px";
  }
}


randomArray();
function slider2len() {
  var slider = document.getElementById("slider");
  slider.oninput = function () {
    len = this.value;
    console.log(len);
  }
}
slider2len();

let generateButton = document.getElementById("genbtn");
generateButton.addEventListener("onclick", () => { console.log("clicked btn"); });
let slideVal = document.getElementById("slider");
slideVal.addEventListener("change", randomArray);

sortedArray = arr;
console.log(sortedArray);

function selectionSort(sortedArray) {
  let arrlenght = sortedArray.length;
  for (let first = 0; first < arrlenght - 1; first++) {
    for (let second = first + 1; second < arrlenght; second++) {
      if (sortedArray[second] < sortedArray[first]) {
        let temp = sortedArray[second];
        sortedArray[second] = sortedArray[first];
        sortedArray[first] = temp;
      }
    }
  }
  console.log("sorting done");
  console.log(sortedArray);
}

function changeArray() {
  console.log(len);
  let arrayHTML = document.getElementById("arr");
  let arrayElements = arrayHTML.getElementsByClassName("elem");
  console.log(arrayElements.length);
  let lenghtarray =arrayElements.length;

  for (let i = 0; i < lenghtarray; i++) {
    arrayElements[i].style.height = sortedArray[i]+'px';
    // console.log(arrayElements[i].style.height );
    // console.log(sortedArray[i] * 2 + "px");
  }
}
