import { Injectable } from '@angular/core';
import { languages } from '../../assets/data/lang.json'
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LocalizeService {

  private langs: string[] = ['en', 'he'];
  private lang: BehaviorSubject<string> = new BehaviorSubject<string>('en');

  constructor() { }

  //returns a list of available languages
  getLangs(): string[] {
    return this.langs;
  }

  getLang(): BehaviorSubject<string> {
    return this.lang;
  }

  setLang(lang: string): void {
    for (const item of this.langs) {
      if (item === lang) {
        this.lang.next(lang);
        break;
      }
    }
  }

  getLocalizedStr(key: string, lang: string): string {
    if(lang === 'en' || lang === undefined){
      return key;
    }
    const words = languages[lang];
    return words[key];
  }
}
