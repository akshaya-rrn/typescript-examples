type TCylinder =  {
    width : number;
    height: number;
}
const typeCylinder : TCylinder = {
    width:67,
    height: 98,
    //weight  : 100,
}

interface ICylinder {
    width : number;
    height: number;
}

interface ICylinder {
    weight: number
}

//The interface can be augmented but the type cant.
// This is also known as declaration merging,
const iCylinder : ICylinder = {
    width:67,
    height: 98,
    weight  : 100,
}


// type can use union operator :
type CustomType = { x: number};
type CustomType2 = { x: number};
type CustomType3 = CustomType | CustomType2;

