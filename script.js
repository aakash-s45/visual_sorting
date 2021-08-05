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

  for (let first = 0; first < arrlenght - 1; first++) {
    for (let second = first + 1; second < arrlenght; second++) {
      setTimeout(() => {
        if (sortedArray[second] < sortedArray[first]) {
          let temp = sortedArray[second];
          sortedArray[second] = sortedArray[first];
          arrayElements[second].style.height = sortedArray[first] * 2 + "px";
          arrayElements[second].style.backgroundColor = "red";
          if (arrlenght < 12) arrayElements[second].innerHTML = sortedArray[first];
          sortedArray[first] = temp;
          arrayElements[first].style.height = temp * 2 + "px";
          arrayElements[first].style.backgroundColor = "blue";
          if (arrlenght < 12) arrayElements[first].innerHTML = temp;
        }
      }, 200 * second)
    }
  }
}

console.log("sorting done");
console.log(sortedArray);

function bubble_sort(arr) {

  for (var ft = 0; ft < arr.length; ft++) {


    for (var st = 0; st < (arr.length - ft - 1); st++) {



      if (arr[st] > arr[st + 1]) {


        var temp = arr[st]
        arr[st] = arr[st + 1]
        arr[st + 1] = temp
      }
    }
  }


}

let arr_merge = arr

function merge(left, right) {
  let arr = []
  // Break out of loop if any one of the array gets empty
  while (left.length && right.length) {
    // Pick the smaller among the smallest element of left and right sub arrays 
    if (left[0] < right[0]) {
      arr.push(left.shift())
    } else {
      arr.push(right.shift())
    }
  }

  // Concatenating the leftover elements
  // (in case we didn't go through the entire left or right array)
  return [...arr, ...left, ...right]
}

function mergeSort(array) {
  const half = array.length / 2

  // Base case or terminating case
  if (array.length < 2) {
    return array
  }

  const left = array.splice(0, half)
  return merge(mergeSort(left), mergeSort(array))
}

console.log(arr);

arr_merge = mergeSort(arr_merge);
console.log(arr_merge);