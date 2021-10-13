import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CarDetailsComponent } from './components/car-details/car-details.component';
import { CarComponent } from './components/car/car.component';
import { LoginComponent } from './components/login/login.component';
import { LoginGuard } from './guards/login.guard';

const routes: Routes = [
  {path:"", pathMatch:"full", component:CarComponent},
  {path:"cars", component:CarComponent, canActivate: [LoginGuard]},
  {path:"cars/brand/:brandId", component:CarComponent, canActivate: [LoginGuard]},
  {path:"cars/color/:colorId", component:CarComponent, canActivate: [LoginGuard]},
  {path:"cars/:carId",component:CarDetailsComponent, canActivate: [LoginGuard]},
  {path:"login", component:LoginComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
