class AccDepartment {
    private lastReport: string;

    //обьяснить для чего геттеры нужны
    get mostRecentReport(){
        if(this.lastReport){
            return this.lastReport;
        }
        throw new Error('No report found');
    }

    //обьяснить для чего сеттеры нужны
    set mostRecentReport(value: string) {
        if(!value){
            throw new Error('Please pass in a valid value');
        }
        this.addReport(value);
    }

    constructor(private id: number, protected reports: string[]) {
        this.lastReport = reports[0];
    }

    addReport(text: string){
        this.reports.push(text);
        this.lastReport = text;
    }
}

const newAccDep = new AccDepartment(Date.now(), []);
// console.log(newAccDep.mostRecentReport); //Error
// newAccDep.mostRecentReport = ''; //Error
newAccDep.mostRecentReport = 'Year end Report';
newAccDep.addReport('some text report');
console.log(newAccDep.mostRecentReport)
console.log(newAccDep);