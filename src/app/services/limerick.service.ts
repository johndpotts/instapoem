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
    const number = Math.ceil(Math.random() * 10);
    const limericks = {
      1: {
        line1: `Limericks ${name} just cannot compose`,
        line2: `Without noxious smells in ${this.pronoun.possesive(type)} nose.`,
        line3: `But this one was easy,`,
        line4: `${this.pronoun.second(type)} felt rather queasy,`,
        line5: `Because ${this.pronoun.second(type)} was sniffing ${this.pronoun.possesive(type)} toes.`
      },
      2: {
        line1: `${name} once jumped off a high wall`,
        line2: `And had a most terrible fall.`,
        line3: `${this.pronoun.second(type)} went back to bed,`,
        line4: `With a bump on ${this.pronoun.possesive(type)} head,`,
        line5: `That's why you don't jump off a wall.`
      },
      3: {
        line1: `Did you hear of ${name}'s really odd deed?`,
        line2: `${this.pronoun.second(type)} once swallowed a packet of seeds.`,
        line3: `It soon came to pass`,
        line4: `${this.pronoun.second(type)} was covered with grass,`,
        line5: `But ${this.pronoun.second(type)} has all the tomatoes ${this.pronoun.second(type)} needs.`
      },
      4: {
        line1: `They say that ${name}, when in flight`,
        line2: `has a speed even faster than light.`,
        line3: `${this.pronoun.second(type)} set out one day`,
        line4: `In a relative way,`,
        line5: `And returned on the previous night.`
      },
      5: {
        line1: `${name} once visited Spain`,
        line2: `and loved to go play in the rain`,
        line3: `But one day ${this.pronoun.second(type)} tripped`,
        line4: `And broke ${this.pronoun.possesive(type)} hip`,
        line5: `Now ${this.pronoun.second(type)} is in serious pain`
      },
      6: {
        line1: `An elephant slept in his bunk`,
        line2: `And in slumber his chest rose and sunk`,
        line3: `But he snored -- how he snored!`,
        line4: `All the other beasts roared`,
        line5: `So ${name} tied a knot in his trunk.`
      },
      7: {
        line1: `One time ${name} up and went to Peru`,
        line2: `And dreamt ${this.pronoun.second(type)} was eating ${this.pronoun.possesive(type)} shoe`,
        line3: `${this.pronoun.second(type)} woke in the night`,
        line4: `With a terrible fright`,
        line5: `And found it was perfectly true`
      },
      8: {
        line1: `One time ${name} went and travelled to Niger`,
        line2: `And smiled as ${this.pronoun.second(type)} rode on a tiger`,
        line3: `They came back from the ride`,
        line4: `With poor ${name} inside`,
        line5: `And the smile on the face of the tiger`
      },
      9: {
        line1: `To ${name} the very nature of money`,
        line2: `Is odd and particularly funny`,
        line3: `For when ${this.pronoun.second(type)} has dough`,
        line4: `It goes quickly, you know`,
        line5: `And seeps out of ${this.pronoun.possesive(type)} pockets like honey`
      },
      10: {
        line1: `${name} needed a front door for ${this.pronoun.possesive(type)} hall`,
        line2: `The replacement ${this.pronoun.second(type)} bought was too tall`,
        line3: `So ${this.pronoun.second(type)} hacked it and chopped it`,
        line4: `IAnd carefully lopped it`,
        line5: `And now the dumb thing is too small`
      },
    }

    return limericks[number];
  }
}
