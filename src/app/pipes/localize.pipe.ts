import { Pipe, PipeTransform } from '@angular/core';
import { LocalizeService } from '../services/localize.service';

@Pipe({
  name: 'localize',
  pure: false
})
export class LocalizePipe implements PipeTransform {

  constructor(private localizeService: LocalizeService){}

  transform(value: string): string {
    return this.localizeService.getLocalizedStr(value);
  }

}
