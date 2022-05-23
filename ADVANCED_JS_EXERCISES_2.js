/** EXERCISE 1 **/

function recursiveCounter(from, to) {
  // Shows the current number
  console.log(from)
  // If the number is below the target number, calls recursively increasing the from by 1
  if(from < to) {
    recursiveCounter(from + 1, to)
  }
}
recursiveCounter(1,5);


/** EXERCISE 2 **/
function recursivePower(base, exponent) {
  // When exponent is 1, it should return the base
  if(exponent === 1) {
    return base
  }
  // Otherwise, call recursively to the function decreasing the exponent
  return base * recursivePower(base, exponent - 1)
}
console.log(recursivePower(2,4));
// BONUS: Here are two different ways to calculate a number raised to a power
console.log(2**4);
console.log(Math.pow(2,4));


/** EXERCISE 3 **/
// Defining the constructor
function Student(name, age, academicRecord) {
  this.name = name;
  this.age = age;
  this.academicRecord = academicRecord;
}
// Creating a variable with the academic record
const davidAcademicRecord = {
  maths: 100,
  literature: 90,
  science: 80
}
// Invoke constructor to get an object of the Student class
const david = new Student("David", 33, davidAcademicRecord)
console.log(david.name + " (" + david.age + ") has a grade of " + david.academicRecord.science + " in science")


/** EXERCISE 4 **/
// Defining Student2 constructor
function Student2(name, age, academicRecord) {
  this.name = name;
  this.age = age;
  this.academicRecord = academicRecord;
  // Apart of the given by parameter data, we define a function that is going to be useful in every Student2 object
  // because allows to print the information of the student and a certain subject in an easy way and avoiding duplicated code
  this.getGradeText = subjectName => {
    const subjectGrade = this.academicRecord[subjectName];
    if(subjectGrade !== undefined) {
      console.log(this.name + " (" + this.age + ") has a grade of " + subjectGrade + " in " + subjectName);
    } else {
      console.log("Subject name is not valid")
    }
  }
}
// Creating a variable with the academic record
const david2AcademicRecord = {
  maths: 95,
  literature: 85,
  science: 75
}
// Invoke constructor to create a Student2 class object
const david2 = new Student2("David", 33, davidAcademicRecord)
// Invoke the function defined in the constructor to print the grade for a subject
console.log(david2.getGradeText("science"))
