import uuid from "uuid";
//ADD expense action
export const AddExpense = ({description='', note ='', amount = 0, createAt = 0} = {}) => ({
    type: 'ADD_EXPENSE',
    expense: {
        id: uuid(),
        description,
        note,
        amount,
        createAt

    }
})
//REMOVE expense action
export  const RemoveExpense = ({id} = {}) => ({
    type: "REMOVE_EXPENSE",
    id

})
//EDIT expense
export const EditExpense = (id, expense) => ({
     type: "EDIT_EXPENSE",
     id,
     expense
 })   