function largestElement(numbers){
    let largest = 0;
    for(let i = 0; i < numbers.length; i++){
        let element = numbers[i];
        if(element > largest ){
            largest = element;
        }
    }
    return largest;
}
var ages = [12, 15, 45, 51, 19, 21, 54, 64, 26];
var oldest = largestElement(ages);
console.log(oldest);



// how to get largest number
function largestNumber(numbers){
    var largest = 0;
    for(i=0;i<numbers.length;i++){
        var number = numbers[i];
        if (number > largest){
            largest = number;
        }
    }
    return largest;
}
var myNumbers = [54, 57, 12, 32, 14, 33, 18, 68, 104, 95, 74, 87, 99, 98, 92, 100, 50];
var larger = largestNumber(myNumbers);
console.log(larger);


function smallestElement(numbers){
    var smallest = numbers[0];
    for(i = 0; i < numbers.length; i++){
        var number = numbers[i];
    if(number < smallest){
        smallest = number;
    }
    }
    return smallest;

}

var myNumbers = [14, 8, 12, 52, 74, 54, 6, 62, 25, 42];
var small = smallestElement(myNumbers);
console.log(small);