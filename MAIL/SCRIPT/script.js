// ARRAY DI EMAIL
const email = ['veronica@hotmail.com', 'valentina@gmail.com', 'gabriella@gmail.com', 'renato@gmail.com', 'franco@gmail.com'];

//RICHIESTA ALL'UTENTE
const useremail = prompt("Qual'è la tua email?");
console.log(useremail);

//VERIFICA DELLA PRESENZA DELL'EMAIL
let isPresentEmail = false;

for(let i = 0; i <= email.length; i++) {
    const curEmail = email[i];

    if (useremail === curEmail) {
        isPresentEmail = true;
    }
}

// OUTPUT
 if (isPresentEmail) {
    console.log("Accesso consentio");
 } else {
    console.log("Accesso negato");
 }