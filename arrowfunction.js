// a.Print odd numbers in an array

const arr=[1,2,3,4,5,6,7,8,9,10,11];
console.log(arr.filter((num)=>{ 
   return num % 2 != 0    
    }));


// b.Convert all the strings to title caps in a string array

let stringArray = ["hi", "my", "name", "is", "mano"]

stringArray = stringArray.map((item) => {

    return item.toUpperCase()

})

// c.Sum of all numbers in an array

let Numarr = [1,2,3,4,5,6,7,8]
let sum = Numarr.reduce((a, b)=> a+b,0);
console.log(sum);


// d. Return all the prime numbers in an array

console.log("Prime Number is Array are: " +
    numberArray.filter((item) => {

        for (let i = 2; i < item; i++) {
            if (item % i === 0)
                return false;
        }
        return item !== 1;

    }));

// e.Return all the palindromes in an array 

let arrayPallindrome = [ "mano", 102, 612, 776, 707, 121]

console.log("Pallindrome Numbers in array are: " +
    arrayPallindrome.filter((item) => {

        let temp = item + "";

        if (temp.split('').reverse().join('') === item + "")
            return true

        return false

    }))
