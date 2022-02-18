import { analyzeAndValidateNgModules } from "@angular/compiler";
import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-collapsible",
  templateUrl: "./collapsible.component.html",
  styleUrls: ["./collapsible.component.scss"],
})
export class CollapsibleComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
  // collapsible = document
  //   .querySelector(".panel-heading span.clickable")
  //   ?.addEventListener("click", function (e) {
  //     var $this = $(this);
  //     if (!$this.hasClass("panel-collapsed")) {
  //       $this.parents(".panel").find(".panel-body").slideUp();
  //       $this.addClass("panel-collapsed");
  //       $this
  //         .find("i")
  //         .removeClass("glyphicon-chevron-down")
  //         .addClass("glyphicon-chevron-up");
  //     } else {
  //       $this.parents(".panel").find(".panel-body").slideDown();
  //       $this.removeClass("panel-collapsed");
  //       $this
  //         .find("i")
  //         .removeClass("glyphicon-chevron-up")
  //         .addClass("glyphicon-chevron-down");
  //     }
  //   });
}
