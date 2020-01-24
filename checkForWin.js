
export const checkForWin = (cellData , currentTurn) => {
    console.log( cellData , currentTurn);
    if (checkForHorizontalCells (cellData, currentTurn)) {
        console.log(`The winner is : ${currentTurn}`)
    }else if (checkForVerticalCells (cellData,currentTurn)){
        console.log(`The winner is : ${currentTurn}`)
    }
}



const checkForHorizontalCells = ({row} , currentTurn) => {
    const rowToCheck = document.querySelectorAll(`.cell[data-row='${row}']`)
    const filteredRowToCurrentTurn = [].filter.call(rowToCheck , el => {
        return el.innerHTML === currentTurn
    });
    console.log(rowToCheck, filteredRowToCurrentTurn)
    return filteredRowToCurrentTurn.length === rowToCheck.length ;
}

const checkForVerticalCells = ({column} , currentTurn) => {
    const columnToCheck = document.querySelectorAll(`.cell[data-column='${column}']`)
    const filteredColumnToCurrentTurn = [].filter.call(columnToCheck , el => {
        return el.innerHTML === currentTurn
    });
    console.log(columnToCheck, filteredColumnToCurrentTurn)
    return filteredColumnToCurrentTurn.length === columnToCheck.length ;
}
