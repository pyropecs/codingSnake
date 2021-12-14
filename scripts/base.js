import {
  SNAKE_SPEED,
  update as updateSnake,
  draw as drawSnake,
  getSnakeHead,
  snakeIntersection,
} from "./snake.js";
import { update as updateFood, draw as drawFood } from "./food.js";
import { outsideGrid } from "./grid.js";

let lastRenderTime = 0;
let gameOver = false;
const gameBoard = document.getElementById("game-board");
function main(currentTime) {
  window.requestAnimationFrame(main);
  if (gameOver) {
    alert("you lose");

    return;
  }
  const secondsLastRender = (currentTime - lastRenderTime) / 100;
  if (secondsLastRender < 1 / SNAKE_SPEED) return;
  lastRenderTime = currentTime;
  update();
  draw(gameBoard);
}

function update() {
  updateSnake();
  updateFood();
  checkDeath();
}
function draw(gameBoard) {
  gameBoard.innerHTML = "";
  drawSnake(gameBoard);
  drawFood(gameBoard);
}
function checkDeath() {
  gameOver = outsideGrid(getSnakeHead()) || snakeIntersection();
}

window.requestAnimationFrame(main);
