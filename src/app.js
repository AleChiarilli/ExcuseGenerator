/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here
  let who = ["the dog", "my granma", "his turtle", "my bird"];
  let what = ["eat", "pissed", "crushed", "broked"];
  let when = [
    "before the class",
    "right in time",
    "when I finished",
    "during my lunch",
    "while I was praying"
  ];
  const randomWho = Math.floor(Math.random() * 3);
  const randomWhat = Math.floor(Math.random() * 3);
  const randomWhen = Math.floor(Math.random() * 4);
  const generatedExcuse =
    who[randomWho] + " " + what[randomWhat] + " " + when[randomWhen];
  console.log(generatedExcuse);
  const excuseElement = document.getElementById("excuse");
  excuseElement.innerText = generatedExcuse;
};
