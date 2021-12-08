const player1 = {
  name: "Китана",
  hp: 100,
  img: "",
  weapon: ["Боевые вееры"],
  attack: function (name) {
    console.log(name + "Fight...");
  },
};

const player2 = {
  name: "Соня",
  hp: 100,
  img: "",
  weapon: ["Бамбуковые палки"],
  attack: function (name) {
    console.log(name + "Fight...");
  },
};

function createPlayer() {
  const $player1 = document.createElement("div");
  $player1.classList.add("player1");

  const $progressbar = document.createElement("div");
  $progressbar.classList.add("progressbar");

  const $life = document.createElement("div");
  $life.classList.add("life");

  const $name = document.createElement("div");
  $name.classList.add("name");
  $name.innerText = "Китана";

  $progressbar.appendChild($life);
  $progressbar.appendChild($name);

  const $character = document.createElement("div");
  $character.classList.add("character");

  const $img = document.createElement("img");
  $img.src = "http://reactmarathon-api.herokuapp.com/assets/kitana.gif";
  $character.appendChild($img);

  $player1.appendChild($progressbar);
  $player1.appendChild($character);
}
