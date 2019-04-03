import { Component, OnInit } from '@angular/core';
import { AutenticacaoService } from 'src/app/services/autenticacao.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
 retorno: any
  loginForm: FormGroup
  constructor(private auth: AutenticacaoService,
    public formBuilder: FormBuilder,
    public alertController: AlertController) { }

  ngOnInit() {
    this.createFormLogin()
  }
  
  autenticar() { 
    this.auth.login(this.loginForm.value).subscribe((data) => {
      this.setRetorno(data)
    })
    this.presentAlert()
  }

  async presentAlert() {
    const alert = await this.alertController.create({
      header: 'Ooops!',
      //subHeader: 'Subtitle',
      message: this.retorno.msg,
      buttons: ['OK']
  });
  await alert.present();
}

setRetorno(retorno){
  this.retorno = retorno
}
  createFormLogin() {
    this.loginForm = this.formBuilder.group({
      email: ['', Validators.compose([Validators.required, Validators.email])],
      senha: ['', Validators.compose([Validators.required, Validators.maxLength(30)])]
    })
    console.log(this.loginForm.value)
  }
}
