// type script

// declare a variable with the type name to specify 

const logIn: string = 'Akinyemi';

let value:number = 20;

let define:boolean = true;

let gen:RegExp = /cool/;


// dereference array
const names:string[] = logIn.split('');



// Generic type of array

const myValue: Array<number > = [1,3,5,4,6,7];


// Object


// interface defined a type definition once
interface Phone {
    firstName: string;
    lastName: string;
}


const phoneDeal: Phone = {
    firstName: 'Akinyemi',
    lastName: 'Akinsanmi',
}


  
const object = {
    3: 'A',
    4: 'B',
    5: 'C'
}

object[6] = 'D';

// loop
for (let i = 0;  i< 10; i++) {
    
}



[2,4,6].map((v)=> console.log(v));



// function

 export const addString= (str1:string):string => `${str1}`;


 export const format = (title: string, param: string | number):string => `${title} ${param}`;



 export function getName(user: {first: string; last: string}): string {
    return `${user.first} ${user.last}`
 }



//  coordinate

interface Coordinate {
    x: number,
    y: number
}

function coordinateFromObject (obj: Coordinate): Coordinate{
    return{
        ...obj
    }
}

function coordinateFromNumber (x: number, y:number): Coordinate{
    return {
        x,
        y
    }
}


function printIngredient(quantity: string, ingredient: string, extra?: string){
    console.log(`${quantity} ${ingredient}`)
}


printIngredient("1C", "Flour");
printIngredient("1C", "Flour", "something more");