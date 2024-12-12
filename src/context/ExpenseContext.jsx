import React, { useState } from 'react'
import { createContext, useContext } from 'react'
// import { getExpensesFromBackend, setExpensesInBackend } from '../service/localStorage'
// import { useDispatch, useSelector } from 'react-redux'
// import { selectAllExpenses } from '../slice/expenseSlice'

const expenseContext = createContext()

export const ExpenseProvider = ({children})=>{
    // const [expense, dispatch] = useReducer(expenseReducer, [])
    const [editId, setEditId] = useState(-1);
    // const [editIndex, setEditIndex] = useState(-1);
    // const expense = useSelector(selectAllExpenses)
    // const dispatch = useDispatch()

    // useEffect(() => {
    //     getExpensesFromBackend().then(expensesVal => dispatch({
    //         type:"FILL",
    //         payload:expensesVal
    //     }))
    //   }, [])
    
    //   useEffect(() => {
    //     setExpensesInBackend(expense).then(() => console.log("Saved Successfully!") )
    //   }, [expense])

    return(
        <expenseContext.Provider value={{editId, setEditId}}>
        {/* <expenseContext.Provider value={{expense, dispatch, editId, setEditId}}> */}
            {children}
        </expenseContext.Provider>
    )
}

// export default expenseContext

export function useExpenseContext() {
    return useContext(expenseContext)
}

