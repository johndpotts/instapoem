import { Injectable } from '@angular/core';
import { PronounService, Pronoun } from './pronoun.service';
import { Limerick } from '../models/limerick.model';

@Injectable({
  providedIn: 'root'
})
export class LimerickService {

  constructor(private pronoun: PronounService) {

  }

  public getLimerick(name: String, type: Pronoun): Limerick {
    const limericks = {
      1: {
        line1: `Limericks ${name} cannot compose`,
        line2: `Without noxious smells in ${this.pronoun.possesive(type)} nose.`,
        line3: `But this one was easy,`,
        line4: `${this.pronoun.second(type)} felt rather queasy,`,
        line5: `Because ${this.pronoun.second(type)} was sniffing ${this.pronoun.possesive(type)} toes.`
      }
    }

    return limericks[1];
  }
}

