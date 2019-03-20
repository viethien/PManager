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
  tiposTarefas: TipoTarefa[]
  formulario: FormGroup
  constructor(
    private navParams: NavParams,
    private getTarefaDetalhe: TarefadetalheService,
    private modalController: ModalController,
    public formBuilder: FormBuilder) { }

  ngOnInit() {
  this.getGeral()
  this.getTiposTarefas()
    
  }

  getGeral() {
    this.idTarefa = this.navParams.get('id_tarefa');
    this.getTarefaDetalhe.recuperaDetalhes().subscribe((data: Tarefa) => { //passar o id da tarefa como parametro no recupera detalhes
       this.createForm(data)
    })

  }
  getTiposTarefas(tipos?: TipoTarefa[]) {
    this.tiposTarefas = tipos
    this.getTarefaDetalhe.recuperaTiposTarefas().subscribe((data: TipoTarefa[]) => {
       this.getTiposTarefas(data)
    })
  }
  createForm(tarefa) {
    this.tarefa = tarefa
      this.formulario = this.formBuilder.group({
        'tipoTarefa': ['', Validators.compose([Validators.required])], // Cant set default values cuz the array is object is undefined
        'data_tarefa': ['', Validators.compose([Validators.required])],// Cant set default values cuz the array is object is undefined
        'inicio': ['', Validators.compose([Validators.required])],// Cant set default values cuz the array is object is undefined
        'fim': ['', Validators.compose([Validators.required])]// Cant set default values cuz the array is object is undefined
    })
    console.log(this.formulario)
    console.log(this.tiposTarefas)
    this.formulario.patchValue(tarefa)
    
  }

  closeModal() {
    this.modalController.dismiss();
  }
}
