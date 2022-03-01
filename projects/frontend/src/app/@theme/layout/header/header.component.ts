import { Component, Input, OnInit } from "@angular/core";

@Component({
  selector: "elephy-header",
  templateUrl: "./header.component.html",
  styleUrls: ["./header.component.scss"],
})
export class HeaderComponent implements OnInit {
  themeMode = false;
  //@Input() headerType: string = 'GUEST';
  public homePageURL: string = "/";
  public loggedUser: any;
  headerType: string = "GUEST";

  constructor() {}

  ngOnInit(): void {
    /* console.log(this.loggedUser) */
  }
}
