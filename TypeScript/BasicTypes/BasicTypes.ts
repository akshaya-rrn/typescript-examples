let testNum: number = 12;
let testString = " Hello WOrld";

let employee : [number, string ] = [1, "JohnDoe"];
let employeeSet : [number, string ][] = [];
employeeSet.push([1, " Janes"]);


enum EmployeeType {
    Contract,
    Permanent = 1,
    Intern,
}


function errorMessage(message: string): never {
    throw new Error(message);
}


let anyVariable: any = "Im a flexible datatype";
let testStr: string = (anyVariable as string);