// @ts-ignore
export type Employee = {
    id: number;
    firstName: string,
    lastName: string,
    jobDesc ?: {
        term : string,
        tenureInYears: number,
        active : boolean,
    }
};

type empId = Employee["id"];
type empName = Employee["firstName"] | Employee["lastName"];



let jobDesc_Employee: Employee["jobDesc"] = {
    term : "Permanent",
    tenureInYears:5,
    active:true,
}
