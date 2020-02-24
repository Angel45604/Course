import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'trim'
})
export class TrimPipe implements PipeTransform {

  transform(value: String, ...args: any[]): any {
    console.log(value.replace(/\s/g, ''), 'AAAAAAAA')
    return value.replace(/\s/g, '');
  }

}
