# JavaScript Practical Assessment: Multi-User Profile & Friend Management System

**Difficulty:** Intermediate\
**Technology:** Vanilla JavaScript\
**Topics:** Objects, nested objects, arrays, custom functions, array
combination, `shift()`, `push()`, `sort()`, dynamic property access,
bracket notation, and `length`.

## 1. Problem Statement

You are developing a user profile and friend management module for a
social networking application. The application stores a user's profile
details and friend list, alongside pending friend requests and
recommended contacts.

Create a `userProfile` object and implement reusable functions to
combine contacts, transfer a contact into the friend list, update a
profile property using a dynamic key, sort friends alphabetically, count
friends, and display the final state.

Define each operation as a separate function and invoke the functions in
the required sequence.

## 2. Initial Data Structure

Create the following main profile object:

``` javascript
const userProfile = {
    username: "alokesh_dev",
    details: {
        age: 22,
        email: "alokesh@example.com",
        city: "Kolkata"
    },
    friendsList: [
        "rahul_23",
        "priya_codes",
        "amit_dev"
    ]
};
```

Create two separate arrays:

``` javascript
const pendingFriendRequests = [
    "neha_tech",
    "sourav_js"
];

const recommendedFriends = [
    "riya_design",
    "arjun_web"
];
```

## 3. Required Custom Functions

### Function 1: `combineContacts(pendingFriendRequests, recommendedFriends)`

-   Combine both arrays into a new array named `potentialContacts`.
-   Use the spread operator or `concat()`.
-   Preserve the order of the original arrays.
-   Do not mutate the original arrays.
-   Return the combined array.

Expected result:

``` javascript
[
    "neha_tech",
    "sourav_js",
    "riya_design",
    "arjun_web"
]
```

### Function 2: `addFirstPotentialContact(userProfile, potentialContacts)`

-   Check whether a potential contact exists.
-   Remove the first username using `shift()`.
-   Add the username to `userProfile.friendsList` using `push()`.
-   Return the transferred username, or a meaningful result if the array
    is empty.
-   Do not hardcode the username.

Expected behavior: `"neha_tech"` is removed from `potentialContacts` and
appended to the friend list. Three potential contacts remain.

### Function 3: `updateProfileDetail(userProfile, keyName, newValue)`

-   Accept the property name through `keyName`.
-   Update the corresponding existing property inside
    `userProfile.details`.
-   Use bracket notation rather than hardcoding a property name.
-   Return the updated value or a success indicator.

Create this variable and use it in the function call:

``` javascript
const keyName = "city";
```

Update the city to `"Bengaluru"`.

### Function 4: `sortFriendsAlphabetically(userProfile)`

-   Sort `userProfile.friendsList` alphabetically using `sort()`.
-   Return the sorted array.
-   A case-insensitive comparator may be used if desired.

### Function 5: `getFriendCount(userProfile)`

-   Return the number of usernames in `friendsList` using its `length`
    property.
-   Do not hardcode the count.

### Function 6: `displayUserProfile(userProfile, potentialContacts, friendCount)`

Display the username, profile details, sorted friend list, remaining
potential contacts, total friend count, and final profile object.

## 4. Required Execution Sequence

1.  Create `userProfile`.
2.  Create `pendingFriendRequests` and `recommendedFriends`.
3.  Call `combineContacts()` and store the result as
    `potentialContacts`.
4.  Call `addFirstPotentialContact()`.
5.  Define `keyName = "city"` and update the city to `"Bengaluru"`.
6.  Call `sortFriendsAlphabetically()`.
7.  Call `getFriendCount()`.
8.  Call `displayUserProfile()`.

The friend count must be calculated after the new contact is added, and
sorting must happen after the friend list is updated.

## 5. Expected Results

### Final `userProfile`

``` javascript
{
    username: "alokesh_dev",
    details: {
        age: 22,
        email: "alokesh@example.com",
        city: "Bengaluru"
    },
    friendsList: [
        "amit_dev",
        "neha_tech",
        "priya_codes",
        "rahul_23"
    ]
}
```

### Final `potentialContacts`

``` javascript
[
    "sourav_js",
    "riya_design",
    "arjun_web"
]
```

### Expected friend count

``` text
Total number of friends: 4
```

The console output should also display the username, age, email, updated
city, friend list, and remaining potential contacts.

## 6. Additional Constraints

1.  Use `const` and `let`; do not use `var`.
2.  Define each function separately.
3.  Pass objects and arrays as parameters.
4.  Use spread or `concat()` to combine arrays.
5.  Use `shift()` and `push()` to transfer the first contact.
6.  Use bracket notation for dynamic property access.
7.  Use `sort()` for alphabetical ordering and `.length` for the count.
8.  Do not hardcode the transferred username or final count.
9.  Validate empty arrays and invalid property names.
10. Use vanilla JavaScript without external libraries.

## 7. Deliverables

Submit the complete JavaScript source code, all six functions, calls in
the prescribed order, console output for the final profile and counts,
and a short explanation of `shift()`, `push()`, `sort()`, bracket
notation, and `length`.

## 8. Evaluation Rubric

  Assessment area                                     Marks
  ----------------------------------------------- ---------
  Initial objects and arrays                             10
  Function design and parameters                         20
  Array combination                                      15
  Contact transfer using `shift()` and `push()`          15
  Dynamic property access                                15
  Sorting and friend count                               10
  Validation, output, and code quality                   15
  **Total**                                         **100**

**Interviewer tip:** Check that the candidate understands that `shift()`
and `push()` mutate their arrays, and that bracket notation allows a
property to be selected through a variable such as `keyName`.
