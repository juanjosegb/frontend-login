import { RouterModule } from "@angular/router";
import { LoginComponent } from "./components/login/login.component";
import { RegisterComponent } from "./components/register/register.component";
import { HomeComponent } from "./components/home/home.component";
import {DoneComponent} from "./components/done/done.component";

const appRoutes = [
  { path: "home", component: HomeComponent, pathMatch: "full" },
  { path: "login", component: LoginComponent, pathMatch: "full" },
  { path: "register", component: RegisterComponent, pathMatch: "full" },
  { path: "done", component: DoneComponent, pathMatch: "full" }
];
export const routing = RouterModule.forRoot(appRoutes);
