class Human {
    eat() {
        console.log("eating");
    }
    sleep() {
        console.log("sleeping");
    }
}

class SoftwareEngineer extends Human {
    code() {
        console.log("Coding");
    }
    buildSoftware() {
        console.log("Building Software");
    }
}

let mustafa = new SoftwareEngineer();
mustafa.code();
mustafa.eat();
mustafa.buildSoftware();
mustafa.sleep();