import { Pipe, PipeTransform } from '@angular/core';
import { KeyValuePipe } from '@angular/common';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(items: Array<Object>, searchText: string) {
    if (!items) {
      return [];
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
    let tmp = [];
    for (let k of items) {
      //console.log(k)
      if(k['title'].toLocaleLowerCase().includes(searchText)) {
        tmp.push(k);
      }
    }
    //console.log('Items', items)
    //console.log('tmp',tmp);

    return tmp;
  }

}
