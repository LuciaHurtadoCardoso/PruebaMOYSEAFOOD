import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule} from '@angular/common/http';

import { AppComponent } from './app.component';
import { ListadoComponent } from './listado/listado.component';
import {Pipe, PipeTransform} from '@angular/core';
import {FormsModule} from '@angular/forms';
import { FilterPipe } from './filter.pipe';
import { DetalleUserComponent } from './listado/detalle-user/detalle-user.component';

@NgModule({
  declarations: [
    AppComponent,
    ListadoComponent,
    FilterPipe,
    DetalleUserComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
