function checkSpeed(speed) {
    const speedLimit = 70;
    const kmPerPoint = 5;
    
    if (speed < speedLimit + kmPerPoint) {
        console.log("Ok");
        return;
    }
    
    const points = Math.floor((speed - speedLimit) / kmPerPoint);
    
    if (points >= 12) {
        console.log("License suspended");
    } else {
        console.log("Points: " + points);
    }
}

// Example usage:
checkSpeed(80);  // Output: Points: 2
checkSpeed(65);  // Output: Ok
checkSpeed(135); // Output: License suspended