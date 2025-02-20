export abstract class Quadrangle {
    public a = 0;
    public b = 0;
    public c = 0;
    public d = 0;

    public constructor( a: number, b: number, c: number, d: number){
       this.a = a;
       this.b = b;
       this.c = c;
       this.d = d;
    }

    public calcPerimeter(): number {
        return this.a + this.b + this.c + this.d;
    }

    public abstract calcSquare(): number;
}

export class Square extends Quadrangle {
    public constructor(a: number){
        super(a, a, a, a);
    }
    public calcSquare(): number {
        return this.a * this.a;
    }
}

export class Rectanle extends Quadrangle {
    public constructor(a: number, b: number){
        super(a, b, a, b);
    }
    public calcSquare(): number {
        return this.a * this.b;
    }
}

const square = new Square(4);
const rectanle = new Rectanle(4, 6);
console.log(square.calcPerimeter());
console.log(square.calcSquare());

function outSide(obj: Quadrangle): string{
    return `side are ${obj.a}, ${obj.b}, ${obj.c}, ${obj.d} with Perimeter ${obj.calcPerimeter()} and square ${obj.calcSquare()}`;

}

console.log(outSide(square));
console.log(outSide(rectanle));