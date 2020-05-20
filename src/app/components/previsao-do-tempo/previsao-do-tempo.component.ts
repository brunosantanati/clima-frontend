import { Component, OnInit } from '@angular/core';
import { PrevisaoDoTempoService } from 'src/app/services/previsao-do-tempo.service'

@Component({
  selector: 'app-previsao-do-tempo',
  templateUrl: './previsao-do-tempo.component.html',
  styleUrls: ['./previsao-do-tempo.component.scss']
})
export class PrevisaoDoTempoComponent implements OnInit {

  previsaoDoTempoDados: any

  constructor(private previsaoDoTempoService: PrevisaoDoTempoService) { }

  ngOnInit() {
    this.previsaoDoTempoService.getPrevisaoDoTempo()
      .subscribe(dados => {
        console.log(dados)
        this.previsaoDoTempoDados = dados
      })
  }

}
