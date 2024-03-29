import { Component, OnInit } from '@angular/core';
import { Brand } from 'src/app/models/brand';
import { BrandService } from 'src/app/services/brand.service';

@Component({
  selector: 'app-brand',
  templateUrl: './brand.component.html',
  styleUrls: ['./brand.component.css']
})
export class BrandComponent implements OnInit {
  brands: Brand[];
  currentBrand:Brand = Object.assign({id: 0, name: ""});

  constructor(private brandService:BrandService) { }

  ngOnInit(): void {
    this.getBrands();
  }

  getBrands(){
    this.brandService.getBrands().subscribe(response =>{
      this.brands = response.data;
    })
  }

  setCurrentBrand(brand:Brand){
    this.currentBrand=brand;
  }

  setAllBrand() {
    this.currentBrand = Object.assign({id: 0, name: ""});
  }

  getCurrentBrandClass(brand:Brand){
    if(brand == this.currentBrand){
      return "list-group-item active"
    }else{
      return "list-group-item"
    }
  }

  getAllBrandClass(){
    if(this.currentBrand.id == 0){
      return "list-group-item active"
    }else{
      return "list-group-item"
    }
  }

}
