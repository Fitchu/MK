const player1 = {
  player: 1,
  name: "Китана",
  hp: 100,
  img: "http://reactmarathon-api.herokuapp.com/assets/kitana.gif",
  weapon: ["Боевые вееры"],
  attack: function (name) {
    console.log(name + "Fight...");
  },
};

const player2 = {
  player: 2,
  name: "Соня",
  hp: 100,
  img: "http://reactmarathon-api.herokuapp.com/assets/sonya.gif",
  weapon: ["Бамбуковые палки"],
  attack: function (name) {
    console.log(name + "Fight...");
  },
};

const $arenas = document.querySelector(".arenas");

const $randomButton = document.querySelector(".button");

function createElement(tag, className) {
  const $tag = document.createElement(tag);
  if (className) $tag.classList.add(className);
  return $tag;
}
function createPlayer(playerObj) {
  const $player = createElement("div", `player${playerObj.player}`);
  const $progressbar = createElement("div", "progressbar");
  const $life = createElement("div", "life");
  const $name = createElement("div", "name");
  const $character = createElement("div", "character");
  const $img = createElement("img");

  $life.style.width = `${playerObj.hp}%`;
  $name.innerText = playerObj.name;
  $img.src = playerObj.img;

  $progressbar.appendChild($life);
  $progressbar.appendChild($name);
  $character.appendChild($img);
  $player.appendChild($progressbar);
  $player.appendChild($character);
  return $player;
}
$arenas.appendChild(createPlayer(player1));
$arenas.appendChild(createPlayer(player2));

const $player1HP = document.querySelector(`.player${player1.player} .life`);
const $player2HP = document.querySelector(`.player${player2.player} .life`);

function getRandomNumber() {
  return Math.ceil(Math.random() * 20);
}
function changeHP(player, $hp) {
  player.hp -= getRandomNumber();
  if (player.hp <= 0) player.hp = 0;
  $hp.style.width = `${player.hp}%`;
}
function playBattle(player1, player2) {
  console.log($player1HP);
  changeHP(player1, $player1HP);
  changeHP(player2, $player2HP);
  if (player1.hp <= 0 && player2.hp > 0) {
    getFinishMessage(player2.name, "wins");
  } else if (player2.hp <= 0 && player1.hp > 0) {
    getFinishMessage(player1.name, "wins");
  } else if (player2.hp <= 0 && player1.hp <= 0) getFinishMessage("dead heat");
}

function getFinishMessage(name = "", message = "") {
  const $title = createElement("div", "finishTitle");
  $title.innerText = `${name} ${message}`;
  $arenas.appendChild($title);
  $randomButton.disabled = true;
}
$randomButton.addEventListener("click", function () {
  playBattle(player1, player2);
});
