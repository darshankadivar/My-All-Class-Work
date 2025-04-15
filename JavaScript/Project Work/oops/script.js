class parent {
    greet() {
        console.log("I am Parent");

    }
}

class child_1 extends parent {
    childgreet() {
        console.log("I'm the child one");

    }
}


class child_2 extends parent {
    childgreet() {
        console.log("I'm the child Two");

    }
}

let childone = new child_1();
let childtwo = new child_2();

childone.greet();
childone.childgreet();
childtwo.greet();
childtwo.childgreet();

class car {
    car() {
        console.log("This is Cars");
    }
}

class skoda extends car {
    skoda() {
        console.log("This is skoda");
    }
}

class virtus extends skoda {
    virtus() {
        console.log("This is virtus");

    }

}

let obj1 = new virtus();

obj1.car();
obj1.skoda();
obj1.virtus();

class animal {
    animal() {
        console.log("This is animal");
    }
}

class lion extends animal {
    lion() {
        console.log("This is lion");
    }
}

class cat extends lion {
    cat() {
        console.log("This is cat");
    }
}

let obj2 = new cat();
obj2.lion();
obj2.cat();
obj2.animal();