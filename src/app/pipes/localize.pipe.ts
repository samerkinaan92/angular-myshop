import { Pipe, PipeTransform } from '@angular/core';
import { words } from '../../assets/lang/lang.json';

@Pipe({
  name: 'localize'
})
export class LocalizePipe implements PipeTransform {

  transform(value: string, key: string): string {
    for (const word of words) {
      if(word.en === value){
        switch(key){
          case "he":
            return word.he;
          default:
            return word.en;
        }
      }
    }
    return value;
  }

}
