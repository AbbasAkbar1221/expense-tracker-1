const EXPENSES_DATA_KEY = 'expenses_data_key_v2';
const sleep = ms => new Promise(r => setTimeout(r , ms))

export async function getExpensesFromBackend() {
    const expensesDataString = localStorage.getItem(EXPENSES_DATA_KEY) || '[]';
    const expenses = JSON.parse(expensesDataString);
    await sleep(1000);
    return expenses;
}

export async function setExpensesInBackend(expenses) {
    await sleep(1000);
    const updatedExpensesString = JSON.stringify(expenses);
    localStorage.setItem(EXPENSES_DATA_KEY, updatedExpensesString);
}
