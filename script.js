const bars = [1, 5, 8, 9, 47, 55, 96, 25, 36, 45];
// let pag = document.getElementsByClassName("arr");
let pag = document.getElementById("arr");
let len=bars.length;
let b=window.innerWidth;
let wid=0.9*b/len;
// console.log(wid);
for (let i = 0; i < bars.length; i++) {
    // pag.innerHTML+="hello"+bars[i]+"<br>";
    pag.innerHTML += "<div class='elem' style='height:" + bars[i] * 3 + "px'>" + bars[i] + "</div>";
    console.log(i);
}
let x = document.getElementById("arr");
let y = x.getElementsByClassName("elem");
let i;
for (i = 0; i < y.length; i++) {
  y[i].style.width = wid+"px";
}
