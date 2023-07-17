import { Component, Directive, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { TarjetaService } from 'src/app/services/tarjeta.service';
import {Router,ActivatedRoute} from '@angular/router'


@Directive()
export abstract class Base {
  listTarjetas: any[] = [];
  form: FormGroup;
  tarjeta : any;

  constructor(protected fb: FormBuilder,
    protected _tarjetaService: TarjetaService,
    public router: Router,
    protected activeRoute: ActivatedRoute
    ) {
      this.form = this.fb.group({
        titular: ['', Validators.required],
        numeroTarjeta: ['', /*[Validators.required, Validators.maxLength(16),Validators.minLength(16)]*/],
        anioIni: ['',[Validators.required, Validators.maxLength(2),Validators.minLength(2)]],
        mesIni: ['',[Validators.required, Validators.maxLength(2),Validators.minLength(2)]],
        anioExp: ['',[Validators.required, Validators.maxLength(2),Validators.minLength(2)]],
        mesExp: ['',[Validators.required, Validators.maxLength(2),Validators.minLength(2)]],
        cvv: ['',/*[Validators.required, Validators.maxLength(3),Validators.minLength(3)]*/],
        fechaInicio: [''],
        categoria: [0]
      })
  };
}