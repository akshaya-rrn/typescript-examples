import {Employee} from "./IndexedType";
type employeeAge =  number | string;

 let myAge : employeeAge = 15;
myAge = "eighteen";

const findEmployeeAge = (age :string | number ) => {
    if(// @ts-ignore
    typeof age === 'number') {
        console.log(age + 12);
    }
}
    findEmployeeAge(19);

type nullAge = employeeAge | null;

let testNullAge: nullAge = null;


// Intersection
type Intern = {
    collegeName : string,
    tenure : number,
}

type InternEmployee = Employee & Intern;



let intern:InternEmployee = {
    collegeName: "",
    tenure: 4,
    firstName: "John",
    lastName: "Doe",
    id: 5,

}