const player1 = {
  name: "Китана",
  hp: 65,
  img: "http://reactmarathon-api.herokuapp.com/assets/kitana.gif",
  weapon: ["Боевые вееры"],
  attack: function (name) {
    console.log(name + "Fight...");
  },
};

const player2 = {
  name: "Соня",
  hp: 80,
  img: "http://reactmarathon-api.herokuapp.com/assets/sonya.gif",
  weapon: ["Бамбуковые палки"],
  attack: function (name) {
    console.log(name + "Fight...");
  },
};

function createPlayer(classPlayer, player) {
  const $player = document.createElement("div");
  $player.classList.add(classPlayer);

  const $progressbar = document.createElement("div");
  $progressbar.classList.add("progressbar");

  const $life = document.createElement("div");
  $life.style.width = `${player.hp}%`;
  $life.classList.add("life");

  const $name = document.createElement("div");
  $name.classList.add("name");
  $name.innerText = player.name;

  $progressbar.appendChild($life);
  $progressbar.appendChild($name);

  const $character = document.createElement("div");
  $character.classList.add("character");

  const $img = document.createElement("img");
  $img.src = player.img;
  $character.appendChild($img);

  $player.appendChild($progressbar);
  $player.appendChild($character);
  const $arenas = document.querySelector(".arenas");
  $arenas.appendChild($player);
}

createPlayer("player1", player1);
createPlayer("player2", player2);
