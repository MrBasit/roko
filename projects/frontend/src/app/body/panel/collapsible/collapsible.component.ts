import { analyzeAndValidateNgModules } from "@angular/compiler";
import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-collapsible",
  templateUrl: "./collapsible.component.html",
  styleUrls: ["./collapsible.component.scss"],
})
export class CollapsibleComponent implements OnInit {
  collapse = false;
  isDarkMode = true;
  constructor() {}

  ngOnInit(): void {}
  openCollapsible(e) {
    this.collapse = !this.collapse;
  }
}
