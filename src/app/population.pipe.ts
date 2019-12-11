import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'population'
})
export class PopulationPipe implements PipeTransform {

  transform(value: string, ...args: any[]): any {
    if ( value.length > 6) {
      return value.slice(-value.length, -6).replace(/(.)(?=(.{3})+$)/g, '$1,') + ' milion';
    }
    if (value.length <= 6){
      return value.toLocaleString().replace(/(.)(?=(.{3})+$)/g, '$1,');
    }
  }

}
