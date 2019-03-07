import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { CadastrosPage } from './cadastros.page';
import { SharedModule } from '../sharedmodule/sharedmodule.module';

const routes: Routes = [
  {
    path: '',
    component: CadastrosPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes),
    SharedModule
  ],
  declarations: [CadastrosPage]
})
export class CadastrosPageModule {}
