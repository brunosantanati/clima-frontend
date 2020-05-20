import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { Observable } from 'rxjs'

@Injectable({
  providedIn: 'root'
})
export class PrevisaoDoTempoService {

  private apiUrl = 'http://localhost:8080/api/'

  constructor(private http: HttpClient) { }

  getPrevisaoDoTempo(): Observable<any> {
    return this.http.request('GET', this.apiUrl + 'previsao?endereco=New')
  }
}
