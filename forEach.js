let num_arr = [1, 2, 3],
    num_arr2 = [5, 1, 2, 3, 10],
    str_arr = ['colt', 'matt', 'tim', 'udemy'],
    str_arr2 = ['hi', 'goodbye', 'smile'],
    obj_arr = [{ name: 'Elie' }, { name: 'Tim' }, { name: 'Matt' }, { name: 'Colt' }],
    str = 'hmmm',
    str2 = 'I Am awesome and so are you',
    str3 = 'Elie';


/*
Write a function called doubleValues which accepts an array and returns a new array with all the values in the array passed to the function doubled

Examples:
    doubleValues([1,2,3]) // [2,4,6]
    doubleValues([5,1,2,3,10]) // [10,2,4,6,20]

*/
function doubleValues(arr) {
    return arr.map(ele => ele * 2);
}
console.log('Double: ' + doubleValues(num_arr));
console.log('Double: ' + doubleValues(num_arr2));
/*
Write a function called onlyEvenValues which accepts an array and returns a new array with only the even values in the array passed to the function

Examples:
    onlyEvenValues([1,2,3]) // [2]
    onlyEvenValues([5,1,2,3,10]) // [2,10]

*/
function onlyEvenValues(arr) {
    let temp = [];

    arr.forEach(ele => {
        if (ele % 2 === 0) {
            temp.push(ele);
        }
    });
    return temp;
}
console.log('Even: ' + onlyEvenValues(num_arr));
console.log('Even: ' + onlyEvenValues(num_arr2));
/*
Write a function called showFirstAndLast which accepts an array of strings and returns a new array with only the first and last character of each string.

Examples:
    showFirstAndLast(['colt','matt', 'tim', 'udemy']) // ["ct", "mt", "tm", "uy"]
    showFirstAndLast(['hi', 'goodbye', 'smile']) // ['hi', 'ge', 'se']

*/
function showFirstAndLast(arr) {
    return arr.map(ele => ele = ele[0] + ele[ele.length - 1]);
}
console.log('Fir/Las: ' + showFirstAndLast(str_arr));
console.log('Fir/Las: ' + showFirstAndLast(str_arr2));
/*
Write a function called addKeyAndValue which accepts an array of objects, a key, and a value and returns the array passed to the function with the new key and value added for each object 

Examples:
    addKeyAndValue([{name: 'Elie'}, {name: 'Tim'}, {name: 'Matt'}, {name: 'Colt'}], 'title', 'instructor') 
    
    // [{name: 'Elie', title:'instructor'}, {name: 'Tim', title:'instructor'}, {name: 'Matt', title:'instructor'}, {name: 'Colt', title:'instructor'}]

*/
function addKeyAndValue(arr, key, value) {
    arr.forEach(ele => ele[key] = value);
    return arr;
}
console.log(addKeyAndValue(obj_arr, 'title', 'instructor'));

/*
Write a function called vowelCount which accepts a string and returns an object with the keys as the vowel and the values as the number of times the vowel appears in the string. This function should be case insensitive so a lowercase letter and uppercase letter should count

Examples:
    vowelCount('Elie') // {e:2,i:1};
    vowelCount('Tim') // {i:1};
    vowelCount('Matt') // {a:1})
    vowelCount('hmmm') // {};
    vowelCount('I Am awesome and so are you') // {i: 1, a: 4, e: 3, o: 3, u: 1};
*/
function vowelCount(str) {
    let obj = {};
    str.split('').forEach(ele => {
        ele = ele.toLowerCase();
        if (/[aeiou]/.test(ele)) {
            if (obj[ele] > 0) {
                obj[ele] += 1;
            } else {
                obj[ele] = 1;
            }
        }
    });
    return obj;
}
console.log(vowelCount(str));
console.log(vowelCount(str2));
console.log(vowelCount(str3));