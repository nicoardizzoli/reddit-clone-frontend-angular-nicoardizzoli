import { LoginResponsePayload } from './../login/login-response.payload';
import { LoginRequestPayload } from './../login/login-request.payload';
import { SignupRequestPayload } from './../signup/signup-request.payload';
import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { map, Observable, tap } from 'rxjs';
import { LocalStorageService } from 'ngx-webstorage';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private httpClient: HttpClient, private localStorage: LocalStorageService) {
  }


  signup(signupRequestPayload: SignupRequestPayload) : Observable<any> {
    return this.httpClient.post('http://localhost:8080/api/auth/signup',signupRequestPayload, {responseType: 'text'});
  }

  login(loginRequestPayload: LoginRequestPayload): Observable<boolean> {
    return this.httpClient.post<LoginResponsePayload>('http://localhost:8080/api/auth/login', loginRequestPayload)
      .pipe(map(data => {
        this.localStorage.store('authenticationToken', data.authenticationToken);
        this.localStorage.store('username', data.username);
        this.localStorage.store('refreshToken', data.refreshToken);
        this.localStorage.store('expiresAt', data.expiresAt);

        return true;
      }));


  }

  getJwtToken(): string {
    return this.localStorage.retrieve('authenticationToken');
  }

  refreshToken(){
    const refreshTokenPayload = {
      refreshToken: this.getRefreshToken(),
      username: this.getUsername()
    }

    return this.httpClient.post<LoginResponsePayload>('http://localhost:8080/api/auth/refresh/token', refreshTokenPayload)
            .pipe(tap(response => {
              this.localStorage.store('authenticationToken', response.authenticationToken);
              this.localStorage.store('expiresAt', response.expiresAt)
            }))
  }

  getRefreshToken(){
    return this.localStorage.retrieve('refreshToken');
  }
  getUsername(){
    return this.localStorage.retrieve('username');
  }

}
