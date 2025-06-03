import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { LoginModel } from '../models/login.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private baseUrl = 'https://gastosappapi-edd8acbtd2dkdxgh.mexicocentral-01.azurewebsites.net/api/auth';

  constructor(private http: HttpClient) {}

  login(credentials: LoginModel): Observable<boolean> {
    return this.http.post<boolean>(`${this.baseUrl}/login`, credentials);
  }

  logout() {
    localStorage.removeItem('usuario');
  }

  isLoggedIn(): boolean {
    return !!localStorage.getItem('usuario');
  }
}
