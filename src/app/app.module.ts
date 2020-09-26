import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
// routes
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
// componentes
import { ListadoComponent } from './components/listado/listado.component';
import { AlumnoComponent } from './components/alumno/alumno.component';
// servicios
import { CarnetsService } from './services/carnets.service';
import { CrudService } from './services/crud.service';
// forms
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
// http
import { HttpClientModule} from '@angular/common/http';
import { KeyPipe } from './pipes/key.pipe';

@NgModule({
  declarations: [
    AppComponent,
    ListadoComponent,
    AlumnoComponent,
    KeyPipe,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule

  ],
  providers: [ CarnetsService, CrudService],
  bootstrap: [AppComponent]
})
export class AppModule { }
