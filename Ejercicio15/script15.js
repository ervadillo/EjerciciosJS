const users = [
    {username: 'ppc90', age: 30, premium: false},
    {username: 'lu65', age: 24, premium: false},
    {username: 'maria3', age: 36, premium: false},
    {username: 'abc123', age: 20, premium: true},
    {username: 'sergio58', age: 26, premium: true}
];

for (var i=0; i<users.length; i++){
    if (users[i].premium){
        console.log(users[i].username + " es premium");
    };
};

const usersNopremium = users.filter(function(user){
    return user.premium == false
});
console.log(usersNopremium);