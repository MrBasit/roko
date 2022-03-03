import { analyzeAndValidateNgModules } from "@angular/compiler";
import { Component, OnInit } from "@angular/core";
import { HelperService } from "../../../services/helper.service";

@Component({
  selector: "app-collapsible",
  templateUrl: "./collapsible.component.html",
  styleUrls: ["./collapsible.component.scss"],
})
export class CollapsibleComponent implements OnInit {
  collapse = false;
  isDarkMode = false;
  constructor(private helperservice: HelperService) {
    this.helperservice.ThemeChanged$.subscribe((r) => {
      this.isDarkMode = r;
    });
  }

  ngOnInit(): void {}
  openCollapsible(e) {
    this.collapse = !this.collapse;
  }
}
