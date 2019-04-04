import { Component, OnInit } from '@angular/core';
import { AutenticacaoService } from '../../../services/autenticacao.service';
import { UserStorageService } from 'src/app/services/userStorage.service';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  username: string
  constructor(private auth: AutenticacaoService,
    private user: UserStorageService) { }

  ngOnInit() {
    this.getusername()
  }
  logout() {
    this.auth.logout()
  }
  getusername() {
    this.user.getDadosUsuario().then((data) => {
      this.username = data.nome
    })
  }
}
