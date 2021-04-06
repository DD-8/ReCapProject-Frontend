import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Rental } from '../models/rental';
import { ResponseModel } from '../models/responseModel';

@Injectable({
  providedIn: 'root'
})
export class RentalService {
  apiUrl = 'https://localhost:44330/api/rentals/get-rentals-detail';

  constructor(private httpClient: HttpClient) { }

  getRentals():Observable<ResponseModel<Rental>>{
    return this.httpClient.get<ResponseModel<Rental>>(this.apiUrl);
  }
}
