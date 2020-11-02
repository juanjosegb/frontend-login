import { Component } from "@angular/core";
import { UsersService } from "../../services/users.service";
import {Router} from "@angular/router";

@Component({
  selector: "app-register",
  templateUrl: "./done.component.html",
  styleUrls: ["./done.component.css"]
})
export class DoneComponent {
  constructor(public userService: UsersService, public router: Router) {}
}
