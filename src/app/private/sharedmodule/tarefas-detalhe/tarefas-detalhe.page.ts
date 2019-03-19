import { Component, OnInit } from '@angular/core';
import { NavParams, ModalController } from '@ionic/angular';
import { TarefadetalheService } from './tarefadetalhe.service';
import { Tarefa } from '../../models/tarefa.model';
import { TipoTarefa } from '../../models/tipotarefa.model';


@Component({
  selector: 'app-tarefas-detalhe',
  templateUrl: './tarefas-detalhe.page.html',
  styleUrls: ['./tarefas-detalhe.page.scss'],
})
export class TarefasDetalhePage implements OnInit {
 idTarefa = null
 tarefa: Tarefa
 tiposTarefas : TipoTarefa[]
  constructor(private navParams: NavParams, private getTarefaDetalhe: TarefadetalheService,
    private modalController:ModalController) { }

  ngOnInit() {
    this.getGeral()
    this.getTiposTarefas()
  }

  getGeral(){
    this.idTarefa = this.navParams.get('id_tarefa');
    this.getTarefaDetalhe.recuperaDetalhes().subscribe((data)=>{ //passar o id da tarefa como parametro no recupera detalhes
    this.tarefa = data
   })
  }
  getTiposTarefas(){
    this.getTarefaDetalhe.recuperaTiposTarefas().subscribe((data)=>{
      this.tiposTarefas = data
    })
  }
 closeModal()
 {
   this.modalController.dismiss();
 }
}
