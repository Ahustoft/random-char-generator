var factions = ["Alliance", "Horde"];
var horde = ["Orc", "Tauren", "Troll", "Undead"];
var gender = ["Male", "Female"];
var alliance = ["Human", "Dwarf", "Gnome", "Night-Elf"];
var orclasses = ["Warrior", "Hunter", "Rogue", "Warlock", "Shaman"];
var udclasses = ["Priest", "Rogue", "Warrior", "Mage", "Warlock"];
var tauclasses = ["Warrior", "Druid", "Hunter", "Shaman"];
var trollclasses = ["Priest", "Rogue", "Warrior", "Mage", "Hunter", "Shaman"];
var humclasses = ["Priest", "Rogue", "Warrior", "Mage", "Warlock", "Paladin"];
var dwarfclasses = ["Priest", "Rogue", "Warrior", "Hunter", "Paladin"];
var neclasses = ["Priest", "Rogue", "Warrior", "Druid", "Hunter"];
var gnomeclasses = ["Rogue", "Warrior", "Mage", "Warlock"];
const btn = document.getElementById("chooseclass");

function chooseClass() {
  var faction = Math.floor(Math.random() * factions.length);
  document.getElementById("faction").innerHTML = factions[faction];
  if (factions[faction] === "Horde") {
    document.getElementById("faction").style.color = "#8C1616";
    var hrace = Math.floor(Math.random() * horde.length);
    document.getElementById("race").innerHTML = horde[hrace];
    if (horde[hrace] === "Orc") {
      var urclass = Math.floor(Math.random() * orclasses.length);
      document.getElementById("class").innerHTML = orclasses[urclass];
      if (orclasses[urclass] === "Warrior") {
        document.getElementById("class").style.color = "#C79C6E";
      } else if (orclasses[urclass] === "Hunter") {
        document.getElementById("class").style.color = "#ABD473";
      } else if (orclasses[urclass] === "Rogue") {
        document.getElementById("class").style.color = "#FFF569";
      } else if (orclasses[urclass] === "Warlock") {
        document.getElementById("class").style.color = "#8787ED";
      } else if (orclasses[urclass] === "Shaman") {
        document.getElementById("class").style.color = "#0070DE";
      }
    }
    if (horde[hrace] === "Undead") {
      var urclass = Math.floor(Math.random() * udclasses.length);
      document.getElementById("class").innerHTML = udclasses[urclass];
    }
    if (horde[hrace] === "Tauren") {
      var urclass = Math.floor(Math.random() * tauclasses.length);
      document.getElementById("class").innerHTML = tauclasses[urclass];
    }
    if (horde[hrace] === "Troll") {
      var urclass = Math.floor(Math.random() * trollclasses.length);
      document.getElementById("class").innerHTML = trollclasses[urclass];
    }
  } else {
    document.getElementById("faction").style.color = "#144587";
    var arace = Math.floor(Math.random() * alliance.length);
    document.getElementById("race").innerHTML = alliance[arace];
    if (alliance[arace] === "Human") {
      var urclass = Math.floor(Math.random() * humclasses.length);
      document.getElementById("class").innerHTML = humclasses[urclass];
    }
    if (alliance[arace] === "Dwarf") {
      var urclass = Math.floor(Math.random() * dwarfclasses.length);
      document.getElementById("class").innerHTML = dwarfclasses[urclass];
    }
    if (alliance[arace] === "Night-Elf") {
      var urclass = Math.floor(Math.random() * neclasses.length);
      document.getElementById("class").innerHTML = neclasses[urclass];
    }
    if (alliance[arace] === "Gnome") {
      var urclass = Math.floor(Math.random() * gnomeclasses.length);
      document.getElementById("class").innerHTML = gnomeclasses[urclass];
    }
  }

  var gend = Math.floor(Math.random() * gender.length);
  document.getElementById("gender").innerHTML = gender[gend];
}
