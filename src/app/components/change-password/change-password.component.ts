import {Component} from "@angular/core";
import {UsersService} from "../../services/users.service";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: "app-home",
  templateUrl: "./change-password.component.html",
  styleUrls: ["./change-password.component.css"]
})
export class ChangePasswordComponent {
  password: string;
  confirmPassword: string;
  token: string;
  userId: string;
  errors: [];

  constructor(public userService: UsersService, public router: Router, private activatedRoute: ActivatedRoute) {
    this.activatedRoute.queryParams.subscribe(params => {
      this.token = params['token'];
      this.userId = params['userId'];
    });
  }

  change() {
    const user = {
      password: this.password,
      confirmPassword: this.confirmPassword,
      token: this.token,
      userId: this.userId
    };
    this.userService.changePassword(user).subscribe(
      data => {
        this.router.navigate(['/login']);
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
