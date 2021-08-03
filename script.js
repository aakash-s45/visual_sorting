let arr = [];
let len = 30;
while(arr.length < len){
    let r = Math.floor(Math.random() * 300) + 1;
    if(arr.indexOf(r) === -1) arr.push(r);
}
console.log(arr);
let pag = document.getElementById("arr");
let b=window.innerWidth;
let wid=0.7*b/len;
for (let i = 0; i < arr.length; i++) {
    pag.innerHTML += "<div class='elem' style='height:" + arr[i]*2 + "px'>" + arr[i] + "</div>";
    // console.log(i);
}
let x = document.getElementById("arr");
let y = x.getElementsByClassName("elem");
let i;
for (i = 0; i < y.length; i++) {
  y[i].style.width = wid+"px";
}