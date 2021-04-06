import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Car } from '../models/car';
import { ResponseModel } from '../models/responseModel';

@Injectable({
  providedIn: 'root'
})
export class CarService {

  apiUrl = 'https://localhost:44330/api/';

  constructor(private httpClient: HttpClient) { }

  getCars():Observable<ResponseModel<Car>>{
    let newPath = this.apiUrl+"cars/get-cars-detail"
    return this.httpClient.get<ResponseModel<Car>>(newPath);
  }

  getCarsByBrand(id:number):Observable<ResponseModel<Car>> {
    let newPath = this.apiUrl+"cars/get-cars-by-brand-id?brandId="+id
    return this.httpClient.get<ResponseModel<Car>>(newPath);
  }

  getCarsByColor(id:number):Observable<ResponseModel<Car>> {
    let newPath = this.apiUrl+"cars/get-cars-by-color-id?colorId="+id
    return this.httpClient.get<ResponseModel<Car>>(newPath);
  }

  getCarDetailById(id:number):Observable<ResponseModel<Car>>{
    let newPath = this.apiUrl+"cars/get-car-detail-by-id?carId="+id
    return this.httpClient.get<ResponseModel<Car>>(newPath);
  }
}
