import { Component, OnInit } from "@angular/core";
import { HelperService } from "projects/frontend/src/app/services/helper.service";

@Component({
  selector: "app-total-records",
  templateUrl: "./total-records.component.html",
  styleUrls: ["./total-records.component.scss"],
})
export class TotalRecordsComponent implements OnInit {
  isDarkMode: boolean;
  constructor(private helperservice: HelperService) {
    this.isDarkMode = this.helperservice.isDarkMode;
    this.helperservice.ThemeChanged$.subscribe((r) => {
      this.isDarkMode = r;
    });
  }

  ngOnInit(): void {}
}
