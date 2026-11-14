# JavaScript Practical Assessment: Recursive Maze Pathfinder

**Difficulty:** Advanced  
**Technology:** Vanilla JavaScript  
**Topics:** Two-dimensional arrays, custom functions, recursion, base cases, depth-first search, path tracking, and backtracking.

## 1. Problem Statement

Write a maze pathfinder that uses recursion to find a route from `S` (start) to `E` (exit). The maze is provided as an array of row strings and must be converted into a rectangular two-dimensional array of character cells. The solver must avoid walls, remain inside the maze, and avoid revisiting cells.

Use depth-first search and return the first route found according to this direction priority: **Right, Down, Left, Up**. Track the route as `[row, column]` coordinate pairs using zero-based indexes.

**Scope restriction:** Use only JavaScript topics through functions and recursion. Do not use callbacks, callback-based array methods (`map()`, `filter()`, `reduce()`, `forEach()`, `find()`, or `sort()`), promises, async functions, or browser APIs. Do not use loops to validate or traverse the maze; use recursive helper functions instead.

## 2. Initial Maze

Use `#` for a wall, `.` for an open cell, `S` for the start, and `E` for the exit.

```javascript
const mazeRows = [
    "#########",
    "#S..#...#",
    "#.#...#E#",
    "#.#.#...#",
    "#...#...#",
    "#.......#",
    "#########"
];
```

Convert these row strings into a two-dimensional array of characters using recursion. Do not use a loop or a callback-based method for conversion.

## 3. Required Custom Functions

### Function 1: `convertMazeRows(rows, rowIndex, grid)`

- Recursively convert each string row into an array of characters.
- Return the two-dimensional character grid.
- Use a base case when every row has been converted.

### Function 2: `validateMaze(grid)`

- Recursively confirm that `grid` is a non-empty rectangular two-dimensional array.
- Confirm each cell contains only `"#"`, `"."`, `"S"`, or `"E"`.
- Confirm the maze contains exactly one start and exactly one exit.
- Return `true` for a valid maze and `false` otherwise.

### Function 3: `findMarker(grid, marker, row, column)`

- Recursively search the grid for the requested marker.
- Return its `[row, column]` coordinates, or `null` if it is not found.
- Do not scan the maze with a loop.

Use this function to locate `S` and `E`.

### Function 4: `createVisitedGrid(rowCount, columnCount)`

- Recursively create a two-dimensional array of Boolean values.
- The result must have the same dimensions as the maze and every cell must initially be `false`.
- Do not use `Array.from()` with a callback or any loop.

### Function 5: `findMazePath(grid, row, column, exit, visited, path)`

- Recursively explore from the current cell.
- Use a clear base case for reaching the exit.
- Reject out-of-bounds cells, walls, and already-visited cells.
- Mark visited cells and add the current coordinates to `path`.
- Try directions in the required priority: Right, Down, Left, Up.
- Use recursive backtracking so a failed route is removed from `path`.
- Return `true` if the exit is reached; otherwise return `false`.

You may define a separate recursive helper to try the four directions without using a loop.

### Function 6: `solveMaze(grid)`

- Validate the maze and locate the start and exit.
- Create the visited grid and an empty path.
- Call the recursive pathfinder.
- For a valid maze, return an object with `found` and `path` properties.
- Return `{ found: false, path: [] }` if the maze is valid but has no route.
- Return `null` if the maze input is invalid.

## 4. Required Execution Sequence

1. Create the maze.
2. Call `convertMazeRows()` to produce a two-dimensional character grid.
3. Call `validateMaze()` and display the result.
4. Call `findMarker()` for both `S` and `E`.
5. Call `createVisitedGrid()` and display its dimensions.
6. Call `solveMaze()` and display whether a route was found, the coordinate path, and the number of moves.

## 5. Expected Results

### Validation and markers

```text
Valid maze: true
Start: [1, 1]
Exit: [2, 7]
```

### First route found

With the required Right, Down, Left, Up priority, the path must be:

```javascript
[
    [1, 1],
    [1, 2],
    [1, 3],
    [2, 3],
    [2, 4],
    [2, 5],
    [3, 5],
    [3, 6],
    [3, 7],
    [2, 7]
]
```

```text
Route found: true
Path coordinates: 10
Moves: 9
```

The solver may explore dead ends while searching, but they must not remain in the returned path.

## 6. Additional Constraints

1. Use `const` and `let`; do not use `var`.
2. Define reusable functions and pass the grid and search state as parameters.
3. Use recursion for row conversion, validation, marker search, visited-grid construction, and pathfinding.
4. Do not use callbacks, callback-based array methods, or loops.
5. Do not hardcode the start, exit, path, or move count.
6. Keep the maze unchanged while searching.
7. Return the specified values for invalid and unsolvable mazes.
8. Use plain JavaScript with no external libraries.

## 7. Deliverables

Submit the complete JavaScript source code, the required functions and any recursive helpers, calls in the prescribed order, readable output, and a short explanation of the base cases, recursive steps, visited tracking, and backtracking.

## 8. Evaluation Rubric

| Assessment area | Marks |
|---|---:|
| Recursive maze validation and marker handling | 20 |
| Recursive visited-grid creation | 10 |
| Correct depth-first recursive search | 25 |
| Direction priority and path backtracking | 20 |
| Invalid and unsolvable maze handling | 15 |
| Output, constraints, and code quality | 10 |
| **Total** | **100** |

**Interviewer tip:** Check that a failed branch removes its coordinates from the active path, that cells cannot be revisited indefinitely, and that trying directions follows the exact priority rather than relying on a callback or loop.
