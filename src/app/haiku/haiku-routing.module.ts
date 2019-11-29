import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HaikuPage } from './haiku.page';

const routes: Routes = [
  {
    path: '',
    component: HaikuPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HaikuPageRoutingModule {}
