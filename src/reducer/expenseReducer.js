export default  function expenseReducer  (state, action){
    switch(action.type){
        case "FILL":{
            return action.payload
        }
        case "DELETE":{
            return state.filter((_, index) => index !== action.payload)
        }
        case "EDIT":{
            const {ind, expense} = action.payload
            const updatedExpense = [...state]
            updatedExpense[ind] = expense;
            return updatedExpense
        }
        case "ADD":{
            const {expense} = action.payload
            const updatedExpense = [...state]
            updatedExpense.push(expense);
            return updatedExpense
        }
        default:{
            return state
        }
    }
}