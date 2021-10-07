import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Car } from 'src/app/models/car';
import { CarImage } from 'src/app/models/car-image';
import { CarImageService } from 'src/app/services/car-image.service';
import { CarService } from 'src/app/services/car.service';

@Component({
  selector: 'app-car-details',
  templateUrl: './car-details.component.html',
  styleUrls: ['./car-details.component.css']
})
export class CarDetailsComponent implements OnInit {

  staticFilesUrl: "https://localhost:44363/";

  carImages!: CarImage[];
  cars: Car[];
  dataLoaded: boolean = false;

  constructor(private carImageService: CarImageService, private carService: CarService, private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params => {
      this.getCarDetailById(params["carId"]);
      this.getCarImagesByCarId(params["carId"]);
    })
  }

  getCarDetailById(carId:number) {
    this.carService.getCarDetailById(carId).subscribe(response => {
      this.cars = response.data;
      this.dataLoaded = response.success;
    })
  }

  getCarImagesByCarId(id: number) {
    this.carImageService.getCarImagesByCarId(id).subscribe(response => {
      this.carImages = response.data;
    })
  }

  setImage() {

    for (let i = 0; i < this.carImages.length; i++) {
      const carImage = this.carImages[i];
      if (carImage.imagePath) {
        return this.staticFilesUrl + carImage.imagePath;
      }
    }
    return this.staticFilesUrl + "/images/default.jpg";
  }

}
