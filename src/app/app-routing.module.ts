import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListadoComponent } from './components/listado/listado.component';
import { AlumnoComponent } from './components/alumno/alumno.component';

const routes: Routes = [
  {path: '', component: ListadoComponent},
  {path: 'lista', component: ListadoComponent},
  {path: 'alumno/:id', component: AlumnoComponent},
  {path: '**', component: ListadoComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
