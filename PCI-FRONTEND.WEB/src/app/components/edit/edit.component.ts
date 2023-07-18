import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { TarjetaService } from 'src/app/services/tarjeta.service';
import {Router,ActivatedRoute} from '@angular/router'
import { Base } from '../base';

@Component({
  selector: 'app-edit',
  templateUrl: '../create/create.component.html',
  styleUrls: ['../create/create.component.scss']
})
export class EditComponent extends Base {


  ngOnInit(): void {
    const id = parseInt(this.activeRoute.snapshot.paramMap.get('id'))
    this.mostrarTarjeta(id);
  }

  guardarTarjeta(){
    const id = parseInt(this.activeRoute.snapshot.paramMap.get('id')) //agarro el id del path
    this.updateTarjeta(id);
    this.router.navigate(['/tarjetas'])
  }

  mostrarTarjeta(id: number){
    this._tarjetaService.getTarjeta(id).subscribe(data => {
      console.log(data);
      const tarjeta: any = data
      this.form.patchValue({
        titular: tarjeta.titular,
        numeroTarjeta: tarjeta.numeroTarjeta,
        anioIni: tarjeta.fechaInicio.slice(0,4),
        mesIni: tarjeta.fechaInicio.slice(5,7),
        anioExp: tarjeta.fechaExpiracion.slice(0,4),
        mesExp: tarjeta.fechaExpiracion.slice(5,7),
        cvv: tarjeta.cvv,
        categoria: tarjeta.categoria,
        banco: tarjeta.banco
      })
    })
  }

  updateTarjeta(id: number){
    
    const tarjeta: any ={
      titular: this.form.get('titular')?.value,
      numeroTarjeta: this.form.get('numeroTarjeta')?.value,
      fechaExpiracion: (this.form.get('anioExp')?.value +"-"+ this.form.get('mesExp')?.value+"-"+"01"),
      cvv: this.form.get('cvv')?.value,
      fechaInicio: (this.form.get('anioIni')?.value +"-"+ this.form.get('mesIni')?.value+"-"+"01"),
      categoria: +this.form.get('categoria')?.value,
      banco: this.form.get('banco')?.value
    }
    console.log(tarjeta);
    tarjeta.id = id;
    this._tarjetaService.updateTarjeta(id,tarjeta).subscribe(data => {
      this.form.reset();
    }, error => {
      console.log(error)
    })
  }
}