

let date = new Date()

let year = date.getFullYear()
let month = date.getMonth() + 1
let day = date.getDate()
let dateFormat = `${date.getDate()}-${date.getMonth() + 1}-${date.getFullYear()}`

console.log(year)
console.log(month)
console.log(day)
console.log(dateFormat)