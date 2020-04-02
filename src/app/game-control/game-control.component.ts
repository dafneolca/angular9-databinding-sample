import { Component, OnInit, Output, EventEmitter } from "@angular/core";

@Component({
  selector: "app-game-control",
  templateUrl: "./game-control.component.html",
  styleUrls: ["./game-control.component.css"]
})
export class GameControlComponent implements OnInit {
  @Output() started = new EventEmitter<number>();
  timer = 0;
  timerStart;

  constructor() {}

  ngOnInit(): void {}

  onStart() {
    this.timerStart = setInterval(() => {
      this.timer++;
      this.started.emit(this.timer);
    }, 1000);
  }

  onStop() {
    console.log("stop");
    clearInterval(this.timerStart);
  }
}
