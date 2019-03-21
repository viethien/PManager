import { Component, OnInit } from '@angular/core';
import { NavParams, ModalController } from '@ionic/angular';
import { TarefadetalheService } from './tarefadetalhe.service';
import { Tarefa } from '../../models/tarefa.model';
import { TipoTarefa } from '../../models/tipotarefa.model';

import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { IonicSelectableComponent } from 'ionic-selectable/src/app/components/ionic-selectable/ionic-selectable.component';
import { Projeto } from '../../models/projeto.model';

@Component({
  selector: 'app-tarefas-detalhe',
  templateUrl: './tarefas-detalhe.page.html',
  styleUrls: ['./tarefas-detalhe.page.scss'],
})
export class TarefasDetalhePage implements OnInit {
  

  idTarefa = null
  tarefa: Tarefa
  tiposTarefas: TipoTarefa[]
  projetos: Projeto[]
  formulario: FormGroup
  constructor(
    private navParams: NavParams,
    private getTarefaDetalhe: TarefadetalheService,
    private modalController: ModalController,
    public formBuilder: FormBuilder,
    ) { }

  ngOnInit() {
  this.getGeral()
  this.getTiposTarefas()
  this.getProjetos()  
  }

  getGeral() {
    this.idTarefa = this.navParams.get('id_tarefa');
    this.getTarefaDetalhe.recuperaDetalhes().subscribe((data) => { //passar o id da tarefa como parametro no recupera detalhes
       this.createForm(data)
    })

  }
  getTiposTarefas() {
    this.getTarefaDetalhe.recuperaTiposTarefas().subscribe((data: TipoTarefa[]) => {
       this.setTiposTarefas(data);
    })
  }
  getProjetos(){    
    this.getTarefaDetalhe.recuperaProjetos().subscribe((data: Projeto[]) => {
       this.setProjetos(data)
    })
  }

  setTiposTarefas(tiposTarefas: TipoTarefa[]){
    this.tiposTarefas = tiposTarefas;
  }

  setProjetos(projetos: Projeto[]){
    this.projetos = projetos;
  }

  createForm(tarefa: Tarefa) {
    this.tarefa = tarefa;
      this.formulario = this.formBuilder.group({
        'tipoTarefa': ['', Validators.compose([Validators.required])], 
        'projeto': ['', Validators.compose([Validators.required])],
        'data_inicio': ['', Validators.compose([Validators.required])],
        'data_fim': ['', Validators.compose([Validators.required])],
        'hora_inicio': ['', Validators.compose([Validators.required])],
        'hora_fim': ['', Validators.compose([Validators.required])]
    })
    this.formulario.patchValue(tarefa)
    console.log(tarefa.projeto)
  }
  portChange(event: {
    component: IonicSelectableComponent,
    value: any
  }) {
    console.log('port:', event.value);
  }
  
  closeModal() {
    this.modalController.dismiss();
  }
}
