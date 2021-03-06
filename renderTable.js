import {defineTurn } from './defineTurn.js';

const TABLE_SIZE = 3;

export const renderTable = () => {
    const wrapper = document.createElement('div')
    wrapper.className = 'wrapper'
    for (let i = 1; i<= TABLE_SIZE; i++){
        for (let j = 1 ; j <= TABLE_SIZE; j++){
            const cell = document.createElement('div');
            cell.className = 'cell'
            // cell.innerHTML = `column ${i} row ${j} `
            cell.dataset.row = i;
            cell.dataset.column = j;
            wrapper.appendChild(cell)
        }
    }
    const currentPlayerBlock = document.createElement('div');
    currentPlayerBlock.className = 'currentPlayer'
    currentPlayerBlock.innerHTML = `Current player ${defineTurn()}`
    wrapper.appendChild(currentPlayerBlock);

    document.getElementById('root').appendChild(wrapper);
}