import { Sistema } from "./sistema.model";
import { Cliente } from "./cliente.model";
export interface Projeto{
    projeto: string, 
    descricao: string,
    cliente: Cliente, 
    duracao?: string,
    data_inicio?: string
    previsao_fim?: string,
    sistemas?: Sistema[],
}