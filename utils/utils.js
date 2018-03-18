const add = (a, b) => a+b;

const setName = (user, fullName) => {
     const names = fullName.split(' ');
     user.firstName = names[0];
     user.lastName = names[1];
     return user;
};

const asyncAdd = (a, b, callback) => {
     setTimeOut(() => {
          callback(a + b);
     }, 1000);
};

module.exports = {
     add: add,
     setName: setName,
     asyncAdd: asyncAdd
};
