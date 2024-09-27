function studentGrade(score) {
    let grade;
    switch (true) {
        case (score < 25):
        grade = 'D';
        break;
    case (score >= 25 && score <= 50):
        grade = 'C';
        break;
    case (score > 50 && score <= 75):
        grade = 'B';
        break;
    case (score > 75 && score <= 100):
        grade = 'A';
        break;
    default:
        console.log(score + " is not in the range");
    return;
    }
    console.log("Student Grade is " + grade);
    
}
    // Call the function to print grade
    studentGrade(49);