class MyDepartment {
    private employees: string[] = [];

    constructor(private id: number, public name: string) {
    }

    describe(this: MyDepartment) {
        console.log(`my department ${this.id} : ${this.name}`)
    }

    addEmployee(employee: string) {
        this.employees.push(employee);
    }

    printInfo() {
        console.log(this.employees.length);
        console.log(this.employees);
    }
}

class MyITDepartment extends MyDepartment {
    constructor(id: number, private admins: string[]) {
        super(id, 'IT');
    }
}

class MyAccountingDepartment extends MyDepartment {
    constructor(id: number, private reports: string[]) {
        super(id, 'Accounting');
    }

    addReport(text: string) {
        this.reports.push(text);
    }

    printReports(){
        console.log(this.reports);
    }
}

/////IT
const newItDepartment = new MyITDepartment(Date.now(), ['Max']);
newItDepartment.addEmployee('Vik');
console.log(newItDepartment);

//////Accounting
const newAccDepartment = new MyAccountingDepartment(Date.now(), []);
newAccDepartment.addReport('Something went wrong...');
newAccDepartment.addEmployee('Alen');
newAccDepartment.printReports();
console.log(newAccDepartment);