/**
 * Use this file to playaround and experiment
*/
let A = [
    [{val: 1, id: 1, row: 0, col: 0}, {val: 2, id: 2, row: 0, col: 1}, {val: 3, id: 3, row: 0, col: 2}],
    [{val: 4, id: 4, row: 1, col: 0}, {val: 5, id: 5, row: 1, col: 1}, {val: 6, id: 6, row: 1, col: 2}],
    [{val: 7, id: 7, row: 2, col: 0}, {val: 8, id: 8, row: 2, col: 1}, {val: 9, id: 9, row: 2, col: 2}],
  ]

const findBlockById = (Arr, id) => {
    for (let i = 0; i < Arr.length; i++) {
        const rowArr = Arr[i];
        let foundElem = rowArr.find((obj) => obj.id === id)
        if (foundElem !== undefined) {
            return foundElem
        }
    }
}

// Checks if all the items in an array are unique
const isAllDistinct = (arr) => {
    let set = new Set(arr);
    return (set.size == arr.length);
}

/**
 * Gets all the items in the same column
*/
const getColumn = (Arr=A, col=1) => {
    return A.map((rowArr) => {
        return rowArr.filter((obj => obj.col === col))
    }).flat()
}

/**
 * Makes sure a number only appears once in a row or column
 * takes an Array and the dataObject that just changed
 */ 
const validateEntry = (Arr = A, data = {val: 5, id: 5, row: 1, col: 1}) => {
    const row  = Arr[data.row]
    const col = getColumn(Arr, data.col)
    let concatedArr = row.concat(col)
    // remove updated element than put it back to remove duplicate
    const filtered = concatedArr.filter((obj) => { return obj.val != data.val; });
    // add one object back
    filtered.push(data)
    const allValues = filtered.map( obj => obj.val)
    // If this returns true there are no duplicates
    return isAllDistinct(allValues)
}

let a = validateEntry()
console.log(a);