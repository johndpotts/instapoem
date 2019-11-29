import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SocialShareComponent } from './social-share/social-share.component';
import { IonicModule } from '@ionic/angular';



@NgModule({
  declarations: [SocialShareComponent],
  imports: [
    CommonModule,
    IonicModule
  ],
  exports: [SocialShareComponent]
})
export class SharedModule { }
