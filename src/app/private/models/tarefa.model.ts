import { TipoTarefa } from './tipotarefa.model';

export interface Tarefa{
    tarefa: string,
    numero: number,
    comentarios: string,
    descricao: string,
    id_cliente: string,
    nome_cliente: string,
    tipoTarefa: TipoTarefa
    data_tarefa: string,
    status_tarefa: number,
    id_solicitante: string,
    nome_solicitante: string,
    id_aprovador:string,
    nome_aprovador:string,
    id_criador: string,
    nome_criador: string,
    id_sistema: string,
    nome_sistema: string,
    inicio: string
    fim: string
    id_sala?: string,
    participante: any[]
}