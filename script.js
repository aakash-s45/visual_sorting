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


async function selectionSort() {
  sortedArray = arr;
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
  console.log("sorting done");



  }//#funnc









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

