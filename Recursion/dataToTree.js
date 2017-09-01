var data = [
    {id:1,title:'a',pid:false},
    {id:123,title:'a',pid:false},
    {id:2,title:'a1',pid:1},
    {id:3,title:'a11',pid:2},
    {id:4,title:'a12',pid:2},
    {id:5,title:'a2',pid:1},
    {id:6,title:'a21',pid:5}
];

// 根据pid找到父级生成树结构数据
function fn(data,pid){
    var result = [] , temp;
    for(var i = 0;i < data.length; i++) {
        if(data[i].pid==pid){
            result.push(data[i]);
            temp = fn(data,data[i].id);           
            if(temp.length>0){
                data[i].children=temp;
            }           
        }       
    }
    return result;
}
console.log(fn(data , 0));