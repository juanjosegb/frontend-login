import {Component} from "@angular/core";
import {UsersService} from "../../services/users.service";
import {Router} from "@angular/router";

@Component({
  selector: "forgot",
  templateUrl: "./forgot.component.html",
  styleUrls: ["./forgot.component.scss"]
})
export class ForgotComponent {
  email: string;
  password: string;
  error: string

  constructor(public userService: UsersService, public router: Router) {}

  forgot() {
    const user = {email: this.email, password: this.password};
    this.userService.forgotPassword(user).subscribe(
      data => {
        this.router.navigateByUrl("/login");
      },
      error => {
        this.updateErrors(error.error['errors']);
      }
    );
  }

  updateErrors(error: string) {
    this.error = error;
  }
}
