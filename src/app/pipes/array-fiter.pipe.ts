import { JsonPipe } from '@angular/common';
import { Pipe, PipeTransform } from '@angular/core';
import { Speakers } from '../_models/speakers';

@Pipe({
  name: 'arrayFiter'
})
export class ArrayFiterPipe implements PipeTransform {

  transform(value: Speakers[], filter: string): any {
    if (!filter) return value;
    if (!value) return null;

    return value.filter(obj => {
      const data = Object.values(obj);
      data.push(`${data[1]} ${data[2]}`);
      return JSON.stringify(data).toLowerCase().includes(filter)
    })
  }
}
