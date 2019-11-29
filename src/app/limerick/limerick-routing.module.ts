import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LimerickPage } from './limerick.page';

const routes: Routes = [
  {
    path: '',
    component: LimerickPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LimerickPageRoutingModule {}
