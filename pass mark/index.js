const passedStudents = () => {
     names = [{name:" Lindokuhle", surname: "Mazibuko", marks: 90},
        {name: "Sihle", surname: "Adams", marks: 100},
        {name: "Rafael", surname: "Mpofu", marks: 99},
        {name: "Hope", surname: "Tlelima", marks: 34},
        {name: "Sizwe", surname: "Zwane", marks: 49}];

         emptyArray = [];
        for (names of names){
            if(names.marks >= 50){

            emptyArray.push(names.marks)
        }
        }
    
        return emptyArray;
}

console.log(passedStudents())

// function passedStudents1() {
//     students = [{name: 'Bob',marks: 78,},{name: 'Alin',marks: 8,},{name: 'bikash',marks: 82,}];
//      passed = []
 
//      for (student of students){
//          if(student.marks >= 50){
//              passed.push(student.marks)
//          }
//      }
//  return passed
//    };
//  console.log(passedStudents1())
 