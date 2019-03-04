import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router';
import { AutenticacaoService } from './autenticacao.service';

@Injectable({
  providedIn: 'root'
})
export class GuardaautenticacaoService implements CanActivate{

  constructor(private autenticacaoserv: AutenticacaoService) { }
    canActivate(): boolean{
      return this.autenticacaoserv.estaAutenticado();
    }

}
