import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TabsPage } from './tabs.page';


const routes: Routes = [
  {
    path: '',
    component: TabsPage,
    children: [
      {
        path: '',
        children: [
          {
            path: '',
            loadChildren: '../home/home.module#HomePageModule'
          }
        ]
      },
      {
        path: 'home',
        children: [
          {
            path: '',
            loadChildren: '../home/home.module#HomePageModule'
          }
        ]
      },
      {
        path: 'tarefas',
        children: [
          {
            path: '',
            loadChildren: '../tarefas/tarefas.module#TarefasPageModule'
          }
        ]
      },
      {
        path: 'cadastros',
        children: [
          {
            path: '',
            loadChildren: '../cadastros/cadastros.module#CadastrosPageModule'
          }
        ]
      },
      {
        path: 'relatorios',
        children: [
          {
            path: '',
            loadChildren: '../relatorios/relatorios.module#RelatoriosPageModule'
          }
        ]
      },
      {
        path: 'usuario-detalhe',
        children: [
          {
            path: '',
            loadChildren: '../sharedmodule/usuario-detalhe/usuario-detalhe.module#UsuarioDetalhePageModule'
          }
        ]
      },

    ]
  },
  {
    path: '',
    redirectTo: './private/tabs/home',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class TabsPageRoutingModule { }
