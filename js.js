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
      if (udclasses[urclass] === "Warrior") {
        document.getElementById("class").style.color = "#C79C6E";
      } else if (udclasses[urclass] === "Priest") {
        document.getElementById("class").style.color = "#FFFFFF";
      } else if (udclasses[urclass] === "Rogue") {
        document.getElementById("class").style.color = "#FFF569";
      } else if (udclasses[urclass] === "Mage") {
        document.getElementById("class").style.color = "#40C7EB";
      } else if (udclasses[urclass] === "Warlock") {
        document.getElementById("class").style.color = "#8787ED";
      }
    }
    if (horde[hrace] === "Tauren") {
      var urclass = Math.floor(Math.random() * tauclasses.length);
      document.getElementById("class").innerHTML = tauclasses[urclass];
      if (tauclasses[urclass] === "Warrior") {
        document.getElementById("class").style.color = "#C79C6E";
      } else if (tauclasses[urclass] === "Druid") {
        document.getElementById("class").style.color = "#FF7D0A";
      } else if (tauclasses[urclass] === "Hunter") {
        document.getElementById("class").style.color = "#ABD473";
      } else if (tauclasses[urclass] === "Shaman") {
        document.getElementById("class").style.color = "#0070DE";
      }
    }
    if (horde[hrace] === "Troll") {
      var urclass = Math.floor(Math.random() * trollclasses.length);
      document.getElementById("class").innerHTML = trollclasses[urclass];
      if (trollclasses[urclass] === "Warrior") {
        document.getElementById("class").style.color = "#C79C6E";
      } else if (trollclasses[urclass] === "Hunter") {
        document.getElementById("class").style.color = "#ABD473";
      } else if (trollclasses[urclass] === "Rogue") {
        document.getElementById("class").style.color = "#FFF569";
      } else if (trollclasses[urclass] === "Mage") {
        document.getElementById("class").style.color = "#40C7EB";
      } else if (trollclasses[urclass] === "Shaman") {
        document.getElementById("class").style.color = "#0070DE";
      } else if (trollclasses[urclass] === "Priest") {
        document.getElementById("class").style.color = "#FFFFFF";
      }
    }
  } else {
    document.getElementById("faction").style.color = "#144587";
    var arace = Math.floor(Math.random() * alliance.length);
    document.getElementById("race").innerHTML = alliance[arace];
    if (alliance[arace] === "Human") {
      var urclass = Math.floor(Math.random() * humclasses.length);
      document.getElementById("class").innerHTML = humclasses[urclass];
      if (humclasses[urclass] === "Warrior") {
        document.getElementById("class").style.color = "#C79C6E";
      } else if (humclasses[urclass] === "Paladin") {
        document.getElementById("class").style.color = "#F58CBA";
      } else if (humclasses[urclass] === "Rogue") {
        document.getElementById("class").style.color = "#FFF569";
      } else if (humclasses[urclass] === "Mage") {
        document.getElementById("class").style.color = "#40C7EB";
      } else if (humclasses[urclass] === "Warlock") {
        document.getElementById("class").style.color = "#8787ED";
      } else if (humclasses[urclass] === "Priest") {
        document.getElementById("class").style.color = "#FFFFFF";
      }
    }
    if (alliance[arace] === "Dwarf") {
      var urclass = Math.floor(Math.random() * dwarfclasses.length);
      document.getElementById("class").innerHTML = dwarfclasses[urclass];
      if (dwarfclasses[urclass] === "Warrior") {
        document.getElementById("class").style.color = "#C79C6E";
      } else if (dwarfclasses[urclass] === "Paladin") {
        document.getElementById("class").style.color = "#F58CBA";
      } else if (dwarfclasses[urclass] === "Rogue") {
        document.getElementById("class").style.color = "#FFF569";
      } else if (dwarfclasses[urclass] === "Hunter") {
        document.getElementById("class").style.color = "#ABD473";
      } else if (dwarfclasses[urclass] === "Priest") {
        document.getElementById("class").style.color = "#FFFFFF";
      }
    }
    if (alliance[arace] === "Night-Elf") {
      var urclass = Math.floor(Math.random() * neclasses.length);
      document.getElementById("class").innerHTML = neclasses[urclass];
      if (neclasses[urclass] === "Warrior") {
        document.getElementById("class").style.color = "#C79C6E";
      } else if (neclasses[urclass] === "Druid") {
        document.getElementById("class").style.color = "#FF7D0A";
      } else if (neclasses[urclass] === "Rogue") {
        document.getElementById("class").style.color = "#FFF569";
      } else if (neclasses[urclass] === "Hunter") {
        document.getElementById("class").style.color = "#ABD473";
      } else if (neclasses[urclass] === "Priest") {
        document.getElementById("class").style.color = "#FFFFFF";
      }
    }
    if (alliance[arace] === "Gnome") {
      var urclass = Math.floor(Math.random() * gnomeclasses.length);
      document.getElementById("class").innerHTML = gnomeclasses[urclass];
      if (gnomeclasses[urclass] === "Warrior") {
        document.getElementById("class").style.color = "#C79C6E";
      } else if (gnomeclasses[urclass] === "Mage") {
        document.getElementById("class").style.color = "#40C7EB";
      } else if (gnomeclasses[urclass] === "Rogue") {
        document.getElementById("class").style.color = "#FFF569";
      } else if (gnomeclasses[urclass] === "Warlock") {
        document.getElementById("class").style.color = "#8787ED";
      }
    }
  }

  var gend = Math.floor(Math.random() * gender.length);
  document.getElementById("gender").innerHTML = gender[gend];
}
