import { Component } from "@angular/core";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  title = "angular-pipe-example";
  data = new Promise(resolve => {
    setInterval(() => {
      resolve("hello");
    }, 1000);
  });
}
