var data = [
    {id: 1, address: "安徽", parent_id: 0},
    {id: 2, address: "江苏", parent_id: 0},
    {id: 3, address: "合肥", parent_id: 1},
    {id: 4, address: "庐阳区", parent_id: 3},
    {id: 5, address: "大杨镇", parent_id: 4},
    {id: 6, address: "南京", parent_id: 2},
    {id: 7, address: "玄武区", parent_id: 6},
    {id: 8, address: "梅园新村街道", parent_id: 7},
    {id: 9, address: "上海", parent_id: 0},
    {id: 10, address: "黄浦区", parent_id: 9},
    {id: 11, address: "外滩", parent_id: 10},
     {id: 123, address: "dasd外滩", parent_id: 10},
    {id: 12, address: "安庆", parent_id: 1}
];

// 根据id找到下面所有的子节点
function sonsTree(arr,id){
    var temp = [],lev=0;
    var forFn = function(arr, id, lev){
        for (var i = 0; i < arr.length; i++) {
            var item = arr[i];
            if (item.parent_id==id) {
                item.lev=lev;
                temp.push(item);
                forFn(arr,item.id,lev+1);
            }
        }
    };
    forFn(arr, id, lev);
    return temp;
}

function familyTree(arr, pid) {
    var temp = [];
    var forFn = function(arr, pid){
        for (var i = 0; i < arr.length; i++) {
            var item = arr[i];
            if (item.id == pid) {
                temp.push(item);
                forFn(arr,item.parent_id);
            }
        }
    };
    forFn(arr, pid);
    return temp;
}

var tree = sonsTree(data,10);
var family = familyTree(data,12)
console.log(tree)
// console.log(family)