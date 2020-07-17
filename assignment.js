// feetToMile
// woodCalculator
// brickCalculator
// tinyFriend

function feetToMile(feet) {
    if (feet < 0) {
        return "Feet can't be negative";
    }
    let mile = feet / 5280;
    return mile;
}
let result1 = feetToMile(20);
console.log(result1);

function woodCalculator(chair, table, khat) {
    // chair = 1 cb feet
    // table = 3 cb feet
    // khat = 5 cb feet
    if (chair < 0) {
        return "Chair can't be negative";
    } else if (table < 0) {
        return "Table can't be negative";
    } else if (khat < 0) {
        return "Khat can't be negative";
    }
    // check for integer 
    if (Number.isInteger(chair) === false) {
        return "Chair number can't be fraction";
    } else if (Number.isInteger(table) === false) {
        return "Table number can't be fraction";
    } else if (Number.isInteger(khat) === false) {
        return "Khat number can't be fraction";
    }
    let totalWood = chair * 1 + table * 3 + khat * 5;
    return totalWood;
}
let result2 = woodCalculator(5, 7, 2);
console.log(result2);

function brickCalculator(floor) {
    // 0-10 = 15ft
    // 11-20 = 12ft
    // 20> = 10ft
    // 1 ft = 1000 bricks
    // check data type
    if (Number.isInteger(floor) == false) {
        return "floor number must be a integer."
    }

    let totalFeet;
    if (floor < 0) {
        return "Floor can't be negative";
    } else
        if (floor <= 10) {
            totalFeet = floor * 15;
        } else if (floor >= 11 && floor <= 20) {
            totalFeet = 10 * 15 + (floor - 10) * 12;
        } else if (floor > 20) {
            totalFeet = 10 * 15 + 10 * 12 + (floor - 20) * 10;
        }
    let totalBricks = totalFeet * 1000;
    return totalBricks;

}

var result3 = brickCalculator(19);
console.log(result3);

function tinyFriend(friends) {
    // check empty array
    if (friends.length == 0) {
        return "friends array can't be empty";
    }
    // check array type
    if (Array.isArray(friends) === false) {
        return "You must give an array";
    }
    var smallestFriendName = friends[0];
    for (var i = 1; i < friends.length; i++) {
        var currentFriend = friends[i];
        if (currentFriend.length < smallestFriendName.length) {
            smallestFriendName = currentFriend;
        }
    }
    return smallestFriendName;
}

var friends = ["abu", "Nayeem", "Taleb", "Abdullah", "Enamul", "Bappi", "Piku"];

var result4 = tinyFriend(friends);
console.log(result4);