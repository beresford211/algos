// Given the following asynchronous JavaScript function "getUser":
function getRandom(min, max) {
  return Math.floor(Math.random() * (max - min) + min);
}

// Simulates getting a user object over the network from a remote server.
function getUser(userId, done) {

  setTimeout(function () {
    done({
      id: userId,
      name: `User #{userId}`,
    });
  }, getRandom(1000, 5000));
}
// Please implement an asynchronous function "getUsers" that takes an array of user ids and a callback function as arguments. Your function must fetch all user objects using "getUser", and call the callback function given as argument when all the user objects have been retrieved. You must call this function with an array of all the user objects, in the same order as the ids in the array of ids.
function getUsers(userIds, done) {
  // TODO: Implement.
  let users = [];
  let count = userIds.length;

  let returnSetTimeout = (num) => {
    return (userData) => {
      users[num] = userData;
      --count;

      if (count === 0) {
        done(users);
      }
    };
  };

  for (let i = 0; i < userIds.length; i++) {
    getUser(userIds[i], returnSetTimeout(i));
  }
}
// You can test your function like so:
getUsers([12, 15, 20, 27], function (users) {
  console.assert(users[0].id === 12);
  console.assert(users[1].id === 15);
  console.assert(users[2].id === 20);
  console.assert(users[3].id === 27);
});
