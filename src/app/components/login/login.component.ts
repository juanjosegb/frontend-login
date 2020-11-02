import {Component} from "@angular/core";
import {UsersService} from "../../services/users.service";
import {Router} from "@angular/router";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.css"]
})
export class LoginComponent {
  email: string;
  password: string;

  constructor(public userService: UsersService, public router: Router) {}

  login() {
    const user = {email: this.email, password: this.password};
    this.userService.login(user).subscribe(
      data => {
        this.router.navigateByUrl("/");
      },
      error => {
        console.log(error);
      }
    );
  }
}
