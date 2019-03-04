import { Component } from '@angular/core';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { AutenticacaoService } from './services/autenticacao.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html'
})
export class AppComponent {
  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    private Autenticacao: AutenticacaoService,
    private router: Router
  ) {
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
      this.Autenticacao.statusAutenticacao.subscribe((estado)=>{
        console.log("Mudou Auth: ", estado)   
        if(estado){
               this.router.navigate(['private', 'tabs'])               
           } else{
               this.router.navigate(['login'])
           }
      })
    });
  }
}
