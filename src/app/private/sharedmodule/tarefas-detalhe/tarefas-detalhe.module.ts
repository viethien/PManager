import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { TarefasDetalhePage } from './tarefas-detalhe.page';

const routes: Routes = [
  {
    path: '',
    component: TarefasDetalhePage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [TarefasDetalhePage]
})
export class TarefasDetalhePageModule {}
