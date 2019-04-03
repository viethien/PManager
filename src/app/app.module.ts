import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy, ModalController } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { IonicStorageModule } from '@ionic/storage'

import { AutenticacaoService } from './services/autenticacao.service'
import { GuardaautenticacaoService } from './services/guardaautenticacao.service'
import { LoadHomeService } from './private/home/load-home.service';
import { HttpClientModule } from '@angular/common/http';

import { TarefasDetalhePageModule } from './private/sharedmodule/tarefas-detalhe/tarefas-detalhe.module'
import { TarefadetalheService } from './private/sharedmodule/tarefas-detalhe/tarefadetalhe.service';
import { IonicSelectableModule } from 'ionic-selectable';


@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [
    BrowserModule,
    IonicModule.forRoot(),
    AppRoutingModule,
    IonicStorageModule.forRoot(),
    HttpClientModule,
    TarefasDetalhePageModule,
    IonicSelectableModule,

  ],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
    AutenticacaoService,
    GuardaautenticacaoService,
    LoadHomeService,
    ModalController,
    TarefadetalheService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
