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

const pendingFriendRequests = [
    "neha_tech",
    "sourav_js"
];

const recommendedFriends = [
    "riya_design",
    "arjun_web"
];

const potentialContacts = pendingFriendRequests.concat(recommendedFriends);

let firstFriend = potentialContacts.shift();

userProfile.friendsList.push(firstFriend);

let keyName = "city";
userProfile.details[keyName] = "Mumbai";

userProfile.friendsList.sort();

console.log("Final User Profile:",userProfile);

console.log("Total Friends:", userProfile.friendsList.length);  