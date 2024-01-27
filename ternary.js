/**
 * TERNARY --> three parts
 * 
 * ?    :
 * 
 * condition ? do something when true : do something when false
 */

const age = 22;
// if(age >= 18) {
//     console.log('you can vote')
// }
// else {
//     console.log('Jao Baccha Ghumai thako')
// }

// simple ternary
// age >= 18 ? console.log('vote dio') : console.log('ghumai thako')

let price = 500;
const isLeader = true;

if(isLeader === true){
    price = 0;
}
else {
    price = price + 100;
}
// console.log(price)

price = isLeader === true ? 0 : price + 100;


// OPTIONAL: semi-advanced ternary

if(isLeader === true){
    if(price > 1000){
        price = price /2;
    }
    else {
        price = 0;
    }
}
else{
    price = price + 1000;
}


// Feel free to ignore this one
price = isLeader === true ? price > 1000 ? price /2 : 0 : price + 1000;