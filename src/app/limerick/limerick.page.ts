import { Component, OnInit } from '@angular/core';
import { Pronoun } from '../services/pronoun.service';
import { LimerickService } from '../services/limerick.service';
import { Limerick } from '../models/limerick.model';
import { Animations } from '../animations';
const slideinout = Animations.slideinout

@Component({
  selector: 'app-limerick',
  templateUrl: './limerick.page.html',
  styleUrls: ['./limerick.page.scss'],
  animations:[slideinout]
})
export class LimerickPage implements OnInit {
  name: String;
  gender: Pronoun;
  limerick: Limerick;
  isChangingInfo: Boolean = false;

  constructor(private limerickService: LimerickService) { }

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
      this.gender && this.gender.length;

  }

  generateLimerick() {
    this.isChangingInfo = false;
    this.limerick = this.limerickService.getLimerick(this.name, this.gender);
  }
  changeInfo() {
    this.isChangingInfo = true;
    this.limerick = undefined;
  }
  getExpanded(){
    return this.limerick ? null : 'block';
  }
}
