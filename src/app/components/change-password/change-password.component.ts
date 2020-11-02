import { Component, OnInit } from "@angular/core";
import { UsersService } from "../../services/users.service";

@Component({
  selector: "app-home",
  templateUrl: "./change-password.component.html",
  styleUrls: ["./change-password.component.css"]
})
export class ChangePasswordComponent implements OnInit {
  constructor(public userService: UsersService) {}
  ngOnInit() {
    this.getUserLogged();
  }
  getUserLogged() {
    this.userService.getUser().subscribe(user => {
      console.log(user);
    });
  }
}
