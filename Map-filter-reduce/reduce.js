const pets = [
    {
        name: 'rex',
        type: 'dog',
        age: 10,
        weight: 30
    },
    {
        name: 'miau',
        type: 'cat',
        age: 2,
        weight: 2
    },
    {
        name: 'gulp',
        type: 'fish',
        age: 1,
        weight: 5
    },
    {
        name: 'caramelo',
        type: 'dog',
        age: 8,
        weight: 1
    },
    {
        name: 'pitico',
        type: 'bird',
        age: 1,
        weight: 0.01
    },
    {
        name: 'dourado',
        type: 'fish',
        age: 2,
        weight: 0.01
    }
]
/*
const totalWeight = pets.reduce((total, pet)=>{
    return total+pet.weight
}, 0) 

//Retorno de objeto
const totalWeight = pets.reduce((total, pet)=>{
    return {
        totalAge: total.totalAge + pet.age,
        totalWeight: total.totalWeight + pet.weight
    }
}, {totalAge: 0, totalWeight: 0})
console.log(`${totalWeight.totalAge}`)
console.log(`${totalWeight.totalWeight.toFixed(1)}`)


 */
//Utilizando filter e map ao mesmo tempo com reduce

/* const totalWeight = pets.reduce((total, pet)=>{
    if (pet.type !== 'dog') return total
        return total+pet.weight
}, 0)
console.log(totalWeight) */
const totalWeightDogs =  pets
.filter((pet) =>{
    return pet.type === 'dog'
})
.reduce((total, pet)=>{
    return total+pet.weight
}, 0)

console.log(totalWeightDogs)

