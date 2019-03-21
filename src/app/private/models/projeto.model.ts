import { Sistema } from "./sistema.model";
export interface Projeto{
    projeto: string, //id
    cliente: string //ID
    duracao?: string,
    data_inicio?: string
    previsao_fim?: string,
    sistemas?: Sistema[],
}