import { Component, OnInit } from '@angular/core';
import { AutenticacaoService } from 'src/app/services/autenticacao.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  loginForm: FormGroup
  constructor(private auth: AutenticacaoService,
    public formBuilder: FormBuilder) { }

  ngOnInit() {
    this.createFormLogin()
  }

  autenticar() {
    this.auth.login(this.loginForm.value).subscribe((data) => {
      console.log(data)
    })
  }

  createFormLogin() {
    this.loginForm = this.formBuilder.group({
      email: ['', Validators.compose([Validators.required, Validators.email])],
      senha: ['', Validators.compose([Validators.required, Validators.maxLength(30)])]
    })
    console.log(this.loginForm.value)
  }
  /*login() {
     this.auth.login()
   }*/

}
