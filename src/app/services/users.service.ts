import {Injectable} from "@angular/core";
import {HttpClient, HttpHeaders, HttpParams} from "@angular/common/http";
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

  checkToken(user: any): Observable<any> {
    return this.http.get("http://127.0.0.1:8000/reset-password/reset/" + user.token);
  }

  changePassword(user: any): Observable<any> {
    let headers = new HttpHeaders();
    headers = headers.set('Content-Type', 'application/json; charset=utf-8');
    headers = headers.set('password', user.password);
    headers = headers.set('confirmPassword', user.confirmPassword);
    return this.http.put("http://127.0.0.1:8000/reset-password/change-password", {}, {headers: headers});
  }

  setToken(token: string) {
    this.cookies.set("token", token);
  }
}
