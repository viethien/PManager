import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { TarefasDetalhePage } from './tarefas-detalhe.page';
import { IonicSelectableModule } from "ionic-selectable";

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
    RouterModule.forChild(routes),
    ReactiveFormsModule,
    IonicSelectableModule
  ],
  declarations: [TarefasDetalhePage]
})
export class TarefasDetalhePageModule {}
