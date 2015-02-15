var algebra = document.getElementById("Algebra").innerHTML;
var economics = document.getElementById("Economics").innerHTML;
var engrish = document.getElementById("Engrish").innerHTML;
var accounting = document.getElementById("Accounting").innerHTML;
var love = document.getElementById("Love").innerHTML;



function User ( name, offers, needs, location ) {

  this.name = name;
  this.offers = offers;
  this.needs = needs;
  this.location = location;
}


var Jon = new User("Jon", accounting, engrish, "Honolulu");
var Joelle = new User("Joelle", algebra, engrish, "Honolulu");
var Evan = new User("Evan", engrish, accounting, "Honolulu");
var Teresa = new User("Teresa", accounting, engrish, "Honolulu");
var Sarah = new User("Sarah", accounting, engrish, "Honolulu");

var allUsers = [jon,joelle,evan,teresa,sarah];


for(var i = 0; i < allUsers.length; i++) {
  if("accounting" === allUsers[i].offers) {
    console.log(allUsers[i]);
  }
}



// User.prototype.match = function (a, b) {
  
// var difference = {};
// var results = [];
 
//     for (var i = 0; i < b.length; i++) {
//         difference[b[i]] = true;
//     }
  
//     for (var j = 0; j < a.length; j++) {
//         if (difference[a[j]]) {
//             results.push(a[j]);
//         }
//     }
//     console.log(results);
//     return results;

// };
// var skills = [algebra, economics, english, chemistry];
// var offer = [algebra, economics, english];
// match(skills, offer);

