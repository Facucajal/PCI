import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { ReactiveFormsModule } from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import { CreateComponent } from './components/create/create.component';
import { RouterModule } from '@angular/router';
import { TarjetasComponent } from './components/tarjetas/tarjetas.component';
import { EditComponent } from './components/edit/edit.component';
import { CarouselComponent } from './components/carousel/carousel.component';
import { PruebaComponent } from './components/prueba/prueba.component';

@NgModule({
  declarations: [
    AppComponent,
    CreateComponent,
    TarjetasComponent,
    EditComponent,
    CarouselComponent,
    PruebaComponent,
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    HttpClientModule,
    FormsModule,
    //Toma arreglo de objetos que definen las rutas
    RouterModule.forRoot([
      {path:'create',component:CreateComponent},
      {path:'tarjetas',component:TarjetasComponent},
      {path:'edit/:id',component:EditComponent},
      {path:'',component:CarouselComponent},
      {path:'prueba',component:PruebaComponent}
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
