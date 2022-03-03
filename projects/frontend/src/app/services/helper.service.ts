import { Injectable } from "@angular/core";
import { Subject } from "rxjs";

@Injectable({
  providedIn: "root",
})
export class HelperService {
  private themechange = new Subject<any>();
  ThemeChanged$ = this.themechange.asObservable();
  EmitThemeChange(change: any) {
    this.themechange.next(change);
  }
  constructor() {}
}
