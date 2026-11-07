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

gradebook.students.push({
    id: 104,
    name: "David",
    scores: {
        math: 88,
        science: 91,
        english: 85
    },
    attendance: [true, true, true, true, false]
});

gradebook.students[1].scores.math = 92;

gradebook.students[1].attendance[2] = true;

const aliceIndex = gradebook.students.findIndex(
    student => student.name === "Alice"
);

console.log("Alice's Index:", aliceIndex);

const transferredStudent = gradebook.students.pop();

console.log("Transferred Student:", transferredStudent);

console.log("Updated Gradebook:", gradebook);