let str = '价格<i>实惠</i>，使用起来也很不错，开心的一次购物，值得购买'
let arr = ['实惠', '实惠', '价格', '实惠', '值得购买', '值得购买']

let arr2 = []
arr.forEach(i => {
    arr2.forEach(j => {
        if(i != j) {
            arr2.push(j)
            str = str.replace(`${i}`, `<i>$${i}</i>`)
        }
    })
})

console.log(str)