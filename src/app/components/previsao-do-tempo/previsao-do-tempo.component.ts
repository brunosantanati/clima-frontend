import { Component, OnInit } from '@angular/core';
import { PrevisaoDoTempoService } from 'src/app/services/previsao-do-tempo.service'
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-previsao-do-tempo',
  templateUrl: './previsao-do-tempo.component.html',
  styleUrls: ['./previsao-do-tempo.component.scss']
})
export class PrevisaoDoTempoComponent implements OnInit {

  previsaoDoTempoDados: any

  constructor(private previsaoDoTempoService: PrevisaoDoTempoService) { }

  ngOnInit() {
  }

  onSubmit(f: NgForm) {
    const localDigitado = f.value.local
    console.log(localDigitado)
    this.previsaoDoTempoService.getPrevisaoDoTempo(localDigitado)
      .subscribe(dados => {
        console.log(dados)
        this.previsaoDoTempoDados = dados
      })
  }


}
