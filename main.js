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

   /*  let copyUser = {... user}
    copyUser.name = "Alex"
    console.log (user)
    console.log (copyUser)
    copyUser.frends.push("Helga")
    console.log (user)

    let deepCopy = {...user , frends:[...user.frends]}

    const students = [
        {name: "Alex"},
        {name: "Bob"},
        {name: "Aria"},
        {name: "SaraRid"},

    ]

    let copySt = [...students] // poverxocthay copia
    const getCopyStudent = (st) => ({...st})

    let deepCopySt = students.map(getCopyStudent) // map - preobrazovat
 */

    const names = ["Artur", "Bob", "Vlad", "Bil"]
    console.log (names.sort())