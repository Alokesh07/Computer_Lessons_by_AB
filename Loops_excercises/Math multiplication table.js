let finalTable = [];
let value = 10;

for (let i = 0; i < value; i++) {
  let tempRow = [];
  for (let j = 0; j < value; j++) {
    tempRow.push(i * j);
  }
  finalTable.push(tempRow);
}

console.table(finalTable);