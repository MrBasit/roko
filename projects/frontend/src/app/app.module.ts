import { ToastService } from "./@core/lib/toast.service";

import { SharedModule } from "./shared/shared.module";
import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { HttpClientModule, HTTP_INTERCEPTORS } from "@angular/common/http";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { NgHttpLoaderModule } from "ng-http-loader";
import { ToastrModule } from "ngx-toastr";
import { GlobalHttpInterceptor } from "./@core/lib";
import { MainComponent } from "./body/main/main.component";
import { PanelComponent } from "./body/panel/panel.component";
import { PanelHeaderComponent } from "./body/panel/panel-header/panel-header.component";
import { CollapsibleComponent } from "./body/panel/collapsible/collapsible.component";
import { PanelRightComponent } from "./body/panel/panel-right/panel-right.component";
import { TotalRecordsComponent } from "./body/panel/panel-right/total-records/total-records.component";
import { GeoLocationComponent } from "./body/panel/panel-right/geo-location/geo-location.component";
import { ParagraphsComponent } from "./body/panel/panel-right/paragraphs/paragraphs.component";
import { ComponentHolderComponent } from "./component-holder/component-holder.component";
import { RouterModule } from "@angular/router";

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    PanelComponent,
    PanelHeaderComponent,
    CollapsibleComponent,
    PanelRightComponent,
    TotalRecordsComponent,
    GeoLocationComponent,
    ParagraphsComponent,
    ComponentHolderComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    SharedModule,
    NgHttpLoaderModule.forRoot(),
    ToastrModule.forRoot(),
    AppRoutingModule,
    RouterModule.forRoot([
      { path: "data", component: PanelComponent },
      { path: "holder", component: ComponentHolderComponent },
    ]),
  ],
  providers: [
    ToastService,
    // {
    //   provide: HTTP_INTERCEPTORS,
    //   useClass: TokenInterceptor,
    //   multi: true
    // },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: GlobalHttpInterceptor,
      multi: true,
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
