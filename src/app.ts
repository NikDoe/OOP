class Department {
    name: string;
    constructor(n: string) {
        this.name = n;
    }
}

const it = new Department('IT');
console.log(it);

//////////short version

// class Department {
//     constructor(public name: string) {}
// }
//
// const it = new Department('IT_DEV');
// console.log(it);