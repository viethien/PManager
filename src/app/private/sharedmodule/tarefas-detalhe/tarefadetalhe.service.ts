import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { API } from '../../../app.api';


@Injectable({
  providedIn: 'root'
})
export class TarefadetalheService {

  constructor(private http: HttpClient) { }

  recuperaDetalhes(): any {
    return this.http.get("http://localhost:4000/tarefadetalhe")//AQUI DEPOIS TENHO QUE USAR INNTERPOLAÇÃO PRA CHAMAR O GET CERTO
  }
  recuperaTiposTarefas(): any {
    return this.http.get("http://localhost:5000/tiposTarefas")
  }
  recuperaProjetos(): any{
    return this.http.get("http://localhost:4200/projetos") // passar o ID do cliente como parametro
  }
  recuperaClientes(): any{
    return this.http.get("http://localhost:5432/clientes") 
  }
}
