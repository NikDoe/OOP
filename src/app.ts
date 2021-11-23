abstract class Figure {
    abstract getArea(): void;
}

class Rectangle extends Figure{

    constructor(public width: number, public height: number){
        super();
    }

    getArea(): void{
        let square = this.width * this.height;
        console.log("площадь =", square);
    }
}

const someFigure = new Rectangle(20, 30)
someFigure.getArea();