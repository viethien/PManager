import { Component, OnInit } from '@angular/core';
import { AutenticacaoService } from '../../../services/autenticacao.service';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {

  constructor(private auth: AutenticacaoService) { }

  ngOnInit() {
  }
  logout(){
    this.auth.logout()
  }

}
