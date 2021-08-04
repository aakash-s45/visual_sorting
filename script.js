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
// generateButton.addEventListener("onclick", console.log("clicked"));

let slideVal = document.getElementById("slider");
slideVal.addEventListener("change", randomArray);
// slideVal.addEventListener("mousedown",myfun);
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
selectionSort(arr);
console.log(arr);