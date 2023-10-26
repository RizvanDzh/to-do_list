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
    this.router.navigate(['login']);
  }
}
