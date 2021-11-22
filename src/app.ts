class Person {
    name: string;
    constructor(n: string) {
        this.name = n;
    }

    describe(this: Person) {
        console.log(`name - ${this.name}`);
    }
}

const person = new Person('Nik Doe');
console.log(person);
person.describe();

////////ПОЧЕМУ ЗДЕСЬ БУДЕТ ОШИБКА?
// const personCopy = {describe: person.describe}
// personCopy.describe();