import { Injectable } from '@angular/core';
import { ReadKeyExpr } from '@angular/compiler';

export type Pronoun = 'm' | 'f' | 'n';

@Injectable({
  providedIn: 'root'
})
export class PronounService {

  constructor() { }

  public second(type: Pronoun) {
    switch (type) {
      case 'm':
        return 'he';
        break;
      case 'f':
        return 'she';
        break;
      case 'n':
        return 'they';
        break;
    }
  }

  public third(type: Pronoun) {
    switch (type) {
      case 'm':
        return 'him';
        break;
      case 'f':
        return 'her';
        break;
      case 'n':
        return 'them';
        break;
    }
  }

  public possesive(type: Pronoun) {
    switch (type) {
      case 'm':
        return 'his';
        break;
      case 'f':
        return 'her';
        break;
      case 'n':
        return 'their';
        break;
    }
  }
}
