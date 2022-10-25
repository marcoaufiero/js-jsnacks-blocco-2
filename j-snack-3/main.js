// *Snack3*
// Crea un array di numeri interi e fai la somma di tutti gli elementi che sono in posizione (indice) dispari

let numbers = [0,1,2,3,4,5,6,7,8,9];

let oddNumbers = [];

for(i = 0; i < numbers.length; i++){

    if(i % 2 != 0){
        oddNumbers.push(numbers[i])
    } 
    
}

console.log(oddNumbers)