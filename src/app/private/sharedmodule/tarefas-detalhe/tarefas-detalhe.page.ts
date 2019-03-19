import { Component, OnInit } from '@angular/core';
import { NavParams, ModalController } from '@ionic/angular';
import { TarefadetalheService } from './tarefadetalhe.service';
import { Tarefa } from '../../models/tarefa.model';
import { TipoTarefa } from '../../models/tipotarefa.model';

import { FormGroup, FormBuilder, Validators } from '@angular/forms';
@Component({
  selector: 'app-tarefas-detalhe',
  templateUrl: './tarefas-detalhe.page.html',
  styleUrls: ['./tarefas-detalhe.page.scss'],
})
export class TarefasDetalhePage implements OnInit {
 idTarefa = null
 tarefa: Tarefa
 tiposTarefas : TipoTarefa[]
 formulario: FormGroup
  constructor(
    private navParams: NavParams,
    private getTarefaDetalhe: TarefadetalheService,
    private modalController:ModalController,
    public fb: FormBuilder) {   }

  ngOnInit() {
    this.getGeral()
    this.getTiposTarefas()
    this.createForm()
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

  createForm(){
    this.formulario = this.fb.group({
      'tipotarefa':['', Validators.compose([Validators.required])]
   });
  }
 closeModal()
 {
   this.modalController.dismiss();
 }
}
