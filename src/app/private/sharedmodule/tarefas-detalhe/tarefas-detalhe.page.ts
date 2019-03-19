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
    public fb: FormBuilder) { }

  ngOnInit() {

    this.createForm()
  }

  getGeral() {
    this.idTarefa = this.navParams.get('id_tarefa');
    this.getTarefaDetalhe.recuperaDetalhes().subscribe((data: Tarefa) => { //passar o id da tarefa como parametro no recupera detalhes
      this.tarefa = data
    })

  }
  getTiposTarefas() {
    this.getTarefaDetalhe.recuperaTiposTarefas().subscribe((data: TipoTarefa[]) => {
      this.tiposTarefas = data
    })
  }
  createForm() {
    this.getGeral();
    this.getTarefaDetalhe.recuperaDetalhes().subscribe((data: Tarefa) => {
      this.tarefa = data;
      this.formulario = this.fb.group({
        'tipo_tarefa': [this.tarefa.tipoTarefa.id, Validators.compose([Validators.required])], // Cant set default values cuz the array is object is undefined
        'data_tarefa': [this.tarefa.data_tarefa, Validators.compose([Validators.required])],// Cant set default values cuz the array is object is undefined
        'inicio_tarefa': [this.tarefa.inicio, Validators.compose([Validators.required])],// Cant set default values cuz the array is object is undefined
        'fim_tarefa': [this.tarefa.fim, Validators.compose([Validators.required])]// Cant set default values cuz the array is object is undefined
      });
    })
  }


  /* createForm() {
     this.getGeral()
     this.getTiposTarefas()
     this.formulario = this.fb.group({
       'tipo_tarefa': [this.tarefa.tipoTarefa.id, Validators.compose([Validators.required])], // Cant set default values cuz the array is object is undefined
       'data_tarefa': [this.tarefa.data_tarefa, Validators.compose([Validators.required])],// Cant set default values cuz the array is object is undefined
       'inicio_tarefa': [this.tarefa.inicio, Validators.compose([Validators.required])],// Cant set default values cuz the array is object is undefined
       'fim_tarefa': [this.tarefa.fim, Validators.compose([Validators.required])]// Cant set default values cuz the array is object is undefined
     });
   }*/

  closeModal() {
    this.modalController.dismiss();
  }
}
