let arr = [];
let len = 10;
// let len;




function myfun(){
  document.getElementById('arr').innerHTML="";
  arr=[];
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
    pag.innerHTML += "<div class='elem' style='height:" + arr[i] * 2 + "px'>" + arr[i] + "</div>";
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
    // return this.value;
  }
}
slider2len();
// len=slider2len();

let generateButton = document.getElementById("genbtn");
generateButton.addEventListener("onclick",()=>{console.log("clicked btn");});
let slideVal = document.getElementById("slider");
slideVal.addEventListener("change", randomArray);
console.log(arr);

function selectionSort() { 
  let arrlenght = arr.length;

  for(let first=0; first<arrlenght-1; first++){
  for(let second = first+1; second <arrlenght; second++){
    if(arr[second] < arr[first]){
      let temp= arr[second];
      arr[second]=arr[first];
      arr[first]=temp;
    }
  }
}
}
<<<<<<< HEAD

function bubble_sort(arr){
     
  for(var ft = 0; ft < arr.length; ft++){
      
     
    for(var st = 0; st < ( arr.length - ft -1 ); st++){
        
      
      
      if(arr[st] > arr[st+1]){
          
        
        var temp = arr[st]
        arr[st] = arr[st + 1]
        arr[st+1] = temp
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
  return [ ...arr, ...left, ...right ]
}

function mergeSort(array) {
const half = array.length / 2

// Base case or terminating case
if(array.length < 2){
  return array 
}

const left = array.splice(0, half)
return merge(mergeSort(left),mergeSort(array))
}
 
arr_merge = mergeSort(arr_merge);
console.log(arr_merge);







=======
selectionSort(arr);
console.log(arr);
>>>>>>> 0559e74d863bfda811275b5515b5a7995e528a7c
