import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Brand } from '../models/brand';
import { ResponseModel } from '../models/responseModel';

@Injectable({
  providedIn: 'root'
})
export class BrandService {
  apiUrl = 'https://localhost:44330/api/brands/get-all';

  constructor(private httpClient: HttpClient) { }

  getBrands():Observable<ResponseModel<Brand>>{
    return this.httpClient.get<ResponseModel<Brand>>(this.apiUrl);
  }
}
