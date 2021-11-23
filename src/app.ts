////Common example
console.log(Math.PI);

class MyClass {
    static x = 0;
    static printX() {
        console.log(this.x);
    }

    printY(){
        // console.log(this.x) //Error...access to static prop
        console.log(MyClass.x);
    }
}
console.log(MyClass.x);

//основная идея static, недоступность для instance, мы напрямую вызываем static у класса
MyClass.printX();

//если не static
const calc = new MyClass();
calc.printY();

///////////////static with private/protected/public
class MyNewClass {
    private static x = 0;

    printX(){
        console.log(MyNewClass.x);
    }
}
// console.log(MyNewClass.x); //Приватное статическое свойсто доступно теперь только внутри класса

////////////////наследование + static
class Base {
    static getGreeting() {
        return "Hello world";
    }
}
class Derived extends Base {
    myGreeting = Derived.getGreeting();
}

const d = new Derived();
console.log(d.myGreeting);