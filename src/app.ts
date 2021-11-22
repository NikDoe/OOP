class Account {
    readonly id: number;

    constructor(id: number) {
        this.id = id;
    }

    describeAccount(){
        // this.id = 'id2'; //ERROR - readonly модификтар
        //обьяснить разницу межу readonly и private
        console.log(`id: ${this.id}`);
    }
}

const acc = new Account(Date.now());
console.log(acc);
acc.describeAccount();