import { Injectable } from '@angular/core';
import { PronounService, Pronoun } from './pronoun.service';
import { Haiku } from '../models/haiku.model';

@Injectable({
  providedIn: 'root'
})
export class HaikuService {

  constructor(private pronoun: PronounService) {

  }

  public getHaiku(name: String, type: Pronoun, syllables: Number): Haiku {
    const haikus = {
      1: {
        line1: `${name} is running fast`,
        line2: `fearless leaping over logs`,
        line3: `trips and scrapes ${this.pronoun.possesive(type)} shin`
      }
    }

    return haikus[1];
  }


}
