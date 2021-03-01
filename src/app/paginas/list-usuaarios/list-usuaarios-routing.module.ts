import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ListUsuaariosPage } from './list-usuaarios.page';

const routes: Routes = [
  {
    path: '',
    component: ListUsuaariosPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ListUsuaariosPageRoutingModule {}
