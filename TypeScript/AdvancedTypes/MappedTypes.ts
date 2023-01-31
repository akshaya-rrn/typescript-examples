type employeeWithOptional = {
    id: number,
    firstName?:string,
    lastName?:string,
}


let empExample: employeeWithOptional = {
    id : 5
}


type removeOptional<Type> = {
    [Property in keyof Type]-? : Type[Property]
}

type employee = removeOptional<employeeWithOptional>;
