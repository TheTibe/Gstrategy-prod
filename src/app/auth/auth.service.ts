import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable, catchError } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private baseUrl = environment.apiUrl;
  private headers = new HttpHeaders({
    'Authorization': environment.apiKey,
    'Content-Type': 'application/json'
  });
  constructor(private http: HttpClient) { }

  register(userData: any): Observable<any> {

    return this.http.post(`${this.baseUrl}/users`, userData, { headers: this.headers });
  }
  
  login(credentials: any): Observable<any> {
    return this.http.post(`${this.baseUrl}/users/login`, credentials, { headers: this.headers });
  }
}
