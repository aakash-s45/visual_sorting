var arr = [];
var x = 30;
while(arr.length < x){
    var r = Math.floor(Math.random() * 300) + 1;
    if(arr.indexOf(r) === -1) arr.push(r);
}
console.log(arr);