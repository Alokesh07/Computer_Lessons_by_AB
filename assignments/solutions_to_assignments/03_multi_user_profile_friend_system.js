// CHANGE HIGHLIGHTS: Added the six required functions, changed the city to the
// requested Bengaluru value, and included all expected output and validation.

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

function combineContacts(friendRequests, recommendations) {
    if (!Array.isArray(friendRequests) || !Array.isArray(recommendations)) {
        throw new TypeError("Friend requests and recommendations must be arrays.");
    }

    return [...friendRequests, ...recommendations];
}

function addFirstPotentialContact(profile, potentialContacts) {
    if (!profile || !Array.isArray(profile.friendsList) || !Array.isArray(potentialContacts)) {
        return false;
    }
    if (potentialContacts.length === 0) {
        return null;
    }

    const firstContact = potentialContacts[0];
    if (typeof firstContact !== "string" || !firstContact.trim()) {
        return false;
    }

    potentialContacts.shift();
    profile.friendsList.push(firstContact);
    return firstContact;
}

// CHANGE: Dynamic bracket notation now updates the requested existing property.
function updateProfileDetail(profile, keyName, newValue) {
    if (
        !profile
        || !profile.details
        || typeof keyName !== "string"
        || !Object.prototype.hasOwnProperty.call(profile.details, keyName)
        || newValue === undefined
    ) {
        return false;
    }

    profile.details[keyName] = newValue;
    return true;
}

function sortFriendsAlphabetically(profile) {
    if (!profile || !Array.isArray(profile.friendsList)) {
        throw new TypeError("The profile must contain a friendsList array.");
    }

    profile.friendsList.sort((first, second) =>
        first.toLowerCase().localeCompare(second.toLowerCase())
    );
    return profile.friendsList;
}

function getFriendCount(profile) {
    return profile && Array.isArray(profile.friendsList) ? profile.friendsList.length : 0;
}

function displayUserProfile(profile, potentialContacts, friendCount) {
    console.log("Username:", profile.username);
    console.log("Profile details:", profile.details);
    console.log("Sorted friends:", profile.friendsList);
    console.log("Remaining potential contacts:", potentialContacts);
    console.log("Total number of friends:", friendCount);
    console.log("Final user profile:", JSON.stringify(profile, null, 2));
}

// Required execution sequence
const potentialContacts = combineContacts(pendingFriendRequests, recommendedFriends);
console.log("Contact added:", addFirstPotentialContact(userProfile, potentialContacts));

const keyName = "city";
console.log("Profile detail updated:", updateProfileDetail(userProfile, keyName, "Bengaluru"));

sortFriendsAlphabetically(userProfile);
const friendCount = getFriendCount(userProfile);
displayUserProfile(userProfile, potentialContacts, friendCount);
