function Animal(name, age) {
    this.name = name
    this.age = age
    this.sayName = function () {
        console.log(this.name)
    }
    this.sayAge = function () {
        console.log(this.age)
    }
}

function People(name, age) {
    Animal.call(this, name, age)
}

var cat = new People("夏君", "18");    
cat.sayName();    //夏君
cat.sayAge();     //18