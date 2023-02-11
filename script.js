/** @format */

let arr = [
  { id: 1, name: "john", age: "18", marks: 80 },
  { id: 2, name: "jack", age: "20", marks: 85 },
  { id: 3, name: "karen", age: "19", marks: 35 },
];

function PrintStudentswithMap() {
    //Write your code here , just console.log
    let result = arr.map((item)=>{
        if(item.marks>50){
            return item;
        }
    })
    console.log(result);
  }
  //PrintStudentswithMap()

  function PrintStudentsbyForEach() {
    //Write your code here , just console.log
    arr.forEach((item)=>{
      if(item.marks>50){
        console.log(item)
      }
    })
  }
 // PrintStudentsbyForEach()
  
  function addData() {
    //Write your code here, just console.log
    arr.push({id:4,name:"susan",age:"20",marks:45});
    console.log(arr)
  }
  //addData()
  
  function removeFailedStudent() {
    //Write your code here, just console.log
    let passedStudents = arr.filter((item)=>{
      if(item.marks>40){
        return item;
      }
    })
    console.log(passedStudents);
  }
  //removeFailedStudent()
  
  function concatenateArray() {
    //Write your code here, just console.log
    let arr1 = [{id:5,name:"sam",age:"17",marks:60}, {id:6, name:"jane",age:"20", marks:40}, {id:7, name:"gwen", age:"16",marks:55}];
    console.log(arr.concat(arr1));
  }
  //concatenateArray()
