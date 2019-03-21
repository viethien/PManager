import { Component, OnInit, ViewChild } from '@angular/core';
import { NavParams, ModalController, ToastController, NavController } from '@ionic/angular';
import { TarefadetalheService } from './tarefadetalhe.service';
import { Tarefa } from '../../models/tarefa.model';
import { TipoTarefa } from '../../models/tipotarefa.model';

import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { IonicSelectableComponent } from 'ionic-selectable/src/app/components/ionic-selectable/ionic-selectable.component';

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
    public formBuilder: FormBuilder,
    private toastCtrl: ToastController
    ) { }

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
  createForm(tarefa: Tarefa) {
    this.tarefa = tarefa;
      this.formulario = this.formBuilder.group({
        'tipoTarefa': ['', Validators.compose([Validators.required])], // Cant set default values cuz the array is object is undefined
        'projeto': ['', Validators.compose([Validators.required])],
        'data_inicio': ['', Validators.compose([Validators.required])],// Cant set default values cuz the array is object is undefined
        'data_fim': ['', Validators.compose([Validators.required])],// Cant set default values cuz the array is object is undefined
        'hora_inicio': ['', Validators.compose([Validators.required])],// Cant set default values cuz the array is object is undefined
        'hora_fim': ['', Validators.compose([Validators.required])]// Cant set default values cuz the array is object is undefined
    })
    this.formulario.patchValue(tarefa)
  }
  tipoTarefaChange(event: {
    component: IonicSelectableComponent,
    value: any 
  }) {
    console.log('port:', event.value);
  }
  closeModal() {
    this.modalController.dismiss();
  }
}
