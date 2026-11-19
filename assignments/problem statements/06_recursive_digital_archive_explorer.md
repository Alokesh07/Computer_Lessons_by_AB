# JavaScript Practical Assessment: Recursive Digital Archive Explorer

**Difficulty:** Advanced  
**Technology:** Vanilla JavaScript  
**Topics:** Objects, nested arrays, custom functions, recursion, base cases, recursive traversal, searching, aggregation, and backtracking-free tree processing.

## 1. Problem Statement

You are building a digital archive whose folders can contain files and other folders. Write reusable functions that recursively summarize the archive, find a file's path, collect files by extension, and find the largest file.

The archive may contain folders nested to any depth. Do not assume a fixed number of folder levels.

**Scope restriction:** Use only JavaScript topics through functions and recursion. Do not use callbacks, callback-based array methods (`map()`, `filter()`, `reduce()`, `forEach()`, `find()`, or `sort()`), promises, async functions, or browser APIs. Traverse entries recursively; do not use loops for archive traversal.

## 2. Initial Data Structure

Each folder has a `type`, `name`, and `entries` array. Each file has a `type`, `name`, `extension`, and `sizeKB`.

```javascript
const archive = {
    type: "folder",
    name: "Learning Library",
    entries: [
        {
            type: "folder",
            name: "JavaScript",
            entries: [
                { type: "file", name: "arrays.js", extension: ".js", sizeKB: 12 },
                {
                    type: "folder",
                    name: "Recursion",
                    entries: [
                        { type: "file", name: "factorial.js", extension: ".js", sizeKB: 8 },
                        { type: "file", name: "tree_traversal.js", extension: ".js", sizeKB: 16 }
                    ]
                }
            ]
        },
        {
            type: "folder",
            name: "Web",
            entries: [
                { type: "file", name: "layout.css", extension: ".css", sizeKB: 20 },
                { type: "file", name: "index.html", extension: ".html", sizeKB: 10 }
            ]
        }
    ]
};
```

## 3. Required Custom Functions

### Function 1: `getArchiveSummary(folder)`

- Recursively count every folder, including the root archive folder.
- Recursively count all files.
- Add the sizes of all files.
- Return an object with `folderCount`, `fileCount`, and `totalSizeKB`.
- Use a clear base case for files and empty folders.

### Function 2: `findFilePath(folder, fileName, currentPath)`

- Search all nested folders recursively.
- Return the matching path as a string, with folder and file names separated by `/`.
- Return `null` if no file with that exact name exists.
- If duplicate file names exist, return the first match in the order entries are listed.

Find `"tree_traversal.js"`.

### Function 3: `collectFilesByExtension(folder, extension)`

- Recursively collect every file whose extension matches the requested extension, case-insensitively.
- Return an array of objects containing each matching file's `path` and `sizeKB`.
- Preserve the order in which the files appear in the archive.
- Return an empty array when there are no matches.

Collect `".js"` files.

### Function 4: `findLargestFile(folder)`

- Recursively find the file with the greatest `sizeKB`.
- Return the file's `name`, `sizeKB`, and full `path`.
- Return `null` for an archive with no files.
- If two files have equal sizes, return the first one encountered.

## 4. Required Execution Sequence

1. Create the `archive` object.
2. Call `getArchiveSummary()` and store the result.
3. Call `findFilePath()` for `"tree_traversal.js"`.
4. Call `collectFilesByExtension()` for `".js"`.
5. Call `findLargestFile()`.
6. Display all results using readable `console.log()` output.

## 5. Expected Results

### Archive summary

```text
folderCount: 4
fileCount: 5
totalSizeKB: 66
```

### File path

```text
Learning Library/JavaScript/Recursion/tree_traversal.js
```

### JavaScript files

In archive order, the result must contain:

```text
Learning Library/JavaScript/arrays.js                 12 KB
Learning Library/JavaScript/Recursion/factorial.js     8 KB
Learning Library/JavaScript/Recursion/tree_traversal.js 16 KB
```

### Largest file

```text
name: layout.css
sizeKB: 20
path: Learning Library/Web/layout.css
```

## 6. Additional Constraints

1. Use `const` and `let`; do not use `var`.
2. Define reusable functions instead of placing all logic in one block.
3. Pass the folder and other required values through parameters.
4. Use recursion for traversing folders and entries; do not use loops for archive traversal.
5. Do not use callbacks or callback-based array methods.
6. Do not hardcode the expected counts, file paths, or total size.
7. Handle empty folders and missing files using the specified return values.
8. Use plain JavaScript with no external libraries.

## 7. Deliverables

Submit the complete JavaScript source code, the required functions, calls in the prescribed order, readable output, and a short explanation of each recursive base case and recursive step.

## 8. Evaluation Rubric

| Assessment area | Marks |
|---|---:|
| Recursive summary and correct base cases | 25 |
| Recursive file search and path construction | 20 |
| Recursive extension collection and ordering | 20 |
| Recursive largest-file search | 15 |
| Empty and missing-result handling | 10 |
| Output, constraints, and code quality | 10 |
| **Total** | **100** |

**Interviewer tip:** Check that every nested folder is visited regardless of depth, and that recursion progresses through entries so an empty folder or the end of an entries array terminates correctly.
