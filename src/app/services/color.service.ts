import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Color } from '../models/color';
import { ResponseModel } from '../models/responseModel';

@Injectable({
  providedIn: 'root'
})
export class ColorService {
  apiUrl = 'https://localhost:44330/api/colors/get-all';

  constructor(private httpClient: HttpClient) { }

  getColors():Observable<ResponseModel<Color>>{
    return this.httpClient.get<ResponseModel<Color>>(this.apiUrl);
  }
}
