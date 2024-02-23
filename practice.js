let admin = {role:'admin'};
function setUser(name) {
  this.name = name;
};
var user1 = setUser('Ivan');
var user2 = setUser.call(admin,'Petr');
console.log(user1);
console.log(user2);
console.log(name);

