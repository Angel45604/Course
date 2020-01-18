import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'myPipe'
})
export class MyPipePipe implements PipeTransform {
  i = 0;
  transform(items: any, pepe: Array<string>){
    let exit = {}
    for(let i in items) {
      if(pepe.includes(i)) {
        exit[i] = items[i];
      }
    }

    if (Object.entries(exit).length === 0 && exit.constructor === Object) {
      console.log('NO EXIT')
      return items;
    }
    
    return exit;
  }
}
