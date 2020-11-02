import {Injectable} from "@angular/core";
import {HttpClient, HttpParams} from "@angular/common/http";
import {Observable} from "rxjs";
import {CookieService} from "ngx-cookie-service";

@Injectable({
  providedIn: "root"
})
export class UsersService {
  constructor(private http: HttpClient, private cookies: CookieService) {
  }

  login(user: any): Observable<any> {
    let body = new HttpParams();
    body = body.set('email', user.email);
    body = body.set('password', user.password);
    return this.http.post("http://127.0.0.1:8000/login", body);
  }

  register(user: any): Observable<any> {
    let body = new HttpParams();
    body = body.set('email', user.email);
    body = body.set('password', user.password);
    body = body.set('confirmPassword', user.confirmPassword);
    return this.http.post("http://127.0.0.1:8000/register", body);
  }

  setToken(token: string) {
    this.cookies.set("token", token);
  }

  getToken() {
    return this.cookies.get("token");
  }

  getUser() {
    return this.http.get("https://reqres.in/api/users/2");
  }
}
