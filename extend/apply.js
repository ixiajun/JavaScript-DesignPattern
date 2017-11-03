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

    parent.apply(this, arguments)  // 使用arguments来把所有的参数传递给被调用对象
    // parent.apply(this, [name, age, gender])
}

var XiaJun = new child('XiaJun', '21', 'male')
XiaJun.say() // XiaJun is 21 years old and the gender is male who come from china