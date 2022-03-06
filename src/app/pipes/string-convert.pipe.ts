import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'stringConvert'
})
export class StringConvertPipe implements PipeTransform {

  transform(value: string, ...args: unknown[]): unknown {
    return value.replaceAll('-', ' ');
    // or use es2020
    // return value.replace(/-/g, ' ');
  }

}
