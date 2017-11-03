function parent() {
    this.name = 'XiaJun'
    this.age = '21'
    this.gender = 'male'
    this.country = 'china'
    this.say = function () {
        console.log(this.name + ' is ' + this.age + ' years old and the gender is ' + this.gender + ' who come from ' + this.country)
    }
}

function child(name, age, gender) {
    this.feature = 'openning'
}

child.prototype = new parent()

var XiaJun = new child()
XiaJun.say() // XiaJun is 21 years old and the gender is male who come from china

