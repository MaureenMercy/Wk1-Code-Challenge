function generateGrade() {
    // Prompt the user for input and convert it to a number
    let marks = parseFloat(prompt("Enter the student's marks (0-100):"));

    // Validate the input
    if (isNaN(marks) || marks < 0 || marks > 100) {
        return "Invalid input. Please enter a number between 0 and 100.";
    }

    // Determine the grade based on the marks
    if (marks > 79) {
        return "A";
    } else if (marks >= 60) {
        return "B";
    } else if (marks >= 50) {
        return "C";
    } else if (marks >= 40) {
        return "D";
    } else {
        return "E";
    }
}

// Call the function and log the result
console.log(generateGrade());

function generateGrade() {
    // Prompt the user for input and convert it to a number
    let marks = parseFloat(prompt("Enter the student's marks (0-100):"));

    // Validate the input
    if (isNaN(marks) || marks < 0 || marks > 100) {
        return "Invalid input. Please enter a number between 0 and 100.";
    }

    // Determine the grade based on the marks
    if (marks > 79) {
        return "A";
    } else if (marks >= 60) {
        return "B";
    } else if (marks >= 50) {
        return "C";
    } else if (marks >= 40) {
        return "D";
    } else {
        return "E";
    }
}

// Call the function and log the result
console.log(generateGrade());



