import { Pipe, PipeTransform } from '@angular/core';
import { Car } from 'src/app/models/car';

@Pipe({
  name: 'filterPipe'
})
export class FilterPipePipe implements PipeTransform {

  transform(value: Car[], filterText: string): Car[] {
    filterText = filterText ? filterText.toLocaleLowerCase():filterText;
    return filterText ? value.filter((p:Car)=>p.brandName.toLocaleLowerCase().indexOf(filterText)!==-1):value;
  }

}
