let firstGroup = ['a','b','c','d','e'];
let secondGroup = ['a','b'];


if(firstGroup.length > secondGroup.length){

    let difference = firstGroup.length - secondGroup.length;
    
    for(i=0; i < difference ; i++){
        secondGroup.push('element');
        console.log(i)
    }
    

}else if( firstGroup.length < secondGroup.length){

    let difference = secondGroup.length - firstGroup.length;

    for(i=0; i < difference; i++){
         firstGroup.push('element');
         console.log(secondGroup[i]);
    }
    console.log('else if')

}else{
    console.log('I due array hanno lo stesso numero di elementi')
}

console.log(firstGroup);
console.log(secondGroup);