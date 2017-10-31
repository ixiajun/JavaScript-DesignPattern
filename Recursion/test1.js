let contentBody = '送货及时'
let keywords = ['送货']
let extractedWords = '送货-送货及时|'
const splitSymbolRegex = /[,.;:'!?，。；‘！？]/ig;

let splitExtractedWords = []
let strFlag = []

if(!!contentBody.match(splitSymbolRegex) && !!contentBody.match(splitSymbolRegex).length) {
    for(let i=0; i<contentBody.match(splitSymbolRegex).length; i++)
{
    strFlag[i]=contentBody.match(splitSymbolRegex)[i];
}
}

let contentArr = contentBody.split(splitSymbolRegex)

let resArr = []

extractedWords.split('|').forEach(j => {
    j.split('-').forEach(k => {
        if (!!k) {
            splitExtractedWords.push(k)
        }
    })
})
splitExtractedWords = Array.from(new Set(splitExtractedWords))


contentArr.forEach((content, index) => {
    keywords.forEach(keyword => {
        if(content.indexOf(keyword) >= 0) {
            content = content.replace(new RegExp(keyword, "g"), `<i class="blue">${keyword}</i>`)

            splitExtractedWords.forEach(extractedWords => {
                content = content.replace(new RegExp(extractedWords, "g"), `<i class="red">${extractedWords}</i>`)
            })
        }
    })
    if(!!content) resArr.push(content)
})

let strNew = ''
for(let i=0; i<resArr.length; i++)
{
    if(strFlag[i]!=null)
    {
        strNew += resArr[i]+strFlag[i];
    }
    else
    {
        strNew += resArr[i];
    }
     
}

console.log(strNew)

// if (!!i.extractedInfo) {
//                     let arr = i.extractedInfo.split('|')

//                     arr.forEach((i, index) => {
//                       let temp = i.split('_')
//                       temp.splice(4, 1)
//                       temp.splice(4, 1)
//                       temp = temp.join('_')
//                       arr[index] = temp
//                     })

//                     i.extractedInfo = arr
//                   }