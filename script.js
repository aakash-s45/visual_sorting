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

function disableInput() {
  let hit=document.getElementById("toolbar").style.height="100px";
  document.getElementById("card").style.visibility="visible";
  document.getElementById("algbtn1").style.visibility="hidden";
  document.getElementById("algbtn2").style.visibility="hidden";
  document.getElementById("algbtn3").style.visibility="hidden";
  document.getElementById("algbtn4").style.visibility="hidden";
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
// function delay(delayInms) {
//   return new Promise(resolve => {
//     setTimeout(() => {
//       resolve(2);
//     }, delayInms);
//   });
// }
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

      arrayElements[l+code1].style.backgroundColor = "red";
      arrayElements[m+1+code2].style.backgroundColor = "blue";
      await new Promise((resolve) =>
        setTimeout(() => {
          resolve();
        }, 500)
      );
    
      arr_merge[code3] = L[code1];
      arrayElements[code3].style.height = L[code1] * 2 + "px";
     
    arrayElements[l+code1].style.backgroundColor = "green";
      arrayElements[m+1+code2].style.backgroundColor = "green";
      code1++;
    }
    else {

     arrayElements[l+code1].style.backgroundColor = "red";
      arrayElements[m+1+code2].style.backgroundColor = "blue";
      arr_merge[code3] = R[code2];
      arrayElements[code3].style.height = R[code2] * 2 + "px";
       arrayElements[l+code1].style.backgroundColor = "green";
      arrayElements[m+1+code2].style.backgroundColor = "green";
      code2++;
    }
    
    code3++;
  }
  while (code1 < ll) {
    arr_merge[code3] = L[code1];

      // arrayElements[m+1+code2].style.backgroundColor = "pink";
    arrayElements[code3].style.height = L[code1] * 2 + "px";

      // arrayElements[m+1+code2].style.backgroundColor = "green";
  
    code1++;
    code3++;
  }
  while (code2 < rl) {
    arr_merge[code3] = R[code2]
    // arrayElements[l+code1].style.backgroundColor = "pink";

    arrayElements[code3].style.height = R[code2] * 2 + "px";
        // arrayElements[l+code1].style.backgroundColor = "green";
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
  counter+=2;
  var m = l + parseInt((r - l) / 2);
  await mergeSort(arr_merge, l, m);
  await mergeSort(arr_merge, m + 1, r);
  await merge(arr_merge, l, m, r);
  
  await timeout(800);
}

const mergeSoting_start = async() => {
  arr_merge = arr;
  await mergeSort(arr_merge, 0, arr_merge.length - 1);
  console.log("Merge Sorting Done!")
}
// --------------------------------QuickSort--------------------------------------
async function partition(arr_q, qlow, qhigh) {
  disableInput();
 let arrayHTML = document.getElementById("arr");
  let arrayElements = arrayHTML.getElementsByClassName("elem");

  arrayElements[qlow].style.backgroundColor = "red";
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
        }, 50)
      );

  arrayElements[qi].style.backgroundColor = "rgb(42, 172, 10)";
      qi++;


    }
    if(qi<qhigh){
    arrayElements[qi].style.backgroundColor = "yellow";}
    while (arr_q[qj] > pivot) {
        arrayElements[qj].style.backgroundColor = "orange";
  await new Promise((resolve) =>
        setTimeout(() => {
          resolve();
        }, 50)
      );

  arrayElements[qj].style.backgroundColor = "rgb(42, 172, 10)";
      qj--;
    }
            arrayElements[qj].style.backgroundColor = "orange";
    if (qi < qj) {
      qtemp = arr_q[qi];
      arr_q[qi] = arr_q[qj];
      arrayElements[qi].style.height = arr_q[qj] * 2 + "px";
      arr_q[qj] = qtemp;
      arrayElements[qj].style.height = qtemp * 2 + "px";
    }
  }while (qj > qi);
  if(qi<qhigh){arrayElements[qi].style.backgroundColor = "rgb(42, 172, 10)";}
        arrayElements[qj].style.backgroundColor = "rgb(42, 172, 10)";
arrayElements[qlow].style.backgroundColor = "rgb(42, 172, 10)";
    await new Promise((resolve) =>
        setTimeout(() => {
          resolve();
        }, 50)
      );
  qtemp = arr_q[qlow];

  arr_q[qlow] = arr_q[qj];
  arrayElements[qlow].style.height = arr_q[qj] * 2 + "px";
  arr_q[qj] = qtemp;
  arrayElements[qj].style.height = qtemp * 2 + "px";
  arrayElements[qj].style.backgroundColor = "rgb(42, 172, 10)";
    await new Promise((resolve) =>
        setTimeout(() => {
          resolve();
        }, 50)
      );
  return qj;
}
function timeout(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}



let quick_count = 0;
const quicksort = async(arr_q, qlow, qhigh) => {
  let partitionInd;
  quick_count++;
  if (qlow < qhigh) {
    partitionInd = await partition(arr_q, qlow, qhigh);


      await quicksort(arr_q, qlow, partitionInd - 1);
      await quicksort(arr_q, partitionInd + 1, qhigh);
   await timeout(800);
  }
}

const quicksort_start = async() => {
  disableInput();
  let quick_arr = arr;
  await quicksort(quick_arr, 0, quick_arr.length - 1);
  console.log("QuickSort Done!");
}

// var arr_q = [8, 7, 5, 3, 3, 56, 74, 12, 65, 85, 42];


// function enableInput(){
//   let tools=document.getElementById("toolbar");
//   let inps=tools.getElementsByClassName("dis");
//   for(let i=0;i<inps.length;i++){
//     inps[i].disabled=false;
//   }
// }

// quicksort(arr_q, 0, arr_q.length - 1);
