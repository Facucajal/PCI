import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { TarjetaService } from 'src/app/services/tarjeta.service';

@Component({
  selector: 'app-tarjetas',
  templateUrl: './tarjetas.component.html',
  styleUrls: ['./tarjetas.component.scss']
})
export class TarjetasComponent implements OnInit{
  listTarjetas: any[] = [];
  accion = 'Agregar';
  form: FormGroup;
  id: number | undefined;

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

  guardarTarjeta(){

    const tarjeta: any ={
      titular: this.form.get('titular')?.value,
      numeroTarjeta: this.form.get('numeroTarjeta')?.value,
      fechaExpiracion: this.form.get('fechaExpiracion')?.value,
      cvv: this.form.get('cvv')?.value,
    }

    if(this.id == undefined){
      //Agregamos una nueva tarjerta

      this._tarjetaService.saveTarjeta(tarjeta).subscribe(data => {

        this.obtenerTarjetas();
        this.form.reset();
      }, error => {

        console.log(error)
      })
    }
    else{

      tarjeta.id = this.id;
      //Editamos Tarjeta
      this._tarjetaService.updateTarjeta(this.id,tarjeta).subscribe(data => {
        this.form.reset();
        this.accion='Agregar';
        this.id = undefined;

        this.obtenerTarjetas();
      }, error => {
        console.log(error)
      })
    } 
  }

  eliminarTarjeta(id: number){
    this._tarjetaService.deleteTarjeta(id).subscribe(data =>{

      this.obtenerTarjetas();
    }, error => {
      console.log(error);
    })
    
  }
  
  editarTarjeta(tarjeta: any){
    this.accion = 'Editar';
    this.id = tarjeta.id;

    this.form.patchValue({
      titular: tarjeta.titular,
      numeroTarjeta: tarjeta.numeroTarjeta,
      fechaExpiracion: tarjeta.fechaExpiracion,
      cvv: tarjeta.cvv
    })
  }
}
