import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Storage } from '@ionic/storage'
import { Platform } from '@ionic/angular'
const TOKEN_KEY = 'auth-token';

@Injectable({
  providedIn: 'root'
})
export class AutenticacaoService {

  statusAutenticacao = new BehaviorSubject(false)
  constructor(private storage: Storage, private plt: Platform) {
     this.plt.ready().then(()=>{
        this.checkToken()
     })
   }

   login(){
      return this.storage.set(TOKEN_KEY, '1234').then(res => {
        this.statusAutenticacao.next(true)
      })
   }
   logout(){
    return this.storage.remove(TOKEN_KEY).then(() => {
      this.statusAutenticacao.next(false)
    })
   }

   estaAutenticado(){
      return this.statusAutenticacao.value
   }

   checkToken(){
    return this.storage.get(TOKEN_KEY).then(res => {
      if (res){
        this.statusAutenticacao.next(true)
      }
    })
   }
}
