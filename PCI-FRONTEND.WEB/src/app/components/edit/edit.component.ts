import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { TarjetaService } from 'src/app/services/tarjeta.service';
import {Router,ActivatedRoute} from '@angular/router'

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.scss']
})
export class EditComponent implements OnInit {
  listTarjetas: any[] = [];
  form: FormGroup;

  constructor(
    private fb: FormBuilder,
    private _tarjetaService: TarjetaService,
    public router: Router,
    private activeRoute: ActivatedRoute
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
    const id = parseInt(this.activeRoute.snapshot.paramMap.get('id'))
    this.mostrarTarjeta(id);
  }

  onSubmit(){
    const id2 = parseInt(this.activeRoute.snapshot.paramMap.get('id'))
    this.updateTarjeta(id2);
    this.router.navigate(['/tarjetas'])
  }


  mostrarTarjeta(id: number){
    this._tarjetaService.getTarjeta(id).subscribe(data => {
      console.log(data);
      const tarjeta: any = data

      this.form.patchValue({
        titular: tarjeta.titular,
        numeroTarjeta: tarjeta.numeroTarjeta,
        fechaExpiracion: tarjeta.fechaExpiracion,
        cvv: tarjeta.cvv
      })
    })
  }

  updateTarjeta(id: number){
    
    const tarjeta: any ={
      titular: this.form.get('titular')?.value,
      numeroTarjeta: this.form.get('numeroTarjeta')?.value,
      fechaExpiracion: this.form.get('fechaExpiracion')?.value,
      cvv: this.form.get('cvv')?.value,
    }
    tarjeta.id = id;
    this._tarjetaService.updateTarjeta(id,tarjeta).subscribe(data => {
      this.form.reset();
    }, error => {
      console.log(error)
    })

  }

}