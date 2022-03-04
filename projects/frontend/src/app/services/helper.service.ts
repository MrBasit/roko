import { Injectable } from "@angular/core";
import { Subject } from "rxjs";

@Injectable({
  providedIn: "root",
})
export class HelperService {
  isDarkMode = false;
  private themechange = new Subject<any>();
  ThemeChanged$ = this.themechange.asObservable();
  EmitThemeChange(change: any) {
    this.isDarkMode = change;
    this.themechange.next(change);
  }
  constructor() {}
}
