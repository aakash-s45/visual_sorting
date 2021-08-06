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
      y[i].innerHTML=arr[i];
    }
  }
}

randomArray();
let generateButton = document.getElementById("genbtn");
let slideVal = document.getElementById("slider");
slideVal.addEventListener("change", randomArray);


let sortedArray = [];
async function selectionSort() {
  sortedArray = arr;
  console.log("Starting Selection Sort");
  let arrayHTML = document.getElementById("arr");
  let arrayElements = arrayHTML.getElementsByClassName("elem");
  let arrlenght = sortedArray.length;
  let min_idx=0;

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
        }, 100)
        );
        
        if (sortedArray[second] < sortedArray[first]) {
          let temp = sortedArray[second];
          sortedArray[second] = sortedArray[first];
          arrayElements[second].style.height = sortedArray[first] * 2 + "px";
          if(arrlenght<12)arrayElements[second].innerHTML = sortedArray[first];
          sortedArray[first] = temp;
          arrayElements[first].style.height = temp * 2 + "px";
          if(arrlenght<12)arrayElements[first].innerHTML = temp;
        }
        
      }//#2
    await new Promise((resolve) =>
    setTimeout(() => {
          resolve();
        }, 100)
        );
        arrayElements[min_idx].style.backgroundColor = "skyblue";   
        arrayElements[first].style.backgroundColor = "green";
        arrayElements[arrlenght-1].style.backgroundColor = "green";
        
      }//#1
      console.log("Selection Sort Done!");
      
  }//#funnc

// --------------------------------Bubble Sort--------------------------------------
let arrayBubble=[];
async function bubblesort(delay=100) {
  arrayBubble=arr;
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
      arrayElements[st].style.backgroundColor = "red";
      arrayElements[st+1].style.backgroundColor = "red";
      await new Promise((resolve) =>
                setTimeout(() => {
                    resolve();
                }, delay)
            );
      if (arrayBubble[st] > arrayBubble[st + 1]) {
        var temp = arrayBubble[st];
        
        arrayBubble[st] = arrayBubble[st + 1];
        arrayElements[st].style.height = arrayBubble[st+1] * 2 + "px";
        arrayBubble[st + 1] = temp;
        arrayElements[st+1].style.height = temp* 2 + "px";
 

      }
             arrayElements[st].style.backgroundColor = "pink";
        arrayElements[st].style.backgroundColor = "pink";

    }
       arrayElements[st].style.backgroundColor = "green";

  }
  console.log("Bubble Sort Done!");
}
// --------------------------------Merge Sort--------------------------------------

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

// arr_merge = mergeSort(arr_merge);
// console.log(arr_merge);