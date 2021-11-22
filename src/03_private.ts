class ITDepartment {
    name: string;
    private employees: string[] = [];

    constructor(n: string) {
        this.name = n;
    }

    describe(this: ITDepartment) {
        console.log(`name - ${this.name}`);
    }

    addNewEmployee(employee: string) {
        this.employees.push(employee);
    }

    employeesInfo(){
        console.log(this.employees.length);
        console.log(this.employees);
    }
}

const newIt = new ITDepartment('IT');
console.log(newIt);
newIt.describe();

newIt.addNewEmployee('Nik Doe');

//рассказать про модификаторы: приватный, публичный
// newIt.employees[1] = 'Max'; //ERROR - private модификтаор
newIt.name = 'DUMMY';
newIt.describe();

newIt.employeesInfo();