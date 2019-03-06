import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { RelatoriosPage } from './relatorios.page';
import { SharedModule } from 'src/app/sharedmodule/sharedmodule.module';

const routes: Routes = [
  {
    path: '',
    component: RelatoriosPage
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
  declarations: [RelatoriosPage]
})
export class RelatoriosPageModule {}
