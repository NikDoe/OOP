class Human {
    //обьяснить про protected, и отличие от private
    protected employees: string[] = [];

    constructor(private id: number, protected type: string) {
    }

    sayHi(this: Human) {
        console.log(`привет я ${this.type}`);
    }

    addEmployee(employee: string) {
        this.employees.push(employee);
    }
}

class IOSDeveloper extends Human {
    constructor(id: number) {
        super(id, 'IOS разработчик');
    }

    sayHi() {
        console.log(`привет я ${this.type}`)
    }

    addEmployee(name:string) {
        if(name === 'Alice') {
            return;
        }
        this.employees.push(name);
    }
}

/////Human instance
const newHuman = new Human(Date.now(), 'Человек');
newHuman.sayHi();
newHuman.addEmployee('Alice');
console.log(newHuman);

/////IOS instance
const newIOSDeveloper =  new IOSDeveloper(Date.now())
newIOSDeveloper.sayHi();
newIOSDeveloper.addEmployee('Alice');
newIOSDeveloper.addEmployee('Andrew');
console.log(newIOSDeveloper);