import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'powerToX'
})
export class PowerToXPipe implements PipeTransform {

  transform(value: any, y: number = 2, x: number = value): unknown {
    return Math.pow(x, y);
  }

}
