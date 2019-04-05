import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Storage } from '@ionic/storage'
import { Platform } from '@ionic/angular'
import { HttpClient } from '@angular/common/http';
import { API } from '../app.api'

import { UserStorageService } from './userStorage.service'

const TOKEN_KEY = 'auth-token';

@Injectable({
  providedIn: 'root'
})
export class AutenticacaoService {

  statusAutenticacao = new BehaviorSubject(false)
  constructor(private storage: Storage,
    private plt: Platform,
    private http: HttpClient,
    private UserStorageService: UserStorageService
  ) {
    this.plt.ready().then(() => {
      this.checkToken()
    })
  }


  login(userdata) {
    return this.http.post(`${API}/autenticar`, userdata)
  }
  storeData(token, dadosusuario) {
    this.storage.set(TOKEN_KEY, 'xmlapqi2345623g').then(res => {
      console.log(dadosusuario)
      this.statusAutenticacao.next(true);
      this.UserStorageService.criarSessao(dadosusuario)
    })
  }
  logout() {
    return this.storage.remove(TOKEN_KEY).then(() => {
      this.statusAutenticacao.next(false)
    })
  }

  estaAutenticado() {
    return this.statusAutenticacao.value
  }

  checkToken() {
    return this.storage.get(TOKEN_KEY).then(res => {
      if (res) {
        this.statusAutenticacao.next(true)
      }
    })
  }
}

