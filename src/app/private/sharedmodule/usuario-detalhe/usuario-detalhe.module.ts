import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { UsuarioDetalhePage } from './usuario-detalhe.page';
import { UserStorageService } from 'src/app/services/userStorage.service';

const routes: Routes = [
  {
    path: '',
    component: UsuarioDetalhePage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  providers: [
    UserStorageService
  ],
  declarations: [UsuarioDetalhePage],
  exports: [
    UsuarioDetalhePageModule,
    UsuarioDetalhePage

  ]

})
export class UsuarioDetalhePageModule { }
