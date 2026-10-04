let grid = [];
let cells = 64;
let counter = 0;
let row;

for (let i = 0; i < cells + 1; i++) {
  if (counter % 8 === 0) {
    if (row !== undefined) {
      grid.push(row);
    }
    row = [];
  }
  let tempValue = counter;
  row.push(tempValue);
  
  if (counter === cells) {
    grid.push(row);
  }
  counter++;
}

console.table(grid);