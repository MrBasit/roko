import { Component, Input, OnInit } from "@angular/core";
import { HelperService } from "../../../services/helper.service";

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

  constructor(private helperservice: HelperService) {}

  ngOnInit(): void {
    /* console.log(this.loggedUser) */
  }
  changeTheme(e) {
    console.log(e.target.checked);
    this.helperservice.EmitThemeChange(e.target.checked);
  }
}
