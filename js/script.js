function getRnd(min, max) {
  min = min;
  max = max - min + 1;
  rnd = Math.floor(Math.random()*max) + min
}

function rndAlert() {


}
var rndArr = []
var rnd = getRnd(1, 10)
while (rndArr < 5) {
  rndArr.push(rnd)
}
alert(rndArr)

console.log(rndArr)
