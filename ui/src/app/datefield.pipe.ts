import { DatePipe } from '@angular/common';
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'datefield'
})
export class DatefieldPipe implements PipeTransform {

  transform(value: string, ...args: string[]): string {
    for (let i = 0; i < value.length; i++) {
      const element = value[i];
      if (element['key'] == args[0] ) {
        element['value'] = new DatePipe('en-US').transform(element['value'], 'dd MMM yyyy')
      }
    }
    return value;
  }

}
