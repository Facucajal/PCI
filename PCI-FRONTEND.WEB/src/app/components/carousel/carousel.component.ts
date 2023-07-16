import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { TarjetaService } from 'src/app/services/tarjeta.service';
import{Base} from 'src/app/components/base'

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss']
})
export class CarouselComponent extends Base{

  ngOnInit(): void {
    this.obtenerTarjetas()
  }

  obtenerTarjetas(){
    //Me suscribo al observable
    this._tarjetaService.getListTarjetas().subscribe(data => {
      console.log(data);
      this.listTarjetas = data;
      this.tarjeta = this.listTarjetas[0]

    }, error => {
      console.log(error);
    })
  }
}
