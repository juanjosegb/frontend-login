import { RouterModule } from "@angular/router";
import { LoginComponent } from "./components/login/login.component";
import { RegisterComponent } from "./components/register/register.component";
import { HomeComponent } from "./components/home/home.component";
import {DoneComponent} from "./components/done/done.component";
import {ProfileComponent} from "./components/profile/profile.component";
import {CheckTokenComponent} from "./components/check-token/check-token.component";
import {ChangePasswordComponent} from "./components/change-password/change-password.component";

const appRoutes = [
  { path: "", component: HomeComponent, pathMatch: "full" },
  { path: "profile", component: ProfileComponent, pathMatch: "full" },
  { path: "login", component: LoginComponent, pathMatch: "full" },
  { path: "register", component: RegisterComponent, pathMatch: "full" },
  { path: "done", component: DoneComponent, pathMatch: "full" },
  { path: "reset/:token", component: CheckTokenComponent, pathMatch: "full" },
  { path: "change-password", component: ChangePasswordComponent, pathMatch: "full" },
];
export const routing = RouterModule.forRoot(appRoutes);
