class Employees {                                         
    constructor(listOfEmployees){                                         
        this.listOfEmployees = listOfEmployees;
    }
        cosortEmployees(attribute){
       const compare=(a,b) => {
           if(a[attribute]=== "number"){
               return a[attribute]-b[attribute];
           }
           else if(a[attribute]>b[attribute]){
               return 1;
           }
           else if(a[attribute]<b[attribute]){
               return -1;
           }
           else {
               return 0;
           }
       }


     }
    };
     let newArray = this.listOfEmployees.sort(compare);
     console.log(newArray);

     filterAge(age) 
         let newArray = [];
         newArray = this.listOfEmployees.filter((Employee)=>{
             return Employee.age < age;
         })
        

module.export = Employees;