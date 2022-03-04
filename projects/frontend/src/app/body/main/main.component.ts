import { Component, OnInit } from "@angular/core";
import { HelperService } from "../../services/helper.service";

@Component({
  selector: "app-main",
  templateUrl: "./main.component.html",
  styleUrls: ["./main.component.scss"],
})
export class MainComponent implements OnInit {
  isDarkMode: boolean;
  targetID = "default";
  constructor(private helperservice: HelperService) {
    this.isDarkMode = this.helperservice.isDarkMode;
    this.helperservice.ThemeChanged$.subscribe((r) => {
      this.isDarkMode = r;
    });
  }

  ngOnInit(): void {}

  getClassName(event) {
    event.stopPropagation();
    event.preventDefault();
    this.targetID = event.target.id;
  }
}
