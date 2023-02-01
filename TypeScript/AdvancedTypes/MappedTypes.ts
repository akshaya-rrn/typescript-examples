type employeeWithOptional = {
    id: number,
    firstName?:string,
    lastName?:string,
}


let empExample: employeeWithOptional = {
    id : 5
}

//apply optional to all the properties to the type
type removeOptional<Type> = {
    [Property in keyof Type]-? : Type[Property]
}
type employee = removeOptional<employeeWithOptional>;

//map all the properties as readOnly
type makeReadOnly<Type> = {
    readonly [Property in keyof Type] : Type[Property]
}
type employeeReadOnly = makeReadOnly<employeeWithOptional>;
