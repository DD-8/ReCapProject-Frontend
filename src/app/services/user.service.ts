import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ResponseModel } from '../models/responseModel';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  apiUrl = 'https://localhost:44330/api/users/get-all';

  constructor(private httpClient:HttpClient) { }

  getUsers():Observable<ResponseModel<User>>{
    return this.httpClient.get<ResponseModel<User>>(this.apiUrl);
  }
}
