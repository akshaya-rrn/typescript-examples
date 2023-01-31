// @ts-ignore
interface Employee  {
    id: number;
    firstName: string;
    lastName: string;
    jobDesc : {
        term : string;
        tenureInYears: number;
        active : boolean;
    }
}

interface ContractEmployee extends Employee {
    contractAgency : {
        name: string,
        tier: number,
    }
}

type Person = ContractEmployee extends Employee ? number : string;