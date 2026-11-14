// CHANGE HIGHLIGHTS: Added all five required functions and validation,
// corrected David's sample scores to match the statement, and displayed the
// removed record together with the final student count and gradebook.

const gradebook = {
    students: [
        {
            id: 101,
            name: "Alice",
            scores: { math: 85, science: 90, english: 88 },
            attendance: [true, true, false, true, true]
        },
        {
            id: 102,
            name: "Bob",
            scores: { math: 78, science: 82, english: 80 },
            attendance: [true, false, true, true, true]
        },
        {
            id: 103,
            name: "Charlie",
            scores: { math: 91, science: 87, english: 93 },
            attendance: [true, true, true, false, true]
        }
    ]
};

function isValidStudent(student) {
    return student
        && Number.isInteger(student.id)
        && typeof student.name === "string"
        && student.name.trim()
        && student.scores
        && ["math", "science", "english"].every(subject =>
            Number.isFinite(student.scores[subject])
            && student.scores[subject] >= 0
            && student.scores[subject] <= 100
        )
        && Array.isArray(student.attendance)
        && student.attendance.length === 5
        && student.attendance.every(value => typeof value === "boolean");
}

function addStudent(book, student) {
    if (!book || !Array.isArray(book.students) || !isValidStudent(student)) {
        return false;
    }
    if (book.students.some(existingStudent => existingStudent.id === student.id)) {
        return false;
    }

    book.students.push(student);
    return book.students.length;
}

// CHANGE: Validate all requested updates before changing either nested value.
function updateStudentRecord(book, studentIndex, newMathScore, attendanceIndex, attendanceValue) {
    if (
        !book
        || !Array.isArray(book.students)
        || !Number.isInteger(studentIndex)
        || studentIndex < 0
        || studentIndex >= book.students.length
        || !Number.isFinite(newMathScore)
        || newMathScore < 0
        || newMathScore > 100
        || !Number.isInteger(attendanceIndex)
        || attendanceIndex < 0
        || attendanceIndex >= 5
        || typeof attendanceValue !== "boolean"
    ) {
        return false;
    }

    const student = book.students[studentIndex];
    if (!student.scores || !Array.isArray(student.attendance) || student.attendance.length !== 5) {
        return false;
    }

    student.scores.math = newMathScore;
    student.attendance[attendanceIndex] = attendanceValue;
    return student;
}

function findStudentIndex(book, studentName) {
    if (!book || !Array.isArray(book.students) || typeof studentName !== "string") {
        return -1;
    }

    return book.students.findIndex(student => student.name === studentName);
}

function removeLastStudent(book) {
    if (!book || !Array.isArray(book.students) || book.students.length === 0) {
        return null;
    }

    return book.students.pop();
}

function displayGradebook(book, transferredStudent) {
    console.log("Transferred student:", transferredStudent);
    console.log("Remaining students:", book.students);
    console.log("Students remaining:", book.students.length);
    console.log("Final gradebook:", JSON.stringify(book, null, 2));
}

// Required execution sequence
const david = {
    id: 104,
    name: "David",
    scores: { math: 88, science: 84, english: 90 },
    attendance: [true, true, true, true, false]
};

console.log("Student count after adding:", addStudent(gradebook, david));
console.log("Bob's updated record:", updateStudentRecord(gradebook, 1, 92, 2, true));

const aliceIndex = findStudentIndex(gradebook, "Alice");
console.log("Alice's index:", aliceIndex);

const transferredStudent = removeLastStudent(gradebook);
displayGradebook(gradebook, transferredStudent);
