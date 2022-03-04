import { Component, OnInit } from "@angular/core";
import { HelperService } from "projects/frontend/src/app/services/helper.service";

@Component({
  selector: "app-geo-location",
  templateUrl: "./geo-location.component.html",
  styleUrls: ["./geo-location.component.scss"],
})
export class GeoLocationComponent implements OnInit {
  isDarkMode: boolean;
  constructor(private helperservice: HelperService) {
    this.isDarkMode = this.helperservice.isDarkMode;
    this.helperservice.ThemeChanged$.subscribe((r) => {
      this.isDarkMode = r;
    });
  }

  ngOnInit(): void {}
}
