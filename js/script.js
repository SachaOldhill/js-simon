//inizio esercizio
function getRnd(min, max) {
  minRnd = min;
  maxRnd = max - min + 1;
  return Math.floor(Math.random()*maxRnd) + minRnd;
}

function rndAlert(numeriRnd) {
  var rndArr = []
  while (rndArr.length < numeriRnd) {
    var rnd = getRnd(1, 10);
    if (!rndArr.includes(rnd)) { //se l'array non include rnd
      rndArr.push(rnd);
    }
  }
  alert(rndArr);
  return rndArr ;
}

//imput utente
function valoriUtente(numeriPc) {
  var arrUtente = [];
  var numGiusti = [];

    for (var i = 0; i < 5; i++) {

      var numUtente = parseInt(prompt('Dimmi un valore'));

       if (!arrUtente.includes(numUtente)) {
         arrUtente.push(numUtente);

         if (numeriPc.includes(numUtente)) {
           numGiusti.push(numUtente);
         }
       }
       else {
         alert('Valore doppio ritenta');
         i--;
       }


       console.log('Hai indovinato ' + numGiusti.length + ' valori : ' + numGiusti);
       console.log(arrUtente)
      // if (!arrUtente.includes(numUtente)){ //se arrUtente non include numUtente push
      //    arrUtente.push(numUtente);
      //    if (rndArr.includes(numUtente)) {
      //       numUtente.push(numGiusti)
      //    } else if (numUtente == arrUtente[i]) {
      //      console.log('Numero già inserito');
      //    }
      // }
}}

function init() {

   var numeriDaScoprire = rndAlert(5);
   setTimeout(function() {

     valoriUtente(numeriDaScoprire);
   },2000);
   return ;
}

init();
