import { Pipe, PipeTransform } from '@angular/core';
import { KeyValuePipe } from '@angular/common';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(items: any, searchText: string) {
    //console.log(items)
    if (!items) {
      return {};
    }
    if (!searchText) {
      return items;
    }
    searchText = searchText.toLocaleLowerCase();
  
    // return items.filter(it => {
    //   // console.log(it.key);
    //   // console.log(it.key.toLocaleLowerCase().includes(searchText));
    //   it.key.toLocaleLowerCase().includes(searchText);
    // });
    let tmp = {};
    for (let k in items) {
      //console.log(k)
      if(k.toLocaleLowerCase().includes(searchText)) {
        tmp[k]=items[k];
      }
    }
    console.log('tmp',tmp);

    return tmp;
  }

}
