/*
 * Small magic to find an element in a nested array
 * Takes a nested Array and an id to search by
 */
export const findBlockById = (Arr, id) => {
  for (let i = 0; i < Arr.length; i++) {
    const rowArr = Arr[i];
    let foundElem = rowArr.find((obj) => obj.id === id);
    if (foundElem !== undefined) {
      return foundElem;
    }
  }
};

// Checks if all the items in an array are unique
export const isAllDistinct = (arr) => {
  let set = new Set(arr);
  return set.size == arr.length;
};

/**
 * Gets all the items in the same column
 */
export const getColumn = (Arr, col = 1) => {
  return Arr.map((rowArr) => {
    return rowArr.filter((obj) => obj.col === col);
  }).flat();
};

/**
 * Makes sure a number only appears once in a row or column
 * takes an Array and the dataObject that just changed
 */
export const validateEntry = (Arr, data) => {
  // remove the data object from the row as it will be in the column, avoid duplicates
  const row = Arr[data.row].filter(
    (obj) => JSON.stringify(obj) != JSON.stringify(data)
  );
  const col = getColumn(Arr, data.col);
  const concatedArr = row.concat(col);
  const allValues = concatedArr.map((obj) => obj.val);
  // // If this returns true there are no duplicates
  return isAllDistinct(allValues);
};

/**
 * Makes sure there are no duplicates on the entire bored
 */
export const validateEntireBoard = (data) => {
  const allValues = data.flat().map((obj) => obj.val);
  return isAllDistinct(allValues);
};

