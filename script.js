let arr = [];
let len = 10;
console.log("Deepak ko Top coder Bolte !");
let intViewportWidth = window.innerWidth;
let delaytime = 150;
let multi=2;
if (intViewportWidth < 700) {
  document.getElementById("slider-div").innerHTML = '<input type="range" name="slider" min="4" max="110" value="3"id="slider">';
  multi=1.8
}
if (intViewportWidth > 700 && intViewportWidth < 1200) {
  document.getElementById("slider-div").innerHTML = '<input type="range" name="slider" min="4" max="150" value="3"id="slider">'
}
// console.log(intViewportWidth);
function slider2len() {
  var slider = document.getElementById("slider");
  slider.oninput = function () {
    len = this.value;

    if (len <= 10) delaytime = 150;
    else if(len>10 && len<=50)delaytime=20;
    else if(len>50 && len<=75)delaytime=3;
    else if(len>75 && len<=125)delaytime=1;
    else if(len>125 && len<=200)delaytime=0.1;
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
    if(intViewportWidth<800 )pag.innerHTML += "<div class='elem' style='height:" + arr[i]* multi + "px'>" + "</div>";
    else pag.innerHTML += "<div class='elem' style='height:" + arr[i] * multi + "px'>" + "</div>";
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

function disableInput() {
  document.getElementById("card").style.visibility = "visible";
}

// --------------------------------Selection Sort--------------------------------------
let sortedArray = [];
async function selectionSort() {
  disableInput();
  sortedArray = arr;
  console.log("Starting Selection Sort");
  let arrayHTML = document.getElementById("arr");
  let arrayElements = arrayHTML.getElementsByClassName("elem");
  let arrlenght = sortedArray.length;
  let min_idx = 0;

  for (let first = 0; first < arrlenght - 1; first++) {
    arrayElements[first].style.backgroundColor = "darkblue";
    min_idx = first;

    for (let second = first + 1; second < arrlenght; second++) {
      arrayElements[second].style.backgroundColor = "rgb(121, 3, 3)";


      var val1 = sortedArray[second];
      var val2 = sortedArray[min_idx];
      if (val1 < val2) {
        if (min_idx !== first) {

          arrayElements[min_idx].style.backgroundColor = "rgb(250, 103, 128)"

        }
        min_idx = second;
      } else {

        arrayElements[second].style.backgroundColor = "rgb(250, 103, 128)"

      }
      await new Promise((resolve) =>
        setTimeout(() => {
          resolve();
        }, parseInt(delaytime-6))
      );

      if (sortedArray[second] < sortedArray[first]) {
        let temp = sortedArray[second];
        sortedArray[second] = sortedArray[first];
        arrayElements[second].style.height = sortedArray[first] * multi + "px";
        if (arrlenght < 12) arrayElements[second].innerHTML = sortedArray[first];
        sortedArray[first] = temp;
        arrayElements[first].style.height = temp * multi + "px";
        if (arrlenght < 12) arrayElements[first].innerHTML = temp;
      }
      arrayElements[second].style.backgroundColor = "rgb(121, 3, 3)";

      await new Promise((resolve) =>
        setTimeout(() => {
          resolve();
        }, parseInt(delaytime-6))
      );

      arrayElements[second].style.backgroundColor = "rgb(250, 103, 128)"
    }//#2
    await new Promise((resolve) =>
      setTimeout(() => {
        resolve();
      }, parseInt(delaytime-6))
    );
    arrayElements[min_idx].style.backgroundColor = "rgb(250, 103, 128)"
    arrayElements[first].style.backgroundColor = "green";
    arrayElements[arrlenght - 1].style.backgroundColor = "green";

  }//#1
  console.log("Selection Sort Done!");
  await new Promise((resolve) =>
        setTimeout(() => {
          resolve();
        }, parseInt(50))
      );
  window.alert("Selection Sort Done!");

}//#funnc

// --------------------------------Bubble Sort--------------------------------------
let arrayBubble = [];
async function bubblesort() {
  disableInput();
  arrayBubble = arr;
  // 3 2 1 5 4

  // 2 1 3 4 5
  // 1 2 3 4 |5
  // 1 2 3 |4 5
  // 1 2 |3 4 5
  // // 1 |2 3 4 5
  let arrayHTML = document.getElementById("arr");
  let arrayElements = arrayHTML.getElementsByClassName("elem");

  for (var ft = 0; ft < arrayBubble.length; ft++) {
    for (var st = 0; st < (arrayBubble.length - ft - 1); st++) {
      arrayElements[st].style.backgroundColor = "darkblue";
      arrayElements[st + 1].style.backgroundColor = "rgb(121, 3, 3)";
      await new Promise((resolve) =>
        setTimeout(() => {
          resolve();
        }, parseInt(delaytime))
      );
      if (arrayBubble[st] > arrayBubble[st + 1]) {
        var temp = arrayBubble[st];

        arrayBubble[st] = arrayBubble[st + 1];
        arrayElements[st].style.height = arrayBubble[st + 1] * multi + "px";
        arrayBubble[st + 1] = temp;
        arrayElements[st + 1].style.height = temp * multi + "px";


      }
      arrayElements[st].style.backgroundColor = "rgb(250, 103, 128)";
      arrayElements[st].style.backgroundColor = "rgb(250, 103, 128)";

    }
    arrayElements[st].style.backgroundColor = "green";

  }
  console.log("Bubble Sort Done!");
  console.log(arrayBubble);

  await new Promise((resolve) =>
        setTimeout(() => {
          resolve();
        }, parseInt(50))
      );
  window.alert("Bubble Sort Done!");
}
// --------------------------------Merge Sort--------------------------------------

var arr_merge = arr;
var arr_merge_size = arr_merge.length;

async function merge(arr_merge, l, m, r) {
  disableInput();
  var ll = m - l + 1;
  var rl = r - m;

  var L = new Array(ll);
  var R = new Array(rl);

  for (let i = 0; i < ll; i++)
    L[i] = arr_merge[l + i];
  for (let j = 0; j < rl; j++)
    R[j] = arr_merge[m + 1 + j];

  var code1 = 0;
  var code2 = 0;
  var code3 = l;

  let arrayHTML = document.getElementById("arr");
  let arrayElements = arrayHTML.getElementsByClassName("elem");


  while (code1 < ll && code2 < rl) {

    if (L[code1] <= R[code2]) {

      arrayElements[l + code1].style.backgroundColor = "rgb(121, 3, 3)";
      arrayElements[m + 1 + code2].style.backgroundColor = "blue";
      await new Promise((resolve) =>
        setTimeout(() => {
          resolve();
        }, parseInt(delaytime+10))
      );

      arr_merge[code3] = L[code1];
      arrayElements[code3].style.height = L[code1] * multi + "px";

      arrayElements[l + code1].style.backgroundColor = "green";
      arrayElements[m + 1 + code2].style.backgroundColor = "green";
      code1++;
    }
    else {

      arrayElements[l + code1].style.backgroundColor = "rgb(121, 3, 3)";
      arrayElements[m + 1 + code2].style.backgroundColor = "blue";
      arr_merge[code3] = R[code2];
      arrayElements[code3].style.height = R[code2] * multi + "px";
      arrayElements[l + code1].style.backgroundColor = "green";
      arrayElements[m + 1 + code2].style.backgroundColor = "green";
      code2++;
    }

    code3++;
  }
  while (code1 < ll) {
    arr_merge[code3] = L[code1];

    arrayElements[code3].style.height = L[code1] * multi + "px";

    code1++;
    code3++;
  }
  while (code2 < rl) {
    arr_merge[code3] = R[code2];
    arrayElements[code3].style.height = R[code2] * multi + "px";
    code2++;
    code3++;
  }
}
function timeout(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

let counter = 0;
const mergeSort = async (arr_merge, l, r) => {
  if (l >= r) {
    return;
  }
  counter += 2;
  var m = l + parseInt((r - l) / 2);
  await mergeSort(arr_merge, l, m);
  await mergeSort(arr_merge, m + 1, r);
  await merge(arr_merge, l, m, r);

  await timeout(parseInt(delaytime+10));
}

const mergeSoting_start = async () => {
  arr_merge = arr;
  await mergeSort(arr_merge, 0, arr_merge.length - 1);
  console.log("Merge Sorting Done!");
  await new Promise((resolve) =>
        setTimeout(() => {
          resolve();
        }, parseInt(50))
      );
  window.alert("Merge Sorting Done!");
}
// --------------------------------QuickSort--------------------------------------
async function partition(arr_q, qlow, qhigh) {
  disableInput();
  let arrayHTML = document.getElementById("arr");
  let arrayElements = arrayHTML.getElementsByClassName("elem");

  arrayElements[qlow].style.backgroundColor = "rgb(121, 3, 3)";
  let pivot = arr_q[qlow];
  let qi = qlow + 1;
  let qj = qhigh;
  let qtemp;


  do {
    while (arr_q[qi] <= pivot) {

      arrayElements[qi].style.backgroundColor = "yellow";
      await new Promise((resolve) =>
        setTimeout(() => {
          resolve();
        }, parseInt(delaytime))
      );

      arrayElements[qi].style.backgroundColor = "rgb(42, 172, 10)";
      qi++;


    }
    if (qi < qhigh) {
      arrayElements[qi].style.backgroundColor = "yellow";
    }
    while (arr_q[qj] > pivot) {
      arrayElements[qj].style.backgroundColor = "orange";
      await new Promise((resolve) =>
        setTimeout(() => {
          resolve();
        }, parseInt(delaytime))
      );

      arrayElements[qj].style.backgroundColor = "rgb(42, 172, 10)";
      qj--;
    }
    arrayElements[qj].style.backgroundColor = "orange";
    if (qi < qj) {
      qtemp = arr_q[qi];
      arr_q[qi] = arr_q[qj];
      arrayElements[qi].style.height = arr_q[qj] * multi + "px";
      arr_q[qj] = qtemp;
      arrayElements[qj].style.height = qtemp * multi + "px";
    }
  } while (qj > qi);
  if (qi < qhigh) { arrayElements[qi].style.backgroundColor = "rgb(42, 172, 10)"; }
  arrayElements[qj].style.backgroundColor = "rgb(42, 172, 10)";
  arrayElements[qlow].style.backgroundColor = "rgb(42, 172, 10)";
  await new Promise((resolve) =>
    setTimeout(() => {
      resolve();
    }, parseInt(delaytime))
  );
  qtemp = arr_q[qlow];

  arr_q[qlow] = arr_q[qj];
  arrayElements[qlow].style.height = arr_q[qj] * multi + "px";
  arr_q[qj] = qtemp;
  arrayElements[qj].style.height = qtemp * multi + "px";
  arrayElements[qj].style.backgroundColor = "rgb(42, 172, 10)";
  await new Promise((resolve) =>
    setTimeout(() => {
      resolve();
    }, parseInt(delaytime))
  );
  return qj;
}
function timeout(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}



let quick_count = 0;
const quicksort = async (arr_q, qlow, qhigh) => {
  let partitionInd;
  quick_count++;
  if (qlow < qhigh) {
    partitionInd = await partition(arr_q, qlow, qhigh);


    await quicksort(arr_q, qlow, partitionInd - 1);
    await quicksort(arr_q, partitionInd + 1, qhigh);
    await timeout(parseInt(delaytime));
  }
}

const quicksort_start = async () => {
  disableInput();
  let quick_arr = arr;
  await quicksort(quick_arr, 0, quick_arr.length - 1);
  console.log("QuickSort Done!");
  await new Promise((resolve) =>
        setTimeout(() => {
          resolve();
        }, parseInt(50))
      );
  window.alert("QuickSort Done!");
}
