import { Pipe, PipeTransform } from '@angular/core';
import { LocalizeService } from '../services/localize.service';

@Pipe({
  name: 'localize'
})
export class LocalizePipe implements PipeTransform {

  constructor(private localizeService: LocalizeService) { }

  transform(word: string, lang: string): string {
    return this.localizeService.getLocalizedStr(word, lang);
  }

}
