import { AfterViewInit, Component, OnInit } from '@angular/core';
import { Food } from '../game-engine/food';
import { outsideGrid } from '../game-engine/gameboard-grid.util';
import { Snake } from '../game-engine/snake';
import {  OnDestroy } from "@angular/core";
import { Subscription } from "rxjs";
import { AuthService } from "../signup/auth.service";

@Component({
  selector: 'app-game-board',
  templateUrl: './game-board.component.html',
  styleUrls: ['./game-board.component.css']
})
export class GameBoardComponent implements OnInit, OnDestroy, AfterViewInit {
  isAuthenticated =false;
  private userSub: Subscription;

  lastRenderTime = 0
  gameOver = false
  gameBoard: any;
  SNAKE_SPEED = 1;
  snake = new Snake();
  food = new Food(this.snake);
  constructor(private authService: AuthService) { }

  ngOnInit(): void {
    this.snake.listenToInputs();

    this.userSub= this.authService.user.subscribe(user => {
      this.isAuthenticated = !!user;
      console.log(!user);
      console.log(!!user);

  });

  this.authService.autoLogin();
  }

  ngOnDestroy(){
    this.userSub.unsubscribe();
    
}

onLogout(){
  this.authService.logout();
}

  ngAfterViewInit(){
    this.gameBoard = document.querySelector('.game-board');
    window.requestAnimationFrame(this.start.bind(this));
  }


  start(currentTime: any) {
    if(this.gameOver) return console.log('Game Over');

    window.requestAnimationFrame(this.start.bind(this));
    const secondsSinceLastRender = (currentTime - this.lastRenderTime) / 1000;
    if (secondsSinceLastRender < 1 / this.snakeSpeed) return;
    this.lastRenderTime = currentTime;
    // console.log("rendering");
    this.update();
    this.draw();
  }


  get snakeSpeed() {
    const score = this.food.currentScore;
    if(score < 10) return 4;
    if(score > 10 &&  score < 15 ) return 5;
    if(score > 15 && score < 20 ) return 6;
    return 7;
  }

  dpadMovement(direction: string) {
    this.snake.input.setDirection(direction);
  }

  update() {
    this.snake.update();
    this.food.update();
    this.checkDeath();
  }

  draw() {
    this.gameBoard.innerHTML = '';
    this.snake.draw(this.gameBoard);
    this.food.draw(this.gameBoard);
  }

  checkDeath() {
    this.gameOver = outsideGrid(this.snake.getSnakeHead()) || this.snake.snakeIntersection();
    if(!this.gameOver) return;
    this.gameBoard.classList.add("blur");
  }

  restart() {
    window.location.reload();
  }

}
