var arrs = [];

    function haha(){
       var data = [
           {
               name: '中国',
               children: [
                   {
                       name: '教第三节课',

                   },
                   {
                       name: '教呼呼',
                       children: [
                           {
                               name: '大一',
                               children: [
                                   {
                                       name: '课程1',
                                       children: [
                                           {
                                               name: '1231'
                                           },
                                           {
                                               name: '121'
                                           }
                                       ]
                                   },
                                   {
                                       name: '课程2',
                                       children: [
                                           {
                                               name: '1232'
                                           },
                                           {
                                               name: '122'
                                           }
                                       ]
                                   },
                                   {
                                       name: '课程3',
                                       children: [
                                           {
                                               name: '1233'
                                           },
                                           {
                                               name: '123'
                                           }
                                       ]
                                   },

                               ]
                           }
                       ]
                   },
                   {
                       name: '活动',
                       children:null
                   }
               ]
           }
       ];
        getArray(data,'活动');
        for(var i in undefined){
            alert(123);
        }
    }

    function getArray(data,name)
    {
        for (var i in data) {
            if (data[i].name == name) {
                console.log(data[i]);
                break;
            } else {
                getArray(data[i].children, name);
            }
        }
    }

    haha()