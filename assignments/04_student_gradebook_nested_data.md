# JavaScript Practical Assessment: Student Gradebook with Nested Data Manipulation

**Difficulty:** Intermediate\
**Technology:** Vanilla JavaScript\
**Topics:** Nested objects, arrays of objects, `push()`, `pop()`,
`findIndex()`, nested property access, array element replacement, custom
functions, and console output.

## 1. Problem Statement

You are developing a gradebook module for a school. Each student record
contains an ID, name, subject scores, and attendance for five days.

Create a `gradebook` object and implement reusable functions to add a
student, update a student's mathematics score and attendance, find a
student by name, remove the last student while preserving the removed
record, and display the final gradebook.

Define each operation as a separate function. Do not perform every
operation in a single block.

## 2. Initial Data Structure

Create a `gradebook` object containing a `students` array:

``` javascript
const gradebook = {
    students: [
        {
            id: 101,
            name: "Alice",
            scores: {
                math: 85,
                science: 90,
                english: 88
            },
            attendance: [true, true, false, true, true]
        },
        {
            id: 102,
            name: "Bob",
            scores: {
                math: 78,
                science: 82,
                english: 80
            },
            attendance: [true, false, true, true, true]
        },
        {
            id: 103,
            name: "Charlie",
            scores: {
                math: 91,
                science: 87,
                english: 93
            },
            attendance: [true, true, true, false, true]
        }
    ]
};
```

Each student must have:

-   `id`: a unique numeric identifier.
-   `name`: the student's name.
-   `scores`: an object containing `math`, `science`, and `english`.
-   `attendance`: an array of five Boolean values (`true` means present,
    `false` means absent).

## 3. Required Custom Functions

### Function 1: `addStudent(gradebook, student)`

-   Validate the required student properties.
-   Ensure `scores` contains `math`, `science`, and `english`.
-   Ensure `attendance` contains exactly five Boolean values.
-   Add the student using `push()`.
-   Return the updated count or a meaningful result.

Add this student:

``` javascript
{
    id: 104,
    name: "David",
    scores: {
        math: 88,
        science: 84,
        english: 90
    },
    attendance: [true, true, true, true, false]
}
```

### Function 2: `updateStudentRecord(gradebook, studentIndex, newMathScore, attendanceIndex, attendanceValue)`

-   Validate the student index.
-   Validate that the mathematics score is a number between 0 and 100.
-   Validate the attendance index and Boolean value.
-   Update the selected student's nested `scores.math`.
-   Replace the specified attendance element.
-   Return a success indicator or the updated student.

**Required operation:** Update the second student, at index `1`, by
setting the mathematics score to `92` and attendance at index `2` to
`true`.

Do not replace the entire `scores` object or attendance array.

### Function 3: `findStudentIndex(gradebook, studentName)`

-   Search the `students` array using an appropriate array method.
-   Return the matching index.
-   Return `-1` if the student is not found.

Search for `"Alice"` and print her index.

### Function 4: `removeLastStudent(gradebook)`

-   Check whether the student array is empty.
-   Remove the last student using `pop()`.
-   Return the removed object.
-   Handle an empty array appropriately.

Store the returned object in a variable named `transferredStudent`.

**Constraint:** Use `pop()`, not `splice()` or `filter()`.

### Function 5: `displayGradebook(gradebook, transferredStudent)`

Display the removed student, remaining student records, final gradebook,
and number of remaining students.

Use readable output such as `console.log()`, `console.table()`, or
`JSON.stringify()`.

## 4. Required Execution Sequence

1.  Create the initial `gradebook`.
2.  Call `addStudent()` to add David.
3.  Call `updateStudentRecord()` to update Bob's score and attendance.
4.  Call `findStudentIndex()` to find Alice and print her index.
5.  Call `removeLastStudent()` and store its return value in
    `transferredStudent`.
6.  Call `displayGradebook()`.

David must be added before removal so that David is the student removed.

## 5. Expected Results

### Bob's updated record

``` javascript
{
    id: 102,
    name: "Bob",
    scores: {
        math: 92,
        science: 82,
        english: 80
    },
    attendance: [true, false, true, true, true]
}
```

### Alice's index

``` text
Alice's index: 0
```

### Removed student

`transferredStudent` must contain David's record, with ID `104`.

### Final gradebook

The gradebook must contain Alice, Bob, and Charlie. Bob's mathematics
score must be `92`, and Bob's attendance array must be
`[true, false, true, true, true]`.

### Final count

``` text
Students remaining: 3
```

## 6. Additional Constraints

1.  Use `const` and `let`; do not use `var`.
2.  Define each function separately.
3.  Pass the gradebook and relevant values as parameters.
4.  Use `push()` to add the student and `pop()` to remove the last
    student.
5.  Use `findIndex()` or another appropriate array method to find Alice.
6.  Update nested properties and individual attendance elements
    directly.
7.  Do not hardcode Alice's index or the final count.
8.  Validate indices and input values.
9.  Preserve the order of the remaining records.
10. Use vanilla JavaScript only.

## 7. Deliverables

Submit the complete JavaScript source code, all five functions, calls in
the required order, console output showing Alice's index and the removed
student, and the final gradebook. Include a brief explanation of nested
property access, array replacement, `push()`, `pop()`, and
`findIndex()`.

## 8. Evaluation Rubric

  Assessment area                                      Marks
  ------------------------------------------------ ---------
  Initial gradebook structure                             10
  Function definitions and parameters                     15
  Adding a student with `push()`                          10
  Nested score and attendance updates                     20
  Searching with `findIndex()`                            10
  Removing and preserving a student with `pop()`          15
  Validation and error handling                           10
  Output and code quality                                 10
  **Total**                                          **100**

**Interviewer tip:** Check that the candidate updates only `scores.math`
and `attendance[2]`, rather than replacing entire nested structures.
They must also save the return value of `pop()` to preserve the removed
student record.
