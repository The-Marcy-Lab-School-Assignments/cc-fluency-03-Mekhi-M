const users = [
  {
    name: "Reuben",
    username: "@blood_pressure_killa",
    followers: 1,
    verified: false,
    bio: "It's an honor and a privilege.",
  },
  {
    name: "Laisha",
    username: "@passaic_papi",
    followers: 700,
    verified: true,
    bio: "My commute is longer than yours.",
  },
  {
    name: "Anne",
    username: "@i_love_bambas",
    followers: 12,
    verified: false,
    bio: "@mayabee is my best friend",
  },
  {
    name: "Steph",
    username: "@queen_of_the_kew",
    followers: 1200,
    verified: false,
    bio: "✌🏼",
  },
  {
    name: "Carmen",
    username: "@omar_apollo_fanclub",
    followers: 1200000,
    verified: true,
    bio: "My favorite restaurants are outback steakhouse and buffalo wildwings. My favorite stores are Zara, H&M, and Forever 21.",
  },
];

const logAllNames = (users) => users.forEach(({ name }) => console.log(name));

// // Q1 tests
// logAllNames(users);

const getAllTags = (users) =>
  users.forEach(({ name, username }) =>
    console.log(`Hi my name is ${name}, and my tag is ${username}!`)
  );

// // Q2 tests
// getAllTags(users);

const sumAllFollowers = (users) =>
  users.reduce(
    (totalFollowers, { followers }) => totalFollowers + followers,
    0
  );

// // Q3 tests
// console.log(sumAllFollowers(users));

const searchUsername = (users, searchTerm) =>
  users.filter(({ username }) => username === searchTerm);

// // Q4 tests
// console.log(searchUsername(users, "@passaic_papi"));

const longWinded = (users) =>
  users.reduce((longestBioUser, currUser) =>
    longestBioUser.bio.length < currUser.bio.length ? currUser : longestBioUser
  );

// // Q5 tests
// console.log(longWinded(users));

const follower = (users) => users.sort((a, b) => a.followers - b.followers);

// // Q6 tests
// console.log(follower(users));
