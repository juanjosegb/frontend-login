import {Component} from "@angular/core";
import {UsersService} from "../../services/users.service";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: "check-token",
  templateUrl: "./check-token.component.html",
  styleUrls: ["./check-token.component.scss"]
})
export class CheckTokenComponent {
  email: string;
  token: string;
  errors: [];

  constructor(public userService: UsersService, public router: Router, private activatedRoute: ActivatedRoute) {
    this.activatedRoute.queryParams.subscribe(params => {
      this.token = params['token'];
    });
  }

  ngOnInit() {
    const user = {email: this.email, token: this.activatedRoute.snapshot.paramMap.get("token")};
    this.userService.checkToken(user).subscribe(
      data => {
        this.router.navigateByUrl("/change-password");
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
