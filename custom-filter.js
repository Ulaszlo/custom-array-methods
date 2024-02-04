export const initialState = [
    {name:'Rosa',age:21,isMarried:false, country:'Russia'},
    {name:'Victor',age:14,isMarried:false, country:'USA'},
    {name:'Eva',age:45,isMarried:true, country:'KNR'},
    {name:'Max',age:21,isMarried:false, country:'Russia'},
    {name:'Kirill',age:35,isMarried:true, country:'Russia'},
    {name:'Fred',age:27,isMarried:false, country:'Russia'},
    {name:'Inga',age:21,isMarried:false, country:'Russia'},
]
// фильтрация без метода массива filter()
    const filteredArray=[]
     for (let i=0; i<initialState.length;i++) {
            //условие фильтрации
        if (initialState[i].age>=18) {
            filteredArray.push(initialState[i])
        }
    }