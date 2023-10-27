import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  baseUrlAuth: string = environment.baseUrl;

  constructor(private http: HttpClient, private router: Router) {}

  login(email: string, password: string) {
    return this.http
      .post<{ token: string }>(`${this.baseUrlAuth}/login`, {
        email,
        password,
      })
      .pipe(
        map((res) => {
          if (res.token) {
            localStorage.setItem('token', res.token);
          }
          return null;
        })
      );
  }

  logout() {
    localStorage.removeItem('token');
    this.router.navigate(['auth']);
  }

  parseJwt(token: string) {
    let base64Url = token.split('.')[1];
    let base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
    let jsonPayload = decodeURIComponent(
      window
        .atob(base64)
        .split('')
        .map(function (c) {
          return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
        })
        .join('')
    );
    return JSON.parse(jsonPayload);
  }

  public get token(): string | null {
    return localStorage.getItem('token');
  }

  public get user(): any {
    if (this.token) {
      const userJwt = this.parseJwt;
      return userJwt;
    } else {
      return null;
    }
  }
}
