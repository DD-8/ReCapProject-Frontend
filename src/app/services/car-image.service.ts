import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { CarImage } from '../models/car-image';
import { ResponseModel } from '../models/responseModel';

@Injectable({
  providedIn: 'root'
})
export class CarImageService {
  apiUrl="https://localhost:44323/api/"
  constructor(private httpClient:HttpClient) { }

  getCarImagesByCarId(id:number):Observable<ResponseModel<CarImage>>{
    let newPath = this.apiUrl+"/carimages/get-images-by-car-id?carId="+id;
    return this.httpClient.get<ResponseModel<CarImage>>(newPath)
  }
}