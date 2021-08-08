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

// --------------------------------Selection Sort--------------------------------------
let sortedArray = [];
async function selectionSort() {
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
      arrayElements[second].style.backgroundColor = "red";


      var val1 = sortedArray[second];
      var val2 = sortedArray[min_idx];
      if (val1 < val2) {
        if (min_idx !== first) {

          arrayElements[min_idx].style.backgroundColor = "skyblue";

        }
        min_idx = second;
      } else {

        arrayElements[second].style.backgroundColor = "skyblue";

      }
      await new Promise((resolve) =>
        setTimeout(() => {
          resolve();
        }, 50)
      );

      if (sortedArray[second] < sortedArray[first]) {
        let temp = sortedArray[second];
        sortedArray[second] = sortedArray[first];
        arrayElements[second].style.height = sortedArray[first] * 2 + "px";
        if (arrlenght < 12) arrayElements[second].innerHTML = sortedArray[first];
        sortedArray[first] = temp;
        arrayElements[first].style.height = temp * 2 + "px";
        if (arrlenght < 12) arrayElements[first].innerHTML = temp;
      }

    }//#2
    await new Promise((resolve) =>
      setTimeout(() => {
        resolve();
      }, 50)
    );
    arrayElements[min_idx].style.backgroundColor = "skyblue";
    arrayElements[first].style.backgroundColor = "green";
    arrayElements[arrlenght - 1].style.backgroundColor = "green";

  }//#1
  console.log("Selection Sort Done!");

}//#funnc

// --------------------------------Bubble Sort--------------------------------------
let arrayBubble = [];
async function bubblesort(delay = 100) {
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
      arrayElements[st + 1].style.backgroundColor = "red";
      await new Promise((resolve) =>
        setTimeout(() => {
          resolve();
        }, delay)
      );
      if (arrayBubble[st] > arrayBubble[st + 1]) {
        var temp = arrayBubble[st];

        arrayBubble[st] = arrayBubble[st + 1];
        arrayElements[st].style.height = arrayBubble[st + 1] * 2 + "px";
        arrayBubble[st + 1] = temp;
        arrayElements[st + 1].style.height = temp * 2 + "px";


      }
      arrayElements[st].style.backgroundColor = "pink";
      arrayElements[st].style.backgroundColor = "pink";

    }
    arrayElements[st].style.backgroundColor = "green";

  }
  console.log("Bubble Sort Done!");
}
// --------------------------------Merge Sort--------------------------------------
var arr_merge = arr;
var arr_merge_size = arr_merge.length;

function merge(arr_merge, l, m, r) {
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
      arr_merge[code3] = L[code1];
      arrayElements[code3].style.height = L[code1] * 2 + "px";
      code1++;
    }
    else {
      arr_merge[code3] = R[code2];
      arrayElements[code3].style.height = R[code2] * 2 + "px";
      code2++;
    }
    code3++;
  }
  while (code1 < ll) {
    arr_merge[code3] = L[code1];
    arrayElements[code3].style.height = L[code1] * 2 + "px";
    code1++;
    code3++;
  }
  while (code2 < rl) {
    arr_merge[code3] = R[code2];
    arrayElements[code3].style.height = R[code2] * 2 + "px";
    code2++;
    code3++;
  }
}

let counter = 0;
function mergeSort(arr_merge, l, r) {
  if (l >= r) {
    return;
  }
  counter++;
  var m = l + parseInt((r - l) / 2);
  mergeSort(arr_merge, l, m);
  mergeSort(arr_merge, m + 1, r);
  setTimeout(() => {
    merge(arr_merge, l, m, r);
  }, 200 * counter);

}

function mergeSoting_start() {
  arr_merge = arr;
  mergeSort(arr_merge, 0, arr_merge.length - 1);
  console.log("Merge Sorting Done!")
}
// --------------------------------QuickSort--------------------------------------
function partition(arr_q, qlow, qhigh) {
  let pivot = arr_q[qlow];
  let qi = qlow + 1;
  let qj = qhigh;
  let qtemp;

  let arrayHTML = document.getElementById("arr");
  let arrayElements = arrayHTML.getElementsByClassName("elem");

  do {
    while (arr_q[qi] <= pivot) {
      qi++;
    }
    while (arr_q[qj] > pivot) {
      qj--;
    }
    if (qi < qj) {
      qtemp = arr_q[qi];
      arr_q[qi] = arr_q[qj];
      arrayElements[qi].style.height = arr_q[qj] * 2 + "px";
      arr_q[qj] = qtemp;
      arrayElements[qj].style.height = qtemp * 2 + "px";
    }
  } while (qj > qi);

  qtemp = arr_q[qlow];
  arr_q[qlow] = arr_q[qj];
  arrayElements[qlow].style.height = arr_q[qj] * 2 + "px";
  arr_q[qj] = qtemp;
  arrayElements[qj].style.height = qtemp * 2 + "px";
  return qj;
}
let quick_count = 0;
function quicksort(arr_q, qlow, qhigh) {
  let partitionInd;
  quick_count++;
  if (qlow < qhigh) {
    partitionInd = partition(arr_q, qlow, qhigh);

    setTimeout(() => {

      quicksort(arr_q, qlow, partitionInd - 1);
      quicksort(arr_q, partitionInd + 1, qhigh);
    }, 20 * quick_count);
  }
}

function quicksort_start() {
  let quick_arr = arr;
  quicksort(quick_arr, 0, quick_arr.length - 1);
  console.log("QuickSort Done!");
}

// var arr_q = [8, 7, 5, 3, 3, 56, 74, 12, 65, 85, 42];



// quicksort(arr_q, 0, arr_q.length - 1);
