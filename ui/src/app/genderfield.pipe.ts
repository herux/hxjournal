import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'genderfield'
})
export class GenderfieldPipe implements PipeTransform {

  transform(value: string, ...args: string[]): string {
    for (let i = 0; i < value.length; i++) {
      const element = value[i];
      if (element['key'] == args[0] ) {
        if (element['value'] == 0) {
          element['value'] = 'Laki-laki'
        }else{
          element['value'] = 'Perempuan'
        }
        
      }
    }
    return value;
  }

}
