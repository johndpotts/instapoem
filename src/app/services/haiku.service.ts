import { Injectable } from '@angular/core';
import { PronounService, Pronoun } from './pronoun.service';
import { Haiku } from '../models/haiku.model';

@Injectable({
  providedIn: 'root'
})
export class HaikuService {

  constructor(private pronoun: PronounService) {

  }

  public getHaiku(name: String, type: Pronoun): Haiku {
    const number = Math.ceil(Math.random() * 10);
    const haikus = {
      1: {
        line1: `${name} is running fast`,
        line2: `fearless leaping over logs`,
        line3: `trips and scrapes ${this.pronoun.possesive(type)} shin`
      },
      2:{
        line1: `${name} writes great haikus`,
        line2: `but sometimes they dont make sense`,
        line3: `Refrigerator`
      },
      3:{
        line1: `${name}'s cow gives less milk`,
        line2: `now that it has been eaten`,
        line3: `by a fierce dragon`
      },
      4:{
        line1: `when life shuts a door`,
        line2: `${name} just opens it`,
        line3: `that's how doors work`
      },
      5:{
        line1: `${name}'s zipper was down`,
        line2: `no one told ${this.pronoun.third(type)} all day`,
        line3: `where are ${this.pronoun.possesive(type)} real friends?`
      },
      6:{
        line1: `${name} drinks brake fluid`,
        line2: `they say ${this.pronoun.second(type)} is addicted but`,
        line3: `${this.pronoun.possesive(type)} says ${this.pronoun.possesive(type)} can always stop`
      },
      7:{
        line1: `${name} sheds ${this.pronoun.possesive(type)} old skin`,
        line2: `it's not some deep metaphor`,
        line3: `${this.pronoun.second(type)} just has sunburn`
      },
      8:{
        line1: `${name} poured ${this.pronoun.possesive(type)} heart out`,
        line2: `and got like 13 upvotes`,
        line3: `cat pic gets 80`
      },
      9:{
        line1: `maybe ${name}'s cat's name`,
        line2: `is Schrodinger. Or is it?`,
        line3: `we will never know`
      },
      10:{
        line1: `${name}'s pet bunny`,
        line2: `really loves to eat cabbage`,
        line3: `no wonder it's fat`
      }
    }

    return haikus[number];
  }


}
