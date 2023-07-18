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
  count = 0;

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

  next() {
    let slider = document.getElementsByClassName("slider-width")[0] as HTMLElement;
    if(this.count > - (document.getElementsByClassName("contenedor").length * 350) + 1050){
      this.count = this.count - 350
    }
    slider.style.left = this.count + "px";
  }

  prev() {
    let slider = document.getElementsByClassName("slider-width")[0] as HTMLElement;
    if(this.count<0){
      this.count = this.count + 350
    }
    slider.style.left = this.count + "px";
  }
}
