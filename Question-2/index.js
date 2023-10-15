//2.convert the UML diagram to typescript class 

class circle {
    constructor(radius = 0, color = "red") {

        this.radius = radius
        this.color = color

    }

    tostring (radius = this.radius) {

        this.radius = this.radius;

        return `to string ${(this.radius).toString()+ (this.color).toString()}`
    }

    circle(){

        return `color is ${this.color} and radius is ${this.radius}`;
    }

    circle(radius) {
        this.radius = radius
        return `radius is ${this.radius}`;
        
    }

    circle(radius,color){
        this.radius = radius;
        this.color = color;

        return`the radius is ${this.radius} and color is ${this.color}`
    }

    setradius (radius = 1.0) {
        this.radius = radius
    }

    getradius () {
        return `the radus of get and set is ${this.radius}`;
    }

    setcolor (color ="red") {
        this.color = color
    }

    getcolor () {
        return `the color of get and set is ${this.color}`;
    }

    getArea() {
        return `Area is ${(this.radius)*(this.radius)*4}`;
    }

    getcircumferenc() {
        return `the circumference is ${(this.radius)+(Math.PI)}`;
    }
}


let circle1 = new circle(10, "White");

console.log(circle1);

console.log(circle1.circle());

console.log(circle1.circle(5));

console.log(circle1.circle(4, "white"));

console.log(circle1.getradius());

circle1.setcolor();

console.log(circle1.getcolor());

console.log(circle1.tostring(10));

circle1.setradius();

console.log(circle1.getArea());

console.log(circle1.getcircumferenc());