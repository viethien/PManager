import { Component, OnInit, ViewChild } from '@angular/core';
import { NavParams, ModalController } from '@ionic/angular';
import { TarefadetalheService } from './tarefadetalhe.service';
import { Tarefa } from '../../models/tarefa.model';
import { TipoTarefa } from '../../models/tipotarefa.model';

import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { IonicSelectableComponent } from 'ionic-selectable';
import { Projeto } from '../../models/projeto.model';
import { Cliente } from '../../models/cliente.model';



@Component({
  selector: 'app-tarefas-detalhe',
  templateUrl: './tarefas-detalhe.page.html',
  styleUrls: ['./tarefas-detalhe.page.scss'],
})


export class TarefasDetalhePage implements OnInit {
  @ViewChild('loader') loader: IonicSelectableComponent;

  idTarefa = null
  tarefa: Tarefa
  clientes: Cliente[]
  tiposTarefas: TipoTarefa[]
  projetos: Projeto[]
  formulario: FormGroup
  formAtivado: boolean = false
  constructor(
    private navParams: NavParams,
    private getTarefaDetalhe: TarefadetalheService,
    private modalController: ModalController,
    public formBuilder: FormBuilder

  ) { }

  ngOnInit() {
    this.getGeral()
  }

  getGeral() {
    this.idTarefa = this.navParams.get('id_tarefa');
    this.getTarefaDetalhe.recuperaDetalhes().subscribe((tarefa: Tarefa) => { //passar o id da tarefa como parametro no recupera detalhes
      this.createForm(tarefa)
    })

  }
  getTiposTarefas() {
    this.getTarefaDetalhe.recuperaTiposTarefas().subscribe((tipostarefas: TipoTarefa[]) => {
      this.setTiposTarefas(tipostarefas);
    })
  }
  getProjetos() {
    this.getTarefaDetalhe.recuperaProjetos().subscribe((projetos: Projeto[]) => {
      this.setProjetos(projetos)
    })
  }
  getClientes() {
    this.getTarefaDetalhe.recuperaClientes().subscribe((clientes: Cliente[]) => {
      this.setClientes(clientes)
    })
  }
  setClientes(clientes) {
    this.clientes = clientes
  }
  setTiposTarefas(tiposTarefas: TipoTarefa[]) {
    this.tiposTarefas = tiposTarefas;
  }

  setProjetos(projetos: Projeto[]) {
    this.projetos = projetos;
  }
  zeraSelects() {
    this.setProjetos(null)
  }

  createForm(tarefa: Tarefa) {
    this.tarefa = tarefa;
    this.formulario = this.formBuilder.group({
      'cliente': ['', Validators.compose([Validators.required])],
      'tipoTarefa': ['', Validators.compose([Validators.required])],
      'projeto': ['', Validators.compose([Validators.required])],
      'data_inicio': ['', Validators.compose([Validators.required])],
      'data_fim': ['', Validators.compose([Validators.required])],
      'hora_inicio': ['', Validators.compose([Validators.required])],
      'hora_fim': ['', Validators.compose([Validators.required])]
    })
    this.formulario.patchValue(tarefa)
  }
  ativaForm() {
    if (this.formAtivado) {
      this.formAtivado = false
    } else {
      this.formAtivado = true
    }
  }
  showLoading() {
    this.loader.showLoading()
  }
  closeModal() {
    this.modalController.dismiss();
  }
}
