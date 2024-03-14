const sum = (arr) => {
    let result = 0;
    arr.forEach((num) => {
        result += num
    })
    return result
}
const diff = (arr) => {
    let result = 0;
    arr.forEach((num) => {
        result -= num
    })
    return result
}
const multiply = (arr) => {
    let result = 0;
    arr.forEach((num) => {
        result =  num * num
    })
    return result
}
const divide = (num1, num2) => num1 / num2
const modulo = (num1, num2) => num1 % num2

module.exports = {sum, diff ,multiply, divide, modulo}