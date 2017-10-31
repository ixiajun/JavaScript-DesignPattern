function flatten(arr) {
    let temp = []
    var forfn = function(arr) {
        arr.forEach(i => {
            if(i instanceof Array) {
                forfn(i)
            } else {
                temp.push(i)
            }
        }) 
    }
    forfn(arr)
    return temp
}

console.log(flatten([1, [2], [3, [['4']]]]))   // [1,2,3,'4']
