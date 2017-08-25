/*
 created by xiajun at 2017-05-28
 多态
 */
var googleMap = {
  show () {
    console.log('开始渲染谷歌地图')
  }
}

var baiduMAp = {
  show () {
    console.log('开始渲染百度地图')
  }
}

var renderMap = function(type) {
  if (type === 'google') {
    googleMap.show()
  } else if(type === 'baidu') {
    baiduMAp.show()
  }
}

renderMap('google')
renderMap('baidu')
