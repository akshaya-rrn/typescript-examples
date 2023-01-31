interface Square {
    width: number;
}

interface Rectangle extends Square {
    height : number
}


// Explains keyOf Operator
type RectangleProperty = keyof Rectangle;
function findProperty(rectangleObj: Rectangle, property: keyof Rectangle) {
    console.log(`Pringintg property ${property} : ${rectangleObj[property]}`)
}

type  Shape = Square | Rectangle;
const s : Square | Rectangle = {
    width : 10,
    height: 20,
}

findProperty(s, "width");

//@ts-check
function calculateArea(shape : Square | Rectangle)  {
    // @ts-ignore
    if (shape instanceof Square) {
        console.log("Square..");
        return shape.width * shape.width;
    }
    // else { // @ts-ignore
    //     if( shape instanceof  Rectangle) {
    //             console.log("Rectangle");
    //             return shape.height * shape.width;
    //         }
    // }
}