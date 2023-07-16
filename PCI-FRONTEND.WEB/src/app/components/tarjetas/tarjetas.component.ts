import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { TarjetaService } from 'src/app/services/tarjeta.service';
import {Router} from '@angular/router'

@Component({
  selector: 'app-tarjetas',
  templateUrl: './tarjetas.component.html',
  styleUrls: ['./tarjetas.component.scss']
})
export class TarjetasComponent implements OnInit{
  listTarjetas: any[] = [];
  form: FormGroup;
  filtroTitular: String;

  constructor(private fb: FormBuilder,
    private _tarjetaService: TarjetaService,
    public router: Router) {
      this.form = this.fb.group({
        titular: ['', Validators.required],
        numeroTarjeta: ['', [Validators.required, Validators.maxLength(16),Validators.minLength(16)]],
        fechaExpiracion: ['',[Validators.required, Validators.maxLength(5),Validators.minLength(5)]],
        cvv: ['',[Validators.required, Validators.maxLength(3),Validators.minLength(3)]]
      })
  };


  ngOnInit(): void {
    this.obtenerTarjetas();
  }

  obtenerTarjetas(){
    //Me suscribo al observable
    this._tarjetaService.getListTarjetas().subscribe(data => {
      console.log(data);
      this.listTarjetas = data;
    }, error => {
      console.log(error);
    })
  }

  eliminarTarjeta(id: number){
    this._tarjetaService.deleteTarjeta(id).subscribe(data =>{

      this.obtenerTarjetas();
    }, error => {
      console.log(error);
    }) 
  }

  filtrarTarjetas(){
    //Me suscribo al observable
    this._tarjetaService.getListTarjetasTitular(this.filtroTitular).subscribe(data => {
      console.log(data);
      this.listTarjetas = data;
    }, error => {
      console.log(error);
    })
  }
  
}
