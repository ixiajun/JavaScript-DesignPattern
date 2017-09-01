function flatten(arr) {
    let temp = []
    var forfn = function(arr) {
        arr.forEach(i => {
            if(typeof i == 'object') {
                forfn(i)
            } else {
                temp.push(i)
            }
        }) 
    }
    forfn(arr)
    return temp
}

flatten([1, [2], [3, [['4']]]])   // [1,2,3,'4']
