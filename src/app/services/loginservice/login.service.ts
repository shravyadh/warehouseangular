import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { API_LOGIN_PATH } from 'src/environments/environment';
import { User } from 'src/app/models/user';
import { Role } from 'src/app/models/role';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http : HttpClient) { }

  validate( user : User ) : Observable<User>
  {
    
    return this.http.post<User>(API_LOGIN_PATH, user);
  }
}
