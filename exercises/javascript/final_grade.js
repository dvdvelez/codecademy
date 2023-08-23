//Below is CodeCademy's solution to the evercise
const finalGrade = (midterm, final, homework) => {
    if ((midterm < 0 || midterm > 100) || (final < 0 || final > 100) || (homework < 0 || homework > 100)) {
        return 'You have entered an invalid grade.'
    }
    let average = (midterm + final + homework) / 3
    if (average < 60) {
        return 'F'
    }
    else if (average < 70) {
        return 'D'
    }
    else if (average < 80) {
        return 'C'
    }
    else if (average < 90) {
        return 'B'
    } else {
        return 'A'
    }
}

// Uncomment the line below when you're ready to try out your function
console.log(finalGrade(97, 90, 80))

/*
//CodeCademy's solution as a function declaration:
function finalGrade(midterm, final, homework) {
    if ((midterm < 0 || midterm > 100) || (final < 0 || final > 100) || (homework < 0 || homework > 100)) {
        return 'You have entered an invalid grade.'
    }
    let average = (midterm + final + homework) / 3
    if (average < 60) {
        return 'F'
    }
    else if (average < 70) {
        return 'D'
    }
    else if (average < 80) {
        return 'C'
    }
    else if (average < 90) {
        return 'B'
    } else {
        return 'A'
    }
}
*/

/*
//My solution to the exercise
const finalGrade = (grade1, grade2, grade3) => {
  let addGrades = grade1 + grade2 + grade3;
  let gradeAverage = Math.round(addGrades / 3);

  console.log(`Your grade average is ${gradeAverage}.`);
  if (gradeAverage >= 0 && gradeAverage <= 59) {
    return 'Your final grade is: F';
  } else if (gradeAverage >= 60 && gradeAverage <= 69) {
    return 'Your final grade is: D';
  } else if (gradeAverage >= 70 && gradeAverage <= 79) {
    return 'Your final grade is: C';
  } else if (gradeAverage >= 80 && gradeAverage <= 89) {
    return 'Your final grade is: B';
  } else if (gradeAverage >= 90 && gradeAverage <= 100) {
    return 'Your final grade is: A';
  } else {
    return 'You have entered an invalid grade.';
  }
};
*/

