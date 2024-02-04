// find max | min element in array
const arrNumbers = [1, 4, 3, 26, 77, 1, 2, 6]
// 1 вариант
let max
for(let i=0;i<arrNumbers.length;i++) {
   if(arrNumbers[i]<arrNumbers[i+1]) {
       max=arrNumbers[i]
   }
}
// 2 вариант
 let Max = arrNumbers[0]
    for(let i=0;i<arrNumbers.length;i++) {
        arrNumbers[i] > max? max=arrNumbers[i]:max
    }
// 3 вариант - Math.max()
for(let i=0;i<arrNumbers.length;i++) {
    max=Math.max(arrNumbers[i],max)
}
// также заданиие можно решить сортировкой - метод sort()
let sortedArray=arrNumbers.sort((x1,x2)=>x1-x2)
let max= sortedArray[sortedArray.length-1]