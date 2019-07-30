export const listor = (words:any[], oxford:boolean = true, comma:string = `,`, separator:string = `and`):string => {
  if (words.length === 1) return words[0].toString()
  else if (words.length === 2) return `${words[0]} ${separator} ${words[1]}`
  else {
    let sentence = ``
    for (let index = 0; index < words.length-1; index++) {
      sentence += `${words[index]}${index === words.length-2 ? ``:`${comma} `}`
    }
    sentence += `${oxford ? `${comma} ${separator} `: ` ${separator} `}${words[words.length-1]}`
    return sentence
  }
}
