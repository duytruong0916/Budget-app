// SET TEXT FILTER
export const setTextFilter = (text= '')=> ({
    type: 'SET_TEXT_FILTER',
    text
});
//sort by date
export const sortByDate = () =>({
    type: "SORT_BY_DATE"
});
//sort by Amount
export  const sortByAmount = () =>({
    type: "SORT_BY_AMOUNT"
});
//Set start day
export  const setStartDate = (startdate)=>({
    type: "SET_START_DATE",
    startdate
});
export  const setEndDate = (enddate)=>({
    type: "SET_START_DATE",
    enddate
});