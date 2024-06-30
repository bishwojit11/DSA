function reverseArray(arr){
    let reverseArray = []
    for(let i = arr.length-1; i >=0; i--){
        reverseArray.push(arr[i])
    }
    return reverseArray
}

console.log(...reverseArray([1,2,3,4,5,6]))

const array = [1,2,3,4,5,6]

function reverseArray(arr){
    let reverse_array = arr.slice().reverse();
    return reverse_array
}
console.log(reverseArray(array))