import { Component, OnInit } from '@angular/core';
import { AutenticacaoService } from 'src/app/services/autenticacao.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AlertController } from '@ionic/angular';
import { Usuario } from '../../private/models/usuario.model';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  loginForm: FormGroup
  dadosusuario: Usuario
  constructor(private auth: AutenticacaoService,
    public formBuilder: FormBuilder,
    public alertController: AlertController) { }

  ngOnInit() {
    this.createFormLogin()
  }
  createFormLogin() {
    this.loginForm = this.formBuilder.group({
      email: ['', Validators.compose([Validators.required, Validators.email])],
      senha: ['', Validators.compose([Validators.required, Validators.maxLength(30), Validators.minLength(8)])]
    })
    console.log(this.loginForm)
  }

  validar() {
    if (this.loginForm.valid) {
      this.autenticar()
    }
  }

  autenticar() {
    this.auth.login(this.loginForm.value).subscribe((data) => {
      this.setDadosUsuario(data)
    })
  }

  getDadosUsuario() {
    return this.dadosusuario;
  }
  setDadosUsuario(dadosusuario) {
    this.dadosusuario = dadosusuario
    this.checaRetorno(dadosusuario)
  }
  async checaRetorno(dadosusuario) {
    console.log(dadosusuario)
    if (dadosusuario.hasOwnProperty('usuario')) {
      this.iniciarSessao(dadosusuario)
    }
    else if (dadosusuario.hasOwnProperty('msg') === true) { //Query executou mas n achou o usuario
      console.log("entrei aqui")
      const alert = await this.alertController.create({
        header: 'Ooops!',
        message: dadosusuario.msg,
        buttons: ['OK']
      });
      await alert.present();
    } else if (typeof dadosusuario[0] != 'undefined') { //erro de validação no servidor
      console.log("entrei aqui")
      const alert = await this.alertController.create({
        header: 'Ooops!',
        message: dadosusuario[0].msg,
        buttons: ['OK']
      });
      await alert.present();
    }
  }


  verificaValidTouched(campo) {
    return !this.loginForm.get(campo).valid && this.loginForm.get(campo).touched
  }
  aplicaCssErro(campo) {
    return {
      'invalid': this.verificaValidTouched(campo),
    }
  }
  iniciarSessao(dadosusuario) {
    this.auth.storeData(true, dadosusuario)
  }

}
