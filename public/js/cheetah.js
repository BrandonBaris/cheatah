var algebra = document.getElementById("need_1").innerHTML;
var economics = document.getElementById("need_2").innerHTML;
var engrish = document.getElementById("need_3").innerHTML;
var accounting = document.getElementById("need_4").innerHTML;
var love = document.getElementById("need_5").innerHTML;


function match (a, b) {
  
var difference = {};
var results = [];
 
    for (var i = 0; i < b.length; i++) {
        difference[b[i]] = true;
    }
  
    for (var j = 0; j < a.length; j++) {
        if (difference[a[j]]) {
            toString(results.push(a[j]));
        }
    }
    console.log(results);
    return results;

}
var skills = [algebra, economics, english, chemistry];
var offer = [algebra, economics, english];
match(skills, offer);


var Evan = {
  name: "Evan",
  offers: algebra,
  needs: accounting,
  location: "Honolulu"
};

var Joelle = {
  name: "Joelle",
  offers: love,
  needs: accounting,
  location: "Honolulu"
};

var Brandon = {
  name: "Brandon",
  offers: engrish,
  needs: accounting,
  location: "Honolulu"
};

var Sarah = {
  name: "Sarah",
  offers: algebra,
  needs: economics,
  location: "Honolulu"
};

var Teresa = {
  name: "Teresa",
  offers: engrish,
  needs: accounting,
  location: "Honolulu"
};

var Teresa = {
  name: "Jon",
  offers: accounting,
  needs: english,
  location: "Honolulu"
};




