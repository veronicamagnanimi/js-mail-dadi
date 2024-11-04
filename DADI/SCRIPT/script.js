// NUMERI RANDOM
const firstNum = Math.floor(Math.random() * 6) + 1;
const secondNum = Math.floor(Math.random() * 6) + 1;
console.log(`Il punteggio del primo gicoatore è ${firstNum}`);
console.log(`Il punteggio del secondo giocatore è ${secondNum}`);

// ESECUZIONE LOGICA
if (firstNum > secondNum) {
    console.log("Vince il primo giocatore");
} else if (firstNum < secondNum) {
    console.log("Vince il secondo giocatore");
} else {
    console.log("Pareggio!");
}





