const Day = require('./dayModule')

const morning = new Day(3)
const morning2 = new Day(6)
const afternoon = new Day(7)
const afternoon2 = new Day(14)
const evening = new Day(21)
const stringed = new Day(13)
const errored = new Day("Oops")


console.log(morning.display(morning))
console.log(morning2.display(morning2))
console.log(afternoon.display(afternoon))
console.log(afternoon2.display(afternoon2))
console.log(evening.display(evening))
console.log(stringed.display(stringed))
console.log(errored.display(errored))