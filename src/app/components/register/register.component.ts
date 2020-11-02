import {Component, Output} from "@angular/core";
import {UsersService} from "../../services/users.service";
import {Router} from "@angular/router";

@Component({
  selector: "register",
  templateUrl: "./register.component.html",
  styleUrls: ["./register.component.scss"]
})
export class RegisterComponent {
  email: string;
  password: string;
  confirmPassword: string;
  errors: [];

  constructor(public userService: UsersService, public router: Router) {}

  register() {
    const user = {email: this.email, password: this.password, confirmPassword: this.confirmPassword};
    this.userService.register(user).subscribe(
      data => {
        this.userService.setToken(data.token);
        this.router.navigate(['/done']);
      },
      error => {
        this.updateErrors(error.error['errors']);
      }
    );
  }
  updateErrors(errors: []) {
    this.errors = errors;
  }
}
