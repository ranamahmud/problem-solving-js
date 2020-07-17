// feetToMile
// woodCalculator
// brickCalculator
// tinyFriend

function feetToMile(feet) {
    let mile = feet / 5280;
    return mile;
}
let result1 = feetToMile(23);
console.log(result1);

function woodCalculator(chair, table, khat) {
    // chair = 1 cb feet
    // table = 3 cb feet
    // khat = 5 cb feet
    let totalWood = chair * 1 + table * 3 + khat * 5;
    return totalWood;
}
let result2 = woodCalculator(5,7,2);
console.log(result2);

function brickCalculator(floor) {
    // 0-10 = 15ft
    // 11-20 = 12ft
    // 20> = 10ft
    // 1 ft = 1000 bricks
    let totalFeet;
    if(floor <=10){
        totalFeet = floor * 15 ;
    }else if(floor >= 11 && floor <= 20){
        totalFeet =  (10 * 15 + (floor - 10) * 12) ;
    }else if(floor > 20){
        totalFeet =  (10 * 15 + 10*12 + (floor - 20) * 10) ;
    }
    let totalBricks = totalFeet * 1000;
    return totalBricks;
    
}

var result3 = brickCalculator(19);
console.log(result3);

function tinyFriend(friends) {
    var tiny = friends[0];
    for(var i = 1; i < friends.length; i++){
        var currentFriend = friends[i];
        if(currentFriend.length < tiny.length){
            tiny = currentFriend;
        }
    }
    return tiny;
}

var friends = ["a", "Nayeem","Taleb","Abdullah","Enamul","Bappi","Piku"];

var result4 = tinyFriend(friends);
console.log(result4);