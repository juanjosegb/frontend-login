import { routing } from "./app-routing.module";
import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { AppComponent } from "./app.component";
import { LoginComponent } from "./components/login/login.component";
import { RegisterComponent } from "./components/register/register.component";
import { HttpClientModule } from "@angular/common/http";
import { CookieService } from "ngx-cookie-service";
import { HomeComponent } from "./components/home/home.component";
import {DoneComponent} from "./components/done/done.component";
import {ProfileComponent} from "./components/profile/profile.component";
import {CheckTokenComponent} from "./components/check-token/check-token.component";
import {ChangePasswordComponent} from "./components/change-password/change-password.component";
import {ForgotComponent} from "./components/forgot/forgot.component";

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    HomeComponent,
    DoneComponent,
    ProfileComponent,
    CheckTokenComponent,
    ChangePasswordComponent,
    ForgotComponent
  ],
  imports: [BrowserModule, routing, FormsModule, HttpClientModule],
  providers: [CookieService],
  bootstrap: [AppComponent]
})
export class AppModule {}
