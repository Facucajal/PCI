import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { TarjetaService } from 'src/app/services/tarjeta.service';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss']
})
export class CarouselComponent {
  listTarjetas: any[] = [];
  form: FormGroup;
  tarjeta : any;

  constructor(private fb: FormBuilder,
    private _tarjetaService: TarjetaService) {
      this.form = this.fb.group({
        titular: ['', Validators.required],
        numeroTarjeta: ['', [Validators.required, Validators.maxLength(16),Validators.minLength(16)]],
        fechaExpiracion: ['',[Validators.required, Validators.maxLength(5),Validators.minLength(5)]],
        cvv: ['',[Validators.required, Validators.maxLength(3),Validators.minLength(3)]]
      })
  };

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
