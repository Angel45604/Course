import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'word'
})
export class WordPipe implements PipeTransform {

  transform(value: any, ...args: any[]): any {
    return value.replace(/_/g, ' ');
  }

}
