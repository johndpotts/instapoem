import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LimerickPageRoutingModule } from './limerick-routing.module';

import { LimerickPage } from './limerick.page';
import { SocialShareComponent } from '../shared/social-share/social-share.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LimerickPageRoutingModule,
    SharedModule
  ],
  declarations: [LimerickPage]
})
export class LimerickPageModule {}
