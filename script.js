const monsterStats = new Object();
const monsters = [];

async function getMonsterData() {
  const response = await fetch("./monsters.json");
  const monsterData = await response.json();
  monsterStats.Stats = monsterData.Data;
  monsters.push(...monsterData.Data); // Push each object in the array into monsters
  return monsterData;
}

getMonsterData().then(function(value) {
  myDisplayer(value);
});

function myDisplayer(value) {
  monsters.forEach((monster) => {
    monster["XP"] = calcXP(monster.Challenge);
  });
  sort("Name")
}

function calcXP(CR) {
  if (CR == String("0")) {
    return 10;
  } else if (CR == String("1/8")) {
    return 25;
  } else if (CR == String("1/4")) {
    return 50;
  } else if (CR == String("1/2")) {
    return 100;
  } else if (CR == String("1")) {
    return 200;
  } else if (CR == String("2")) {
    return 450;
  } else if (CR == String("3")) {
    return 700;
  } else if (CR == String("4")) {
    return 1100;
  } else if (CR == String("5")) {
    return 1800;
  } else if (CR == String("6")) {
    return 2300;
  } else if (CR == String("7")) {
    return 2900;
  } else if (CR == String("8")) {
    return 3900;
  } else if (CR == String("9")) {
    return 5000;
  } else if (CR == String("10")) {
    return 5900;
  } else if (CR == String("11")) {
    return 7200;
  } else if (CR == String("12")) {
    return 8400;
  } else if (CR == String("13")) {
    return 10000;
  } else if (CR == String("14")) {
    return 11500;
  } else if (CR == String("15")) {
    return 13000;
  } else if (CR == String("16")) {
    return 15000;
  } else if (CR == String("17")) {
    return 18000;
  } else if (CR == String("18")) {
    return 20000;
  } else if (CR == String("19")) {
    return 22000;
  } else if (CR == String("20")) {
    return 25000;
  } else if (CR == String("21")) {
    return 33000;
  } else if (CR == String("22")) {
    return 41000;
  } else if (CR == String("23")) {
    return 50000;
  } else if (CR == String("24")) {
    return 62000;
  } else if (CR == String("25")) {
    return 75000;
  } else if (CR == String("26")) {
    return 90000;
  } else if (CR == String("27")) {
    return 105000;
  } else if (CR == String("28")) {
    return 120000;
  } else if (CR == String("29")) {
    return 135000;
  } else if (CR == String("30")) {
    return 155000;
  } else {
    return 0;
  }
}

let sortVal;

function sort(col) {
  document.getElementById(
    "XP"
  ).innerHTML = `XP <span class="material-symbols-outlined" style="display: inline-block; position: absolute; top: 25%">
  expand_more
  </span>`;
  document.getElementById(
    "AC"
  ).innerHTML = `AC <span class="material-symbols-outlined" style="display: inline-block; position: absolute; top: 25%">
  expand_more
  </span>`;
  document.getElementById(
    "HP"
  ).innerHTML = `HP <span class="material-symbols-outlined" style="display: inline-block; position: absolute; top: 25%">
  expand_more
  </span>`;
  document.getElementById(
    "Name"
  ).innerHTML = `Name <span class="material-symbols-outlined" style="display: inline-block; position: absolute; top: 25%">
  expand_more
  </span>`;

  if (col == "Challenge" || col == "XP") {
    monsters.sort((a, b) =>
      a.Name.replaceAll(" ", "").localeCompare(b.Name.replaceAll(" ", ""))
    );
    if (sortVal == "XPDown") {
      monsters.sort((a, b) => b.XP - a.XP);
      sortVal = "XPUp";
      document.getElementById(
        "XP"
      ).innerHTML = `XP <span class="material-symbols-outlined" style="display: inline-block; position: absolute; top: 25%">
            expand_less
            </span>`;
    } else {
      monsters.sort((a, b) => a.XP - b.XP);
      sortVal = "XPDown";
      document.getElementById(
        "XP"
      ).innerHTML = `XP <span class="material-symbols-outlined" style="display: inline-block; position: absolute; top: 25%">
            expand_more
            </span>`;
    }
  } else if (col == "Name") {
    if (sortVal == "nameDown") {
      monsters.sort((a, b) =>
        b.Name.replaceAll(" ", "").localeCompare(a.Name.replaceAll(" ", ""))
      );
      sortVal = "nameUp";
      document.getElementById(
        "Name"
      ).innerHTML = `Name <span class="material-symbols-outlined" style="display: inline-block; position: absolute; top: 25%">
            expand_less
            </span>`;
    } else {
      monsters.sort((a, b) =>
        a.Name.replaceAll(" ", "").localeCompare(b.Name.replaceAll(" ", ""))
      );
      sortVal = "nameDown";
      document.getElementById(
        "Name"
      ).innerHTML = `Name <span class="material-symbols-outlined" style="display: inline-block; position: absolute; top: 25%">
            expand_more
            </span>`;
    }
  } else if (col == "HP") {
    monsters.sort((a, b) =>
      a.Name.replaceAll(" ", "").localeCompare(b.Name.replaceAll(" ", ""))
    );
    if (sortVal == "HPDown") {
      monsters.sort((a, b) => b.HP - a.HP);
      sortVal = "HPUp";
      document.getElementById(
        "HP"
      ).innerHTML = `HP <span class="material-symbols-outlined" style="display: inline-block; position: absolute; top: 25%">
            expand_less
            </span>`;
    } else {
      monsters.sort((a, b) => a.HP - b.HP);
      sortVal = "HPDown";
      document.getElementById(
        "HP"
      ).innerHTML = `HP <span class="material-symbols-outlined" style="display: inline-block; position: absolute; top: 25%">
            expand_more
            </span>`;
    }
  } else if (col == "AC") {
    monsters.sort((a, b) =>
      a.Name.replaceAll(" ", "").localeCompare(b.Name.replaceAll(" ", ""))
    );
    if (sortVal == "ACDown") {
      monsters.sort((a, b) => b.AC - a.AC);
      sortVal = "ACUp";
      document.getElementById(
        "AC"
      ).innerHTML = `AC <span class="material-symbols-outlined" style="display: inline-block; position: absolute; top: 25%">
            expand_less
            </span>`;
    } else {
      monsters.sort((a, b) => a.AC - b.AC);
      sortVal = "ACDown";
      document.getElementById(
        "AC"
      ).innerHTML = `AC <span class="material-symbols-outlined" style="display: inline-block; position: absolute; top: 25%">
            expand_more
            </span>`;
    }
  }
  printMonsters();
}

function printMonsters() {
  const tb = document.getElementById("tb");
  let tr = [];
  monsters.forEach((monster) => {
    tr.push("<tr id=" + monster.Name + "><td>" + monster.Name + "</td>");
    tr.push("<td>" + monster.HP + "</td>");
    tr.push("<td>" + monster.AC + "</td>");
    tr.push("<td>" + monster.XP + "</td>");
  });
  tb.innerHTML = tr.join("");
}

function closeNav() {
  document.getElementById("navMenu").style.width = "0%";
}

function openNav() {
  document.getElementById("navMenu").style.width = "66%";
}
