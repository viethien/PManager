import { TipoTarefa } from './tipotarefa.model';
import { Sistema } from './sistema.model';
import { Convidado } from './convidado.model';
import { Projeto } from './projeto.model';
import {  EtapaProjeto } from './etapa.model';
export interface Tarefa{
    tarefa: string,
    numero: number,
    comentarios: string,

    descricao: string,
    tipoTarefa: TipoTarefa
    data_inicio: string,
    data_fim: string,
    hora_inicio: string
    hora_fim: string
    status_tarefa: number,
    id_solicitante: string,
    nome_solicitante: string,
    id_aprovador:string,
    nome_aprovador:string,
    id_criador: string,
    nome_criador: string,
    sistema: Sistema,       
    id_sala?: string,
    convidados: Convidado[],
    projeto?: Projeto,
    etapa_projeto?: EtapaProjeto
}