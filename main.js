let user = {
    name: "Bob",
    age:22,
    isStudent: true,
    isMarried: false,
    frends: ["Fred", "Donald", "Anna"]
}

/*let user2 = user
user2.name = "Alex"
user2.refregirator = "beer"
console.log (user)*/

//let copyUser = {}
   // copyUser.name = user.name

    let copyUser = {... user}
    copyUser.name = "Alex"
    console.log (user)
    console.log (copyUser)
    copyUser.frends.push("Helga")
    console.log (user)

    let deepCopy = {...user , frends:[...user.frends]}