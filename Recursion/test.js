let a = [
    {
        "id": "59951009322807007c0953e7",
        "pid": "false",
        "text": "大家电",
        "sortNumber": 0,
        "children": [
            {
                "id": "599535e688c297009f6de740",
                "pid": "59951009322807007c0953e7",
                "text": "洗衣机",
                "sortNumber": 0,
                "children": []
            }
        ]
    },
    {
        "id": "5996aac450b9f0024deae6d6",
        "pid": "false",
        "text": "珠宝/首饰",
        "sortNumber": 0,
        "children": [
            {
                "id": "5996aacb50b9f0024deae6d8",
                "pid": "5996aac450b9f0024deae6d6",
                "text": "手表",
                "sortNumber": 0,
                "children": []
            }
        ]
    },
    {
        "id": "5996afaa50b9f0024deae6da",
        "pid": "false",
        "text": "3C数码",
        "sortNumber": 0,
        "children": [
            {
                "id": "5996afb050b9f0024deae6dc",
                "pid": "5996afaa50b9f0024deae6da",
                "text": "手机",
                "sortNumber": 0,
                "children": [
                    {
                        "id": "5996afc350b9f0024deae6de",
                        "pid": "5996afb050b9f0024deae6dc",
                        "text": "智能机",
                        "sortNumber": 0,
                        "children": []
                    }
                ]
            },
            {
                "id": "5996b31050b9f0024deae6e0",
                "pid": "5996afaa50b9f0024deae6da",
                "text": "平板电脑/MID",
                "sortNumber": 0,
                "children": []
            }
        ]
    },
    {
        "id": "5936978a8dbf5a0a90e10abd",
        "pid": null,
        "text": "家电",
        "sortNumber": 0,
        "children": [
            {
                "id": "5936978a8dbf5a0a90e10abe",
                "pid": "5936978a8dbf5a0a90e10abd",
                "text": "大家电",
                "sortNumber": 0,
                "children": [
                    {
                        "id": "5936978a8dbf5a0a90e10abf",
                        "pid": "5936978a8dbf5a0a90e10abe",
                        "text": "电视",
                        "sortNumber": 0,
                        "children": []
                    },
                    {
                        "id": "5936978a8dbf5a0a90e10ac0",
                        "pid": "5936978a8dbf5a0a90e10abe",
                        "text": "空调",
                        "sortNumber": 0,
                        "children": []
                    },
                    {
                        "id": "5936978a8dbf5a0a90e10ac1",
                        "pid": "5936978a8dbf5a0a90e10abe",
                        "text": "冰箱",
                        "sortNumber": 0,
                        "children": []
                    },
                    {
                        "id": "5936978a8dbf5a0a90e10ac2",
                        "pid": "5936978a8dbf5a0a90e10abe",
                        "text": "洗衣机",
                        "sortNumber": 0,
                        "children": []
                    },
                    {
                        "id": "599c17df7d019d03790ca8e0",
                        "pid": "5936978a8dbf5a0a90e10abe",
                        "text": "电饭锅",
                        "sortNumber": 0,
                        "children": []
                    }
                ]
            }
        ]
    },
    {
        "id": "5987b0b48dbf5a05b4deb1a7",
        "pid": null,
        "text": "3c数码",
        "sortNumber": 0,
        "children": [
            {
                "id": "5936978a8dbf5a0a90e10ac3",
                "pid": "5987b0b48dbf5a05b4deb1a7",
                "text": "手机",
                "sortNumber": 0,
                "children": []
            },
            {
                "id": "599ac102e0d75517982bcf04",
                "pid": "5987b0b48dbf5a05b4deb1a7",
                "text": "手机贴膜",
                "sortNumber": 0,
                "children": []
            },
            {
                "id": "599ac13de0d75517982bdabd",
                "pid": "5987b0b48dbf5a05b4deb1a7",
                "text": "手机壳",
                "sortNumber": 0,
                "children": []
            },
            {
                "id": "599ac19de0d75517982bf0b0",
                "pid": "5987b0b48dbf5a05b4deb1a7",
                "text": "充电器",
                "sortNumber": 0,
                "children": []
            }
        ]
    }
]

// 将树结构转为普通json
function toJson(arr) {
    var temp = [];
    var forFn = function(arr){
        for (var i = 0; i < arr.length; i++) {
            if(!!arr[i].children.length) {
                temp.push(arr[i])
            } else {
                temp.push(arr[i])
            }
            forFn(arr[i].children)
        }
    };
    forFn(arr);
    return temp;
}

let json = toJson(a)
// console.log(json)

// 根据id找到所有父级id
function familyTree(arr, pid) {
    var temp = [];
    var forFn = function(arr, pid){
        for (var i = 0; i < arr.length; i++) {
            var item = arr[i];
            if (item.id == pid) {
                temp.push(item);
                forFn(arr,item.pid);
            }
        }
    };
    forFn(arr, pid);
    return temp;
}

let res = familyTree(json, '5936978a8dbf5a0a90e10abf') // 电视id
console.log(res)