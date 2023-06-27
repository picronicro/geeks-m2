var users = [
    {name: "Olya", age: 12},
    {name: "Olivia", age: 22},
    {name: "Oleksey", age: 32},
    {name: "Adam", age: 24}
]

var person = users.filter(user => user.name.toLowerCase().includes("l"))
console.log(person)