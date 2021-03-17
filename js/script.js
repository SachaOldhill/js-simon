//inizio esercizio
function getRnd(min, max) {
  minRnd = min;
  maxRnd = max - min + 1;
  return Math.floor(Math.random()*maxRnd) + minRnd;
}

function rndAlert() {
}

var rndArr = []
while (rndArr.length < 5) {
  var rnd = getRnd(1, 10);
  if (!rndArr.includes(rnd)) { //se l'array non include rnd
    rndArr.push(rnd);
  }
}
alert(rndArr)
//imput utente
var numUtente = []
var numGiusti = []
setTimeout(function() {
  while (numUtente.length < 5) {
    var numeri = parseInt(prompt("inserisci i numeri"));
    if (!numeri.includes(numUtente)){
       numeri.push(numUtente);
       if (!rndArr.includes(numeri)) {
          numGiusti.push(numeri)
       }
    }

  }

  console.log(numUtente)

},3000)

console.log(rndArr)
