let arr = [];
let len = 30;

function randomArray() {
  while (arr.length < len) {
    let r = Math.floor(Math.random() * 300) + 1;
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

let generateButton = document.getElementById("generateArray");
randomArray(arr, len);
generateButton.addEventListener("onclick",randomArray);