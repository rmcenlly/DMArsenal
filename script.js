const monsterStats = new Object();
const monsters = [];

async function getMonsterData() {
  const response = await fetch("./monsterDict.json");
  const monsterData = await response.json();
  for (const key in monsterData) {
    monsters.push(monsterData[key]);
  }
  // monsters.push(...monsterData.Data); // Push each object in the array into monsters
  return monsterData;
}

getMonsterData().then(function (value) {
  myDisplayer(value);
});

function myDisplayer(value) {
  monsters.forEach((monster) => {
    monster["XP"] = calcXP(monster.Challenge);
  });
  sort("Name");
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
  document.getElementById("Challenge").innerHTML = `Challenge <i class="fa-solid fa-caret-down"></i>`;
  document.getElementById("AC").innerHTML = `AC <i class="fa-solid fa-caret-down"></i>`;
  document.getElementById("HP").innerHTML = `HP <i class="fa-solid fa-caret-down"></i>`;
  document.getElementById("Name").innerHTML = `Name <i class="fa-solid fa-caret-down"></i>`;

  if (col == "Challenge" || col == "XP") {
    monsters.sort((a, b) =>
      a.Name.replaceAll(" ", "").localeCompare(b.Name.replaceAll(" ", ""))
    );
    if (sortVal == "ChallengeDown") {
      monsters.sort((a, b) => b.XP - a.XP);
      sortVal = "ChallengeUp";
      document.getElementById("Challenge").innerHTML = `Challenge <i class="fa-solid fa-caret-up"></i>`;
    } else {
      monsters.sort((a, b) => a.XP - b.XP);
      sortVal = "ChallengeDown";
      document.getElementById("Challenge").innerHTML = `Challenge <i class="fa-solid fa-caret-down"></i>`;
    }
  } else if (col == "Name") {
    if (sortVal == "nameDown") {
      monsters.sort((a, b) =>
        b.Name.replaceAll(" ", "").localeCompare(a.Name.replaceAll(" ", ""))
      );
      sortVal = "nameUp";
      document.getElementById("Name").innerHTML = `Name <i class="fa-solid fa-caret-up"></i>`;
    } else {
      monsters.sort((a, b) =>
        a.Name.replaceAll(" ", "").localeCompare(b.Name.replaceAll(" ", ""))
      );
      sortVal = "nameDown";
      document.getElementById("Name").innerHTML = `Name <i class="fa-solid fa-caret-down"></i>`;
    }
  } else if (col == "HP") {
    monsters.sort((a, b) =>
      a.Name.replaceAll(" ", "").localeCompare(b.Name.replaceAll(" ", ""))
    );
    if (sortVal == "HPDown") {
      monsters.sort((a, b) => b.HP - a.HP);
      sortVal = "HPUp";
      document.getElementById("HP").innerHTML = `HP <i class="fa-solid fa-caret-up"></i>`;
    } else {
      monsters.sort((a, b) => a.HP - b.HP);
      sortVal = "HPDown";
      document.getElementById("HP").innerHTML = `HP <i class="fa-solid fa-caret-down"></i>`;
    }
  } else if (col == "AC") {
    monsters.sort((a, b) =>
      a.Name.replaceAll(" ", "").localeCompare(b.Name.replaceAll(" ", ""))
    );
    if (sortVal == "ACDown") {
      monsters.sort((a, b) => b.AC - a.AC);
      sortVal = "ACUp";
      document.getElementById("AC").innerHTML = `AC <i class="fa-solid fa-caret-up"></i>`;
    } else {
      monsters.sort((a, b) => a.AC - b.AC);
      sortVal = "ACDown";
      document.getElementById("AC").innerHTML = `AC <i class="fa-solid fa-caret-down"></i>`;
    }
  }
  printMonsters();
}

function printMonsters() {
  const tb = document.getElementById("tb");
  let tr = [];
  let i = 0;
  monsters.forEach((monster) => {
    tr.push(
      "<tr id=" +
        monster.Name +
        " data-id=" +
        i +
        "><td style='cursor:pointer' onclick='clickRows(" +
        i +
        ")'>" +
        monster.Name +
        "</td>"
    );
    tr.push("<td>" + monster.HP + "</td>");
    tr.push("<td>" + monster.AC + "</td>");
    tr.push("<td>" + monster.Challenge + "</td>");
    i++;
  });
  tb.innerHTML = tr.join("");
}

function closeNav() {
  document.getElementById("navMenu").style.width = "0%";
}

function openNav() {
  document.getElementById("navMenu").style.width = "66%";
}

function clickRows(idx, monName) {
  console.log("clicked");
  // const rowIndex = this.getAttribute("data-index");
  const jsonData = monsters[idx]; // Implement this function to get the JSON data for the row index
  const uniqueId = Date.now(); // Unique identifier for the new page
  localStorage.setItem(`rowData-${uniqueId}`, JSON.stringify(jsonData));
  window.open(`newpage.html?id=${uniqueId}`, "_blank");
}

document.addEventListener("DOMContentLoaded", function () {
  const table = document.getElementById("tb");
  const rows = table.getElementsByTagName("tr");
  for (let i = 0; i < rows.length; i++) {
    rows[i].addEventListener("click", function () {
      console.log("clicked");
      const rowIndex = this.getAttribute("data-index");
      const jsonData = getDataForRow(rowIndex); // Implement this function to get the JSON data for the row index
      const uniqueId = Date.now(); // Unique identifier for the new page
      localStorage.setItem(`rowData-${uniqueId}`, JSON.stringify(jsonData));
      window.open(`newpage.html?id=${uniqueId}`, "_blank");
    });
  }
});

function getDataForRow(index) {
  // Implement this function to get the JSON data for the given row index
  // For demonstration purposes, return a sample JSON object
  const jsonData = [
    { name: "John Doe", age: 30, email: "john.doe@example.com" },
    { name: "Jane Smith", age: 25, email: "jane.smith@example.com" },
  ];
  return jsonData[index];
}