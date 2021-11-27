const _ = require('lodash');

const myList = [
    'Water',
    'Coke',
    'Banana',
    'Cake',
    'Water',
    'Coke',
    'Chicken',
]

// const myNewArray = _.chunk(myList, 4) // used for split array

// const myNewArray = _.difference(myList, ['Water', 'Coke']) // used for not print common values

// const myNewArray = _.difference(myList, ['Water', 'Chicken']) // used for not print common values

// const myNewArray = _.join(myList, ' | ') // used for print symbol between two words

// const myNewArray = _.without(myList, 'Banana', 'Water')

// const myNewArray = _.uniq(myList)

const myNewArray = _.drop(myList,['Water']);

console.log(myNewArray);