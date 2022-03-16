var business = 450;
var minister = 350;
var army = 600;

// konta boro check korar first way
if(business > minister){
    console.log("business man er bata boro");
}
else{
    console.log("minister er bata boro");
}

//konta boro check korar second way (same)
if(business > minister && business > army){
    console.log("business is bigger");
}
else if(minister > business && minister > army){
    console.log("minister is bigger");
}
else{
    console.log("army is bigger");
}

/*konta boro seta ber korar third way tobe akhane shudhu value ta bole debe */
var max = Math.max(business, minister, army);
console.log(max);


function largeNumber(first, second){
    if(first > second){
        return first;
    }
    else{
        return second;
    }
}

var largest = largeNumber(54, 45);
console.log(largest);

function smallNumber(third, fourth){
    if(third < fourth){
        return third;
    }
    else{
        return fourth;
    }
}

var smallest = smallNumber(54, 45);
console.log(smallest);