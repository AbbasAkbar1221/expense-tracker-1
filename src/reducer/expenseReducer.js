const generateId = (expense) =>{
    const maxId = expense.reduce((acc, curr)=>{
        return Math.max(acc, curr.id)
    }, -1)
    return maxId+1;
}

export default  function expenseReducer  (state, action){
    switch(action.type){
        case "FILL":{
            return action.payload
        }
        case "DELETE":{
            const {id} = action.payload
            return state.filter((ele) => ele.id !== id)
        }
        case "EDIT":{
            const {id, expense} = action.payload
            const updatedExpense = [...state]
            const ind = updatedExpense.findIndex(ele => ele.id === id)
            updatedExpense[ind] = {
                ...expense,
                id,
            };
            return updatedExpense
        }
        case "ADD":{
            const {expense} = action.payload
            const updatedExpense = [...state]
            updatedExpense.push({
                ...expense,
                id: generateId(updatedExpense),
            });
            return updatedExpense
        }
        default:{
            return state
        }
    }
}