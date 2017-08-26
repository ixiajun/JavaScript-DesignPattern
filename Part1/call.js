function Animal() {
    this.name = 'animal'

    this.sayName = function() {
        console.log(this.name)
    }
}

function People() {
    this.name = 'people'
}

let animal = new Animal()

let people = new People()
animal.sayName.call(people)  // 输出people