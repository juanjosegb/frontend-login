import { Component, OnInit } from "@angular/core";
import { UsersService } from "../../services/users.service";

@Component({
  selector: "app-home",
  templateUrl: "./check-password.component.html",
  styleUrls: ["./check-password.component.css"]
})
export class CheckPasswordComponent implements OnInit {
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
