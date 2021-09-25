a./*	Print odd numbers in an array	*/

var a = [1,2,3,4,5,6,7,8,9,10];

var odd = function (arr) {
	var o = arr.filter((num) =>{
		return (num % 2 != 0);
	})
	return o;
}
console.log(odd(a));


b./* Convert all the strings to title caps in a string array */

let str = "Hello my name is mano.";
(function (s){
	let arr = s.split(" ");
	let str = "";
	for (let i in arr){
		str += arr[i].charAt(0).toUpperCase() + arr[i].slice(1) + " ";
	}
	console.log(str.trim());
})(str);


c./* Sum of all numbers in an array */

var a = [1,2,3,4,5,6,7,8,9,10];

let sum = function (arr){
	let s = arr.reduce((currentTotal, num) => {
		return currentTotal + num;
	});
	return s;
};

console.log(sum(a));


d./* Return all the prime numbers in an array */

let arr = [1,2,3,4,5,6,7,8,9,10];

(function (arr){
	let str = "";
	for (let i = 0; i < arr.length; i ++){
		let isPrime = true;
		if (arr[i] > 1){
			for (let j = 2; j <= Math.sqrt(arr[i]); j ++){
				if (arr[i] % j == 0){
					isPrime = false;
					break;
				}
			}
			if (isPrime){
				str += arr[i] + " ";
			}
		}
	}
	console.log(str.trim());
})(arr);

e./* Return all the palindromes in an array */

var s = ["akka", "amma", "mano", "ten", "oppo"]
var p = function (arr){
	let res = new Array();
	for (let k in arr){
		let pal = true;
		for (let i = 0, j = arr[k].length-1; i < arr[k].length/2; i ++, j --){
			if (arr[k][i] != arr[k][j]){
				pal = false;
				break;
			}
		}
		if (pal){
			res.push(arr[k]);
		}
	}
	return res;
}

console.log(p(s));

f./*
Return median of two sorted arrays of same size 
*/

var arr1 = [1,2,3,4,5,50,100,120];
var arr2 = [10,15,16,23,45,56,345];
let j = 0, k = 0;
let arr3 = new Array();

for (let i = 0; i < arr1.length+arr2.length; i ++){
	if (j == arr1.length){
		arr3.push(arr2[k++]);
	}
	else if (k == arr2.length){
		arr3.push(arr1[j++])
	}
	else if (arr1[j] <= arr2[k]){
		arr3.push(arr1[j++]);
	}
	else{
		arr3.push(arr2[k++]);
	}
}

console.log(arr3[Math.floor((arr1.length + arr2.length)/2)]);


g./* Remove duplicates from an array */

let arr = [1,1,1,2,3,4,44,4,55,55,5,5,55,5,6];

let map = new Array();
let len = arr.length;

for (let i = 0; i < len; i ++){
	if (!(map.includes(arr[i]))){
		map.push(arr[i]);

	}
}
console.log(map);

h./* Rotate an array by k times and return the rotated array */

var arr = [1,2,3,4,5,6,7,8];

let k = 4;

for (let i = 0; i < k; i ++){
	arr.splice(0, 0, arr[arr.length-1]);
	arr.splice(arr.length-1, 1);
}
console.log(arr);

