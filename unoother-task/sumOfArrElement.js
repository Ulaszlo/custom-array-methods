// найти сумму эл-ов массива
// 1 вариант
const arrNumbers = [1, 4, 3, 26, 77, 1, 2, 6]
let sum1= 0
for (let i = 0; i < arrNumbers.length; i++) {
    sum1 += arrNumbers[i]
}
// 2 вариант
const sum2 = arrNumbers.reduce((accum,next)=>accum+next,0)
// 3 вариант ( так же можно forEach заменит на map() )
let acc3=0
const sum3 = arrNumbers.forEach(el=>{
    acc3 +=el
})
