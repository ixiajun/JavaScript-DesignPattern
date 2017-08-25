var duck = {
  duckSinging () {
    console.log('嘎嘎嘎');
  }
}

var chicken = {
  duckSinging () {
    console.log('嘎嘎嘎')
  }
}
var choir = [];   //合唱团

var joinChoir = function(animal) {
  if(animal && typeof animal.duckSinging === 'function') {
    choir.push(animal)
    console.log('恭喜加入合唱团')
    console.log('合唱团以有人数:' + choir.length)
  }
}

joinChoir(duck)
joinChoir(chicken)
