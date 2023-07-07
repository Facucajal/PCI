import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { TarjetaCreditoComponent } from './components/tarjeta-credito/tarjeta-credito.component';
import { ReactiveFormsModule } from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import { CreateComponent } from './components/create/create.component';

import { RouterModule } from '@angular/router';
import { TarjetasComponent } from './components/tarjetas/tarjetas.component';
import { EditComponent } from './components/edit/edit.component';
import { CarouselComponent } from './components/carousel/carousel.component';

@NgModule({
  declarations: [
    AppComponent,
    TarjetaCreditoComponent,
    CreateComponent,
    TarjetasComponent,
    EditComponent,
    CarouselComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    HttpClientModule,
    //Toma arreglo de objetos que definen las rutas
    RouterModule.forRoot([
      {path:'create',component:CreateComponent},
      {path:'tarjetas',component:TarjetasComponent},
      {path:'edit/:id',component:EditComponent},
      {path:'',component:CarouselComponent}
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
