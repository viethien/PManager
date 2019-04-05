import { Component, OnInit } from '@angular/core';
import { AutenticacaoService } from '../../../services/autenticacao.service';
import { UserStorageService } from 'src/app/services/userStorage.service';
import { Usuario } from '../../models/usuario.model';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  usuario: Usuario
  constructor(private auth: AutenticacaoService,
    private user: UserStorageService) { }

  ngOnInit() {
    this.getuser()
  }
  logout() {
    this.auth.logout()
  }
  getuser() {
    this.user.getSessao().then((data) => {
      this.usuario = data
    })
  }
}
