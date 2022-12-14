const users = [
    {
        id: 1,
        name: 'ryan',
        email: 'ryan@codeup.com',
        languages: ['clojure', 'javascript'],
        yearsOfExperience: 5
    },
    {
        id: 2,
        name: 'luis',
        email: 'luis@codeup.com',
        languages: ['java', 'scala', 'php'],
        yearsOfExperience: 6
    },
    {
        id: 3,
        name: 'zach',
        email: 'zach@codeup.com',
        languages: ['javascript', 'bash'],
        yearsOfExperience: 7
    },
    {
        id: 4,
        name: 'fernando',
        email: 'fernando@codeup.com',
        languages: ['java', 'php', 'sql'],
        yearsOfExperience: 8
    },
    {
        id: 5,
        name: 'justin',
        email: 'justin@codeup.com',
        languages: ['html', 'css', 'javascript', 'php'],
        yearsOfExperience: 9
    }
];

const threelang = users.filter(user => user.languages.length >= 3)
console.log(threelang)

const allemails = users.map(user => user.email)
console.log(allemails)

const AverageYears = users.reduce((total, user) => {
    return total + user.yearsOfExperience / users.length
}, 0)

console.log(AverageYears)

// const LongE = users.reduce((long, user) => {
//     return long.length > user.email.length
// })

const longestEmaillength = Math.max(...users.map(user => user.email.length));

const longestEmail = users.filter(user => user.email.length === longestEmaillength).map(user => user.email)

console.log(longestEmail)

