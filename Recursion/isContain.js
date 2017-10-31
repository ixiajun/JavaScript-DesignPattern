function isRepeat(arr){ 
    var hash = {}; 
    for(var i in arr) { 
    if(hash[arr[i]]) return true;
     
    hash[arr[i]] = true; 
    } 
    return false; 
}

let arr = [
    {
        id: 1
    },
    {
        id: 2
    },
    {
        id: 13
    }
]

console.log(isRepeat(arr))