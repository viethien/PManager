import { Injectable } from '@angular/core';

import { API } from '../../app.api'

import { HttpClient } from '@angular/common/http'

@Injectable()

export class LoadHomeService {

  constructor(private http: HttpClient) { 
    
  }

  getTarefasHome(): any {
    return this.http.get(`${API}/getTarefasHome`)
  }


}
