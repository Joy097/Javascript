// unique values

const sets = new Set();
sets.add(1)
sets.add(2)
sets.add(3)
sets.add(3)
console.log(sets)

x=''
sets.forEach(function(value) {
    x+=value
})
console.log(x)