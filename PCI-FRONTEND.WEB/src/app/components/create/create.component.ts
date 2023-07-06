import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { TarjetaService } from 'src/app/services/tarjeta.service';
import {Router} from '@angular/router'

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.scss']
})
export class CreateComponent implements OnInit {
  listTarjetas: any[] = [];
  form: FormGroup;


  constructor(
    private fb: FormBuilder,
    private _tarjetaService: TarjetaService,
    public router: Router
    ) 
    {
        this.form = this.fb.group(
          {
            titular: ['', Validators.required],
            numeroTarjeta: ['', [Validators.required, Validators.maxLength(16),Validators.minLength(16)]],
            fechaExpiracion: ['',[Validators.required, Validators.maxLength(5),Validators.minLength(5)]],
            cvv: ['',[Validators.required, Validators.maxLength(3),Validators.minLength(3)]]
          })
  };


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
      fechaExpiracion: this.form.get('fechaExpiracion')?.value,
      cvv: this.form.get('cvv')?.value,
    }

    this._tarjetaService.saveTarjeta(tarjeta).subscribe(data => {

      this.router.navigate(['/tarjetas'])
      this.form.reset();
    }, error => {

      console.log(error)
    })
  }
}
