import { Component, OnInit } from '@angular/core';
import { Pronoun } from '../services/pronoun.service';
import { HaikuService } from '../services/haiku.service';
import { Haiku } from '../models/haiku.model';
import { Animations } from '../animations';
const slideinout = Animations.slideinout
@Component({
  selector: 'app-haiku',
  templateUrl: './haiku.page.html',
  styleUrls: ['./haiku.page.scss'],
  animations:[slideinout]
})
export class HaikuPage implements OnInit {
  name: String;
  gender: Pronoun;
  haiku: Haiku;
  syllables: Number;
  isChangingInfo: Boolean = false;
  constructor(private haikuService: HaikuService) { }

  ngOnInit() {
  }

  public handleNameValue(e) {
    this.name = e.target.value;
  }
  public handleGenderValue(e) {
    this.gender = e.target.value;
  }

  hasRequiredInfo() {
    return this.name && this.name.length &&
      this.gender && this.gender.length;  }

  generateHaiku() {
    this.isChangingInfo = false;
    this.haiku = this.haikuService.getHaiku(this.name, this.gender);
  }

  changeInfo(){
    this.isChangingInfo = true;
    this.haiku = undefined;
  }

  getExpanded(){
    return this.haiku ? null : 'block';
  }

}
