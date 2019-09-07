import { Injectable } from '@angular/core';
import { languages } from '../../assets/data/lang.json'

@Injectable({
  providedIn: 'root'
})
export class LocalizeService {

  private langs: string[] = ['en', 'he'];
  private words: object = null;

  constructor() { }

  //returns a list of available languages
  getLangs(): string[] {
    return this.langs;
  }

  setLang(lang: string): void {
    if (languages.hasOwnProperty(lang)) {
      this.words = languages[lang];
    } else {
      //if property is not found it defaults to english
      this.words = null;
    }
  }

  getLocalizedStr(key: string): string {
    if (this.words == null) {
      return key;
    } else if (this.words.hasOwnProperty(key)) {
      return this.words[key];
    } else {
      return key;
    }
  }
}
