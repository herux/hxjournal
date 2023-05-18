import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'genderfield'
})
export class GenderfieldPipe implements PipeTransform {

  transform(value: string, ...args: string[]): string {
    for (let i = 0; i < value.length; i++) {
      const element = value[i];
      if (element['key'] == args[0] ) {
        element['value'] = (( element['value'] == 0) ? 'Laki-laki' : 'Perempuan');
      }
    }
    return value;
  }

}
