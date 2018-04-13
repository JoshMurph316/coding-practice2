const arr = [1, 2, 3, 4, 5, 6];
const strings = ['my', 'callback', 'example'];

function findIndex(arr, cb) {
    for (let i = 0; i < arr.length; i++) {
        if (cb(arr[i], i, arr)) {
            return i;
        }
    }
    return -1;
}
console.log(findIndex(arr, (num, index, arr) => {
    return num === 3;
}));
// #### Set Inverval
function countDown(num) {
    var timer = setInterval(() => {
        if (num === 0) {
            clearInterval(timer);
            console.log("Ring Ring Ring!!!");
        } else {
            console.log("Timer: " + num);
            num -= 1;
        }
    }, 1000);
}
countDown(3);