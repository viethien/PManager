import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TabsPage } from './tabs/tabs.page'
const routes: Routes = [
  {
    path: 'tabs',
    component: TabsPage,
    children: [
      {
        path: 'home',
        children: [
          {
            path: '',
            loadChildren: './home/home.module#HomePageModule'
          }
        ]
      },
      {
        path: 'tarefas',
        children: [
          {
            path: '',
            loadChildren: './tarefas/tarefas.module#TarefasPageModule'
          }
        ]
      },
      {
        path: 'cadastros',
        children: [
          {
            path: '',
            loadChildren: './cadastros/cadastros.module#CadastrosPageModule'
          }
        ]
      },
      {
        path: 'relatorios',
        children: [
          {
            path: '',
            loadChildren: './relatorios/relatorios.module#RelatoriosPageModule'
          }
        ]
      },

    ]
  },
  {
    path: '',
    redirectTo: './home',
    pathMatch: 'full'
  }
];
@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class PrivateRoutingModule {}
