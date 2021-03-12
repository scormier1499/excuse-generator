/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here

  let who = ["My Pokemon", "My snake", "My kid", "My neighbor"];
  let action = ["captured", "swallowed", "shredded", "broke"];
  let what = ["monitor", "instructions", "the car"];
  let when = [
    "before the presentation",
    "right on before arrival",
    "when I finished",
    "during my conference",
    "while I was on my way"
  ];

  let sentence =
    who[getRndInteger(0, who.length - 1)] +
    " " +
    action[getRndInteger(0, action.length - 1)] +
    " " +
    what[getRndInteger(0, what.length - 1)] +
    " " +
    when[getRndInteger(0, when.length - 1)] +
    " ";

  let target = document.querySelector("#excuse");

  target.innerHTML = sentence;

  console.log(getRndInteger);
};

function getRndInteger(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
