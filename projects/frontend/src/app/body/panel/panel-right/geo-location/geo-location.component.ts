import { Component, OnInit } from "@angular/core";
import { HelperService } from "projects/frontend/src/app/services/helper.service";

@Component({
  selector: "app-geo-location",
  templateUrl: "./geo-location.component.html",
  styleUrls: ["./geo-location.component.scss"],
})
export class GeoLocationComponent implements OnInit {
  isDarkMode = false;
  constructor(private helperservice: HelperService) {
    this.helperservice.ThemeChanged$.subscribe((r) => {
      this.isDarkMode = r;
    });
  }

  ngOnInit(): void {}
}
