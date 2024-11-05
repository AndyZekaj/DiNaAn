//Task
// Given an object containing counts of both upvotes and downvotes, return what vote count should be displayed. This is calculated by subtracting the number of downvotes from upvotes.
// Notes
// You can expect only positive integers for vote counts.

const getVoteCount = ({upvotes,downvotes}) => {
    return upvotes- downvotes;
}

console.log(getVoteCount({ upvotes: 13, downvotes: 0 }))// ➞ 13
console.log(getVoteCount({ upvotes: 2, downvotes: 33 }))// ➞ -31
console.log(getVoteCount({ upvotes: 132, downvotes: 132 }))// ➞ 0

console.log(getVoteCount({ upvotes: 133, downvotes: 40 }))

//Divya Edited

// Andy was here



