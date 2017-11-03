function parent(name, age, gender) {
    this.name = name
    this.age = age
    this.gender = gender
    this.country = 'china'
    this.say = function () {
        console.log(this.name + ' is ' + this.age + ' years old and the gender is ' + this.gender + ' who come from ' + this.country)
    }
}

function child(name, age, gender) {
    this.feature = 'openning'
    parent.call(this, name, age, gender)
}

var XiaJun = new child('XiaJun', '21', 'male')
XiaJun.say() // XiaJun is 21 years old and the gender is male who come from china

function greet() {
    var reply = [this.person, 'Is An Awesome', this.role].join(' ')
    console.log(reply)
}

var option = {
    person: 'XiaJun',
    role: 'Javascript Developer'
}

greet.apply(option) // XiaJun Is An Awesome Javascript Developer

