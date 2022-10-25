// *Snack1*
// Inserisci un numero, se è pari stampa il numero, se è dispari stampa il numero successivo 
// ( del numero inserito dall'utente: esempio se il numero dell'utente è 2, il numero successivo è 3  ).

let number = parseInt(prompt(`inserisci un numero`));
    
if(number % 2 == 0){
        
    document.getElementById('print').innerText = `${number}`;

}else{
    
    number = number + 1;
    document.getElementById('print').innerText = `${number}`;
}
