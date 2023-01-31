class Employee {
    private _Id: number | undefined;
    private _Name : string | undefined;


    get Id(): number {
        return <number>this._Id;
    }

    set Id(value: number) {
        this._Id = value;
    }


    get Name(): string {
        return <string>this._Name;
    }

    set Name(value: string) {
        this._Name = value;
    }
}