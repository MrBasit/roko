import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-main",
  templateUrl: "./main.component.html",
  styleUrls: ["./main.component.scss"],
})
export class MainComponent implements OnInit {
  isDarkMode = true;
  targetID = "default";
  constructor() {}

  ngOnInit(): void {}

  getClassName(event) {
    event.stopPropagation();
    event.preventDefault();
    this.targetID = event.target.id;
  }
}
