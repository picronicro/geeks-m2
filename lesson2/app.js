var inn = "10810100107800"
var firstNum = Number(inn[0])

if ((firstNum === 1 || firstNum === 2 || firstNum === 0) && inn.length === 14) {
    console.log("ИНН найден")
} else {
    console.log("ИНН не найден")
}

var day = ""

switch (new Date().getDay()) {
    case 1:
        day = "понедельник"
        break
    case 2:
        day = "вторник"
        break
    case 3:
        day = "среда"
        break
    case 4:
        day = "четверг"
        break
    case 5:
        day = "пятница"
        break
    case 6:
        day = "суббота"
        break
    case 7:
        day = "воскресенье"
        break
    default:
        console.error("ошибка")
        break
}

console.log(day)

var newObject = {
    nickname: "picro",
    age: 15,
    male: true,
    mainLang: "java",
    meta: {
        noMeta: false
    }
}

newObject.doesLikeGames = false
newObject["doesLikeGames"] = true
newObject["meta"]["noMeta"] = true
console.log(newObject)
