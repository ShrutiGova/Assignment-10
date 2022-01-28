const Employees = require('./Employee');
const listOfEmployees = [
    {
        fName: "Shruti Gova",
        email: "abdc@gmail.com",
        age: 20,
        address: "Shajapur",
        id: 1111,
        phoneNumber: "1234567890",
        gender: "Female",
        isMarried: false
    },
    {
        fName: "Sanjay",
        email: "abcd@gmail.com",
        age: 60,
        address: "Shajapur",
        id: 1212,
        phoneNumber: "1234567890",
        gender: "Male",
        isMarried: true
    },
    {
        fName: "Rahul",
        email: "abcd@gmail.com",
        age: 70,
        address: "Shajapur",
        id: 1323,
        phoneNumber: "1234567890",
        gender: "Male",
        isMarried: false
    }

]
 const obj = new Employee(employeeArray);
 let sortArray = obj.sortEmployees("name");
 console.log(sortArray);

 const filterArray = obj.filterByAge(40);
 console.log(filterArray);