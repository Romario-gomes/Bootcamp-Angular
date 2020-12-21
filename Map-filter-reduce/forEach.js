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

const forEachPetAge = []

pets.forEach((pet) =>{
    forEachPetAge.push(pet.type)
})
console.log(pets)
console.log(forEachPetAge)