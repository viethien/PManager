import { Component } from '@angular/core';
import { LoadHomeService } from './load-home.service';

import { ModalController } from '@ionic/angular';
import { TarefasDetalhePage } from '../tarefas/tarefas-detalhe/tarefas-detalhe.page';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage  {
  tarefasHome : any[]
  tarefasInternas: any[]
  tarefasExternas: any[]
  
  interna = true
  constructor(private homeService: LoadHomeService, private modalController: ModalController) { }

  ngOnInit() {
    this.homeService.getTarefasHome().subscribe((data)=>{
    this.tarefasHome = data 
    this.showInternas()
  })
}
  showInternas(){
    this.interna  = true
    this.tarefasInternas = this.tarefasHome.filter((t)=>{
       return  t.interna === true
    })
  }
   
  showExternas(){
    this.interna = false
    this.tarefasExternas = this.tarefasHome.filter((t)=>{
      return t.interna === false     
    })
  } 

  async showModal(id){
    const modal = await this.modalController.create({
     component: TarefasDetalhePage,
     componentProps:{
       custom_id: id
     }
    });
    modal.present();
  }
}
