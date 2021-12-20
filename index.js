// Code your solution here

// challenge 1
function findMatching(drivers, args) {
    return drivers.filter(d => d.toLowerCase() === args.toLowerCase())
};

// challenge 2
function fuzzyMatch(drivers, letter) {
    // return drivers.filter(d => d.charAt().toLowerCase() === letter.toLowerCase())
    return drivers.filter(d => d.toLowerCase().indexOf(letter.toLowerCase()) === 0 )
};

// challenge 3
function matchName(drivers, args) {
    return drivers.filter(d => d.name === args)
};