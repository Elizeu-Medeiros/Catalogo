import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ListUsuaariosPageRoutingModule } from './list-usuaarios-routing.module';

import { ListUsuaariosPage } from './list-usuaarios.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ListUsuaariosPageRoutingModule
  ],
  declarations: [ListUsuaariosPage]
})
export class ListUsuaariosPageModule {}
