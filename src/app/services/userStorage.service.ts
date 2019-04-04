import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';
import { Usuario } from '../private/models/usuario.model';


const USUARIO = '';
@Injectable({
  providedIn: 'root'
})


export class UserStorageService {

  constructor(
    private storage: Storage

  ) { }

  init(dadosusuario: Usuario) { //inicializo o usuario
    return this.storage.get(USUARIO).then((usuario: Usuario) => {
      if (usuario) {
        usuario = dadosusuario
        return this.storage.set(USUARIO, dadosusuario)
      } else {
        return this.storage.set(USUARIO, [dadosusuario])
      }

    })
  }

  getDadosUsuario(): Promise<Usuario> {
    console.log(USUARIO)
    return this.storage.get(USUARIO)
  }

  updateUsuario() {

  }

}
