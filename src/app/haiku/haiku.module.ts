import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HaikuPageRoutingModule } from './haiku-routing.module';

import { HaikuPage } from './haiku.page';
import { SharedModule } from '../shared/shared.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HaikuPageRoutingModule,
    SharedModule
  ],
  declarations: [HaikuPage]
})
export class HaikuPageModule {}
