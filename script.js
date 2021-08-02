const arr = [1, 5, 8, 9, 47, 55, 96, 25, 36, 45];
let pag = document.getElementById("arr");
let len=arr.length;
let b=window.innerWidth;
let wid=0.7*b/len;
for (let i = 0; i < arr.length; i++) {
    pag.innerHTML += "<div class='elem' style='height:" + arr[i] * 3 + "px'>" + arr[i] + "</div>";
    // console.log(i);
}
let x = document.getElementById("arr");
let y = x.getElementsByClassName("elem");
let i;
for (i = 0; i < y.length; i++) {
  y[i].style.width = wid+"px";
}