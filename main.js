const player1 = {
  player: 1,
  name: "Китана",
  hp: 65,
  img: "http://reactmarathon-api.herokuapp.com/assets/kitana.gif",
  weapon: ["Боевые вееры"],
  attack: function (name) {
    console.log(name + "Fight...");
  },
};

const player2 = {
  player: 2,
  name: "Соня",
  hp: 80,
  img: "http://reactmarathon-api.herokuapp.com/assets/sonya.gif",
  weapon: ["Бамбуковые палки"],
  attack: function (name) {
    console.log(name + "Fight...");
  },
};
function createElement(tag, className) {
  const $tag = document.createElement(tag);
  if (className) $tag.classList.add(className);
  return $tag;
}

const $arenas = document.querySelector(".arenas");

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
