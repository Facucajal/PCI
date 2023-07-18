import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators} from '@angular/forms';
import { TarjetaService } from 'src/app/services/tarjeta.service';
import {Router} from '@angular/router'
import { Base } from '../base';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.scss']
})
export class CreateComponent extends Base{

  ngOnInit(): void {

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

  guardarTarjeta(){
    
    const tarjeta: any ={
      titular: this.form.get('titular')?.value,
      numeroTarjeta: this.form.get('numeroTarjeta')?.value,
      fechaExpiracion: (this.form.get('anioExp')?.value +"-"+ this.form.get('mesExp')?.value+"-"+"01"),
      cvv: this.form.get('cvv')?.value,
      fechaInicio: (this.form.get('anioIni')?.value +"-"+ this.form.get('mesIni')?.value+"-"+"01"),
      categoria: this.form.get('categoria')?.value,
      banco: this.form.get('banco')?.value
    }

    console.log(tarjeta);
    
    this._tarjetaService.saveTarjeta(tarjeta).subscribe(data => {

      this.router.navigate(['/tarjetas'])
      this.form.reset();
    }, error => {

      console.log(error)
    })
  }
}
