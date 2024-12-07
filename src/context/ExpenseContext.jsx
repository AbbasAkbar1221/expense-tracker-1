import React, { useState, useEffect, useReducer } from 'react'
import { createContext, useContext } from 'react'
import { getExpensesFromBackend, setExpensesInBackend } from '../service/localStorage'
import expenseReducer from '../reducer/expenseReducer'




const expenseContext = createContext()


export const ExpenseProvider = ({children})=>{
    const [expense, dispatch] = useReducer(expenseReducer, [])
    const [editIndex, setEditIndex] = useState(-1);

    useEffect(() => {
        getExpensesFromBackend().then(expensesVal => dispatch({
            type:"FILL",
            payload:expensesVal
        }))
      }, [])
    
      useEffect(() => {
        setExpensesInBackend(expense).then(() => console.log("Saved Successfully!") )
      }, [expense])

    return(
        <expenseContext.Provider value={{expense, dispatch, editIndex, setEditIndex}}>
            {children}
        </expenseContext.Provider>
    )
}

// export default expenseContext

export function useExpenseContext() {
    return useContext(expenseContext)
}

