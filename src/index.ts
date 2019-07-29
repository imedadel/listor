export const listor = (...args:any[]) => {
  if (args.length === 1) return args[0].toString()
  else if (args.length === 2) return args[0] + " and " + args[1]
  else {
    let sentence = ""
    for (let index = 0; index < args.length-1; index++) {
      sentence += args[index] + ", "
    }
    sentence += "and " + args[args.length-1]
    return sentence
  }
}
